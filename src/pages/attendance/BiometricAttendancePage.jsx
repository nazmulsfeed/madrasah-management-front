import { useState, useEffect, useMemo } from 'react';
import {
  Cpu, Clock, Send, Smartphone, ShieldCheck, CheckCircle2,
  AlertCircle, RefreshCw, Server, Info, Radio, UserCheck, Bell,
  Power, ShieldAlert, CheckSquare, Square, Eye, EyeOff,
  UploadCloud, Check, Search, Filter, Layers, Settings,
  AlertTriangle, Users, GraduationCap, User, ArrowUpCircle,
  CheckCheck, RotateCw, ExternalLink, HelpCircle
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';

export default function BiometricAttendancePage() {
  const { user } = useAuthStore();

  // Active Tab: 'users' | 'devices' | 'settings'
  const [activeTab, setActiveTab] = useState('users');

  // ==========================================
  // Tab 1: Biometric Users & Sync State
  // ==========================================
  const [usersList, setUsersList] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userStats, setUserStats] = useState({ total: 0, notUploaded: 0, needsUpdate: 0, synced: 0 });
  const [classes, setClasses] = useState([]);
  const [sections, setSections] = useState([]);

  // Filters
  const [filterType, setFilterType] = useState('all'); // all, student, teacher
  const [filterClass, setFilterClass] = useState('all');
  const [filterSection, setFilterSection] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all'); // all, not_uploaded, needs_update, synced
  const [searchQuery, setSearchQuery] = useState('');

  // Selection
  const [selectedUserIds, setSelectedUserIds] = useState(new Set());
  const [targetDeviceSN, setTargetDeviceSN] = useState('all');

  // Verify Modal & Process
  const [verifying, setVerifying] = useState(false);
  const [verifyReport, setVerifyReport] = useState(null);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  // Upload Process
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null);

  // ==========================================
  // Tab 2: Connected Devices State
  // ==========================================
  const [devices, setDevices] = useState([]);
  const [loadingDevices, setLoadingDevices] = useState(false);
  const [sendingDeviceCmd, setSendingDeviceCmd] = useState(false);

  // ==========================================
  // Tab 3: Settings & Simulator State (Existing)
  // ==========================================
  const [cutoffTime, setCutoffTime] = useState('09:30');
  const [autoAbsentEnabled, setAutoAbsentEnabled] = useState(false);
  const [biometricAttendanceEnabled, setBiometricAttendanceEnabled] = useState(false);
  const [attendancePushNotifEnabled, setAttendancePushNotifEnabled] = useState(false);
  const [testDeviceUserId, setTestDeviceUserId] = useState('');

  const [loadingSettings, setLoadingSettings] = useState(false);
  const [savingSettings, setSavingSettings] = useState(false);

  // Android Virtual Simulator State
  const [testStudentId, setTestStudentId] = useState('999');
  const [testPunchTime, setTestPunchTime] = useState('');
  const [simulating, setSimulating] = useState(false);
  const [simulatorResponse, setSimulatorResponse] = useState(null);
  const [simulatorError, setSimulatorError] = useState(null);

  // Push Notification Diagnostics State
  const [diagnosing, setDiagnosing] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState(null);
  const [diagnosticError, setDiagnosticError] = useState(null);

  // Manual Trigger Auto Absent
  const [runningAbsentCheck, setRunningAbsentCheck] = useState(false);
  const [absentCheckResponse, setAbsentCheckResponse] = useState(null);

  // Global Message / Alert
  const [message, setMessage] = useState(null);

  // Load initial metadata and settings
  useEffect(() => {
    fetchMetadata();
    fetchBiometricSettings();
    fetchDevices();
    fetchBiometricUsers();
  }, []);

  const fetchMetadata = async () => {
    try {
      const [resClasses, resSections] = await Promise.all([
        api.get('/students/classes').catch(() => ({ data: { success: false } })),
        api.get('/students/sections').catch(() => ({ data: { success: false } })),
      ]);
      if (resClasses.data?.success) {
        setClasses(resClasses.data.data.classes || []);
      }
      if (resSections.data?.success) {
        setSections(resSections.data.data.sections || []);
      }
    } catch (e) {
      console.warn('Metadata fetch error:', e);
    }
  };

  const fetchBiometricSettings = async () => {
    try {
      setLoadingSettings(true);
      const res = await api.get('/attendance/biometric-settings');
      if (res.data?.success) {
        setCutoffTime(res.data.data.attendanceCutoffTime || '09:30');
        setAutoAbsentEnabled(Boolean(res.data.data.autoAbsentEnabled));
        setBiometricAttendanceEnabled(Boolean(res.data.data.biometricAttendanceEnabled));
        setAttendancePushNotifEnabled(Boolean(res.data.data.attendancePushNotifEnabled));
        const devId = res.data.data.testDeviceUserId || '';
        setTestDeviceUserId(devId);
        if (devId) setTestStudentId(devId);
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    } finally {
      setLoadingSettings(false);
    }
  };

  const fetchDevices = async () => {
    try {
      setLoadingDevices(true);
      const res = await api.get('/attendance/biometric-devices');
      if (res.data?.success) {
        setDevices(res.data.data.devices || []);
      }
    } catch (err) {
      console.error('Error fetching devices:', err);
    } finally {
      setLoadingDevices(false);
    }
  };

  const fetchBiometricUsers = async () => {
    try {
      setLoadingUsers(true);
      const params = {};
      if (filterType !== 'all') params.type = filterType;
      if (filterClass !== 'all') params.classLevel = filterClass;
      if (filterSection !== 'all') params.section = filterSection;
      if (filterStatus !== 'all') params.status = filterStatus;
      if (searchQuery.trim()) params.search = searchQuery.trim();

      const res = await api.get('/attendance/biometric-users', { params });
      if (res.data?.success) {
        setUsersList(res.data.data.users || []);
        if (res.data.data.stats) {
          setUserStats(res.data.data.stats);
        }
      }
    } catch (err) {
      console.error('Error fetching biometric users:', err);
    } finally {
      setLoadingUsers(false);
    }
  };

  // Re-fetch users when major filters change
  useEffect(() => {
    fetchBiometricUsers();
    setSelectedUserIds(new Set()); // Clear selection on filter change
  }, [filterType, filterClass, filterSection, filterStatus]);

  // Handle Search submit / debounce
  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    fetchBiometricUsers();
  };

  // Selection handlers
  const handleToggleSelectAll = () => {
    if (selectedUserIds.size === usersList.length && usersList.length > 0) {
      setSelectedUserIds(new Set());
    } else {
      const allIds = new Set(usersList.map((u) => `${u.type}_${u.id}`));
      setSelectedUserIds(allIds);
    }
  };

  const handleToggleUser = (userItem) => {
    const key = `${userItem.type}_${userItem.id}`;
    const next = new Set(selectedUserIds);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    setSelectedUserIds(next);
  };

  const isAllSelected = useMemo(() => {
    return usersList.length > 0 && selectedUserIds.size === usersList.length;
  }, [selectedUserIds, usersList]);

  // Selected Users Array
  const selectedUsersList = useMemo(() => {
    return usersList.filter((u) => selectedUserIds.has(`${u.type}_${u.id}`));
  }, [selectedUserIds, usersList]);

  // ==========================================
  // Action: Verify Selected Users
  // ==========================================
  const handleVerifySelected = async (liveQuery = false) => {
    const targets = selectedUsersList.length > 0 ? selectedUsersList : usersList;
    if (targets.length === 0) {
      setMessage({ type: 'error', text: 'যাচাই করার জন্য কোনো শিক্ষার্থী বা শিক্ষক পাওয়া যায়নি।' });
      return;
    }

    try {
      setVerifying(true);
      setVerifyReport(null);
      setShowVerifyModal(true);

      const res = await api.post('/attendance/biometric-verify', {
        users: targets,
        serialNumber: targetDeviceSN,
        liveQuery,
      });

      if (res.data?.success) {
        setVerifyReport(res.data.data);
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'ভেরিফাই করতে সমস্যা হয়েছে।' });
    } finally {
      setVerifying(false);
    }
  };

  // ==========================================
  // Action: Upload Selected Users to Device
  // ==========================================
  const handleUploadUsers = async (customUsers = null) => {
    const targets = customUsers || (selectedUsersList.length > 0 ? selectedUsersList : usersList);
    if (!targets || targets.length === 0) {
      setMessage({ type: 'error', text: 'আপলোড করার জন্য কোনো ব্যবহারকারী নির্বাচন করা হয়নি।' });
      return;
    }

    const deviceName = targetDeviceSN === 'all'
      ? 'সকল সংযুক্ত ZKTeco ডিভাইসে'
      : `ডিভাইস (SN: ${targetDeviceSN})-এ`;

    const confirmMsg = `আপনি কি নির্বাচিত ${targets.length} জন শিক্ষার্থী/শিক্ষকের আইডি ${deviceName} আপলোড করতে চান?`;
    if (!window.confirm(confirmMsg)) return;

    try {
      setUploading(true);
      setUploadResult(null);

      const res = await api.post('/attendance/biometric-upload', {
        users: targets,
        serialNumber: targetDeviceSN,
        includePhoto: true,
      });

      if (res.data?.success) {
        setMessage({ type: 'success', text: res.data.message });
        setUploadResult(res.data.data);
        setShowVerifyModal(false);
        // Refresh users list & devices
        fetchBiometricUsers();
        fetchDevices();
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'ডিভাইসে আপলোড করতে ব্যর্থ হয়েছে।' });
    } finally {
      setUploading(false);
    }
  };

  // Send Direct Device Command
  const handleSendDeviceCommand = async (sn, cmdType) => {
    try {
      setSendingDeviceCmd(true);
      const res = await api.post('/attendance/biometric-device-command', {
        serialNumber: sn,
        commandType: cmdType,
      });
      if (res.data?.success) {
        setMessage({ type: 'success', text: res.data.message });
        fetchDevices();
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'ডিভাইস কমান্ড পাঠাতে সমস্যা হয়েছে।' });
    } finally {
      setSendingDeviceCmd(false);
    }
  };

  // Save Settings
  const handleSaveSettings = async (e) => {
    if (e) e.preventDefault();
    try {
      setSavingSettings(true);
      const res = await api.patch('/attendance/biometric-settings', {
        attendanceCutoffTime: cutoffTime,
        autoAbsentEnabled,
        biometricAttendanceEnabled,
        attendancePushNotifEnabled,
        testDeviceUserId,
      });
      if (res.data?.success) {
        setMessage({ type: 'success', text: 'সেটিংস সফলভাবে সংরক্ষণ করা হয়েছে!' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'সেটিংস সেভ করতে সমস্যা হয়েছে।' });
    } finally {
      setSavingSettings(false);
    }
  };

  // Virtual simulator
  const handleSimulatePunch = async (e) => {
    if (e) e.preventDefault();
    const idToPunch = (testStudentId || testDeviceUserId || '999').trim();
    if (!idToPunch) {
      const errText = 'অনুগ্রহ করে ছাত্রের আইডি বা বায়োমেট্রিক আইডি লিখুন।';
      setSimulatorError(errText);
      setMessage({ type: 'error', text: errText });
      return;
    }
    try {
      setSimulating(true);
      setSimulatorResponse(null);
      setSimulatorError(null);
      const res = await api.post('/attendance/device-push-test', {
        deviceUserId: idToPunch,
        punchTime: testPunchTime ? new Date(testPunchTime).toISOString() : new Date().toISOString(),
      });
      if (res.data?.success) {
        setSimulatorResponse(res.data.data);
        setMessage({ type: 'success', text: res.data.message });
      }
    } catch (err) {
      const errText = err.response?.data?.message || err.message || 'পাঞ্চ সিমুলেশনে সমস্যা হয়েছে।';
      setSimulatorError(errText);
      setMessage({ type: 'error', text: errText });
    } finally {
      setSimulating(false);
    }
  };

  // Push diagnostics
  const handleRunPushDiagnostic = async () => {
    const idToTest = (testStudentId || testDeviceUserId || '999').trim();
    if (!idToTest) {
      const errText = 'অনুগ্রহ করে টেস্ট ছাত্রের আইডি লিখুন।';
      setDiagnosticError(errText);
      setMessage({ type: 'error', text: errText });
      return;
    }
    try {
      setDiagnosing(true);
      setDiagnosticResult(null);
      setDiagnosticError(null);
      const res = await api.post('/attendance/test-push-diagnostics', {
        deviceUserId: idToTest,
      });
      if (res.data?.success) {
        setDiagnosticResult(res.data.data);
        setMessage({ type: 'success', text: res.data.message });
      }
    } catch (err) {
      const errText = err.response?.data?.message || err.message || 'ডায়াগনস্টিক চালাতে সমস্যা হয়েছে।';
      setDiagnosticError(errText);
      setMessage({ type: 'error', text: errText });
    } finally {
      setDiagnosing(false);
    }
  };

  // Run auto absent check
  const handleRunAbsentCheck = async () => {
    const confirmRun = window.confirm('সতর্কবার্তা: নির্ধারিত সময় পার হওয়া অনুপস্থিত ছাত্রদের চিহ্নিত করা হবে। আপনি কি নিশ্চিত?');
    if (!confirmRun) return;
    try {
      setRunningAbsentCheck(true);
      setAbsentCheckResponse(null);
      const res = await api.post('/attendance/auto-absent-check');
      if (res.data?.success) {
        setAbsentCheckResponse(res.data.data);
        setMessage({ type: 'success', text: res.data.message });
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'অনুপস্থিত চেক চালাতে সমস্যা হয়েছে।' });
    } finally {
      setRunningAbsentCheck(false);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 20px', fontFamily: 'inherit' }}>
      
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        borderRadius: '16px',
        padding: '22px 24px',
        marginBottom: '20px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              border: '1px solid rgba(16, 185, 129, 0.4)'
            }}>
              <Cpu size={28} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 700 }}>ZKTeco বায়োমেট্রিক ও ডিভাইস সিঙ্ক হাব</h1>
                <span style={{
                  background: 'rgba(16, 185, 129, 0.2)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '2px 8px',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 600
                }}>
                  ADMS Cloud Engine
                </span>
              </div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.84rem', color: '#94a3b8' }}>
                ডাটাবেজ থেকে শিক্ষার্থী ও শিক্ষকদের আইডি ZKTeco মেশিনে একযোগে আপলোড, যাচাইকরণ ও ডিভাইস নিয়ন্ত্রণ
              </p>
            </div>
          </div>

          {/* Quick Refresh */}
          <button
            onClick={() => {
              fetchBiometricUsers();
              fetchDevices();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#f8fafc',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              padding: '8px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.82rem',
              fontWeight: 500,
              transition: 'all 0.2s'
            }}
          >
            <RefreshCw size={15} className={loadingUsers || loadingDevices ? 'animate-spin' : ''} />
            <span>রিফ্রেশ করুন</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '16px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('users')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 16px',
              borderRadius: '10px',
              fontSize: '0.86rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'users' ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'users' ? '#ffffff' : '#cbd5e1',
              boxShadow: activeTab === 'users' ? '0 4px 12px rgba(16, 185, 129, 0.35)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <UploadCloud size={17} />
            <span>আইডি সিঙ্ক ও আপলোড</span>
            {userStats.notUploaded > 0 && (
              <span style={{
                background: activeTab === 'users' ? '#047857' : '#ef4444',
                color: '#fff',
                fontSize: '0.7rem',
                padding: '1px 6px',
                borderRadius: '10px',
                fontWeight: 700
              }}>
                {userStats.notUploaded}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('devices')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 16px',
              borderRadius: '10px',
              fontSize: '0.86rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'devices' ? '#3b82f6' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'devices' ? '#ffffff' : '#cbd5e1',
              boxShadow: activeTab === 'devices' ? '0 4px 12px rgba(59, 130, 246, 0.35)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <Server size={17} />
            <span>সংযুক্ত ডিভাইসসমূহ ({devices.length})</span>
            {devices.some(d => d.status === 'online') && (
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 16px',
              borderRadius: '10px',
              fontSize: '0.86rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'settings' ? '#8b5cf6' : 'rgba(255, 255, 255, 0.08)',
              color: activeTab === 'settings' ? '#ffffff' : '#cbd5e1',
              boxShadow: activeTab === 'settings' ? '0 4px 12px rgba(139, 92, 246, 0.35)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <Settings size={17} />
            <span>সেটিংস ও সিমুলেটর</span>
          </button>
        </div>
      </div>

      {/* Global Alert Notification */}
      {message && (
        <div style={{
          background: message.type === 'error' ? '#fef2f2' : '#f0fdf4',
          border: `1px solid ${message.type === 'error' ? '#fecaca' : '#bbf7d0'}`,
          color: message.type === 'error' ? '#991b1b' : '#166534',
          borderRadius: '10px',
          padding: '12px 16px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.88rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {message.type === 'error' ? <AlertCircle size={20} /> : <CheckCircle2 size={20} />}
            <span>{message.text}</span>
          </div>
          <button
            onClick={() => setMessage(null)}
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit', fontWeight: 700 }}
          >
            ✕
          </button>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 1: আইডি সিঙ্ক ও আপলোড (Device Users & Sync)       */}
      {/* ==================================================== */}
      {activeTab === 'users' && (
        <div>
          {/* Top Stat Summary Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '12px',
            marginBottom: '16px'
          }}>
            {/* Total */}
            <div style={{
              background: 'var(--card-bg, #ffffff)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid var(--border-color, #e2e8f0)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>মোট আইডি (সদস্য)</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.45rem', fontWeight: 700, color: '#0f172a' }}>
                  {userStats.total}
                </h3>
              </div>
              <div style={{ background: '#f1f5f9', color: '#475569', padding: '10px', borderRadius: '10px' }}>
                <Users size={22} />
              </div>
            </div>

            {/* Not Uploaded */}
            <div style={{
              background: 'var(--card-bg, #ffffff)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid #fee2e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#dc2626', fontWeight: 600 }}>মেশিনে নেই (আপলোড হয়নি)</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.45rem', fontWeight: 700, color: '#dc2626' }}>
                  {userStats.notUploaded}
                </h3>
              </div>
              <div style={{ background: '#fef2f2', color: '#dc2626', padding: '10px', borderRadius: '10px' }}>
                <AlertCircle size={22} />
              </div>
            </div>

            {/* Needs Update */}
            <div style={{
              background: 'var(--card-bg, #ffffff)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid #fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#d97706', fontWeight: 600 }}>তথ্য পরিবর্তন (আপডেট প্রয়োজন)</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.45rem', fontWeight: 700, color: '#d97706' }}>
                  {userStats.needsUpdate}
                </h3>
              </div>
              <div style={{ background: '#fffbeb', color: '#d97706', padding: '10px', borderRadius: '10px' }}>
                <RotateCw size={22} />
              </div>
            </div>

            {/* Synced */}
            <div style={{
              background: 'var(--card-bg, #ffffff)',
              borderRadius: '12px',
              padding: '16px',
              border: '1px solid #dcfce7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              <div>
                <span style={{ fontSize: '0.76rem', color: '#16a34a', fontWeight: 600 }}>মেশিনে আপ-টু-ডেট আছে</span>
                <h3 style={{ margin: '2px 0 0 0', fontSize: '1.45rem', fontWeight: 700, color: '#16a34a' }}>
                  {userStats.synced}
                </h3>
              </div>
              <div style={{ background: '#f0fdf4', color: '#16a34a', padding: '10px', borderRadius: '10px' }}>
                <CheckCircle2 size={22} />
              </div>
            </div>
          </div>

          {/* Filters & Action Bar Card */}
          <div style={{
            background: 'var(--card-bg, #ffffff)',
            borderRadius: '14px',
            border: '1px solid var(--border-color, #e2e8f0)',
            padding: '16px',
            marginBottom: '16px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            {/* Filter Controls Row */}
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginBottom: '14px'
            }}>
              {/* Type Filter */}
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  outline: 'none',
                  background: '#fff'
                }}
              >
                <option value="all">👥 সকল সদস্য (ছাত্র + শিক্ষক)</option>
                <option value="student">🎓 শুধুমাত্র শিক্ষার্থী</option>
                <option value="teacher">👨‍🏫 শুধুমাত্র শিক্ষক ও স্টাফ</option>
              </select>

              {/* Class Filter (Only when students included) */}
              {filterType !== 'teacher' && (
                <select
                  value={filterClass}
                  onChange={(e) => setFilterClass(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    outline: 'none',
                    background: '#fff'
                  }}
                >
                  <option value="all">📚 সকল শ্রেণি</option>
                  {classes.map((c) => (
                    <option key={c._id} value={c._id}>{c.name}</option>
                  ))}
                </select>
              )}

              {/* Section Filter */}
              {filterType !== 'teacher' && (
                <select
                  value={filterSection}
                  onChange={(e) => setFilterSection(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.84rem',
                    fontWeight: 500,
                    outline: 'none',
                    background: '#fff'
                  }}
                >
                  <option value="all">🏷️ সকল শাখা</option>
                  {sections.map((s) => (
                    <option key={s._id} value={s.name}>{s.name}</option>
                  ))}
                </select>
              )}

              {/* Sync Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.84rem',
                  fontWeight: 500,
                  outline: 'none',
                  background: '#fff'
                }}
              >
                <option value="all">🔍 সকল সিঙ্ক অবস্থা</option>
                <option value="not_uploaded">🔴 আপলোড করা হয়নি</option>
                <option value="needs_update">🟡 তথ্য সংশোধন (আপডেট প্রয়োজন)</option>
                <option value="synced">🟢 মেশিনে আপ-টু-ডেট আছে</option>
              </select>

              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '6px', flex: 1, minWidth: '220px' }}>
                <div style={{ position: 'relative', width: '100%' }}>
                  <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                  <input
                    type="text"
                    placeholder="নাম, রোল, ডিভাইস আইডি দিয়ে খুঁজুন..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 10px 8px 32px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.84rem',
                      outline: 'none',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    background: '#0f172a',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 14px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  খুঁজুন
                </button>
              </form>
            </div>

            {/* Action Bar (Verify, Upload, Target Device) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingTop: '12px',
              borderTop: '1px dashed #e2e8f0'
            }}>
              {/* Select All Checkbox & Counter */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  type="button"
                  onClick={handleToggleSelectAll}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: isAllSelected ? '#ede9fe' : '#f8fafc',
                    color: isAllSelected ? '#7c3aed' : '#475569',
                    border: `1px solid ${isAllSelected ? '#c4b5fd' : '#cbd5e1'}`,
                    padding: '6px 12px',
                    borderRadius: '7px',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600
                  }}
                >
                  {isAllSelected ? <CheckSquare size={16} /> : <Square size={16} />}
                  <span>{isAllSelected ? 'সব আনমার্ক করুন' : 'সব মার্ক করুন'}</span>
                </button>

                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  {selectedUserIds.size > 0 ? (
                    <strong style={{ color: '#0f172a' }}>{selectedUserIds.size} জন মার্ক করা হয়েছে</strong>
                  ) : (
                    <span>(সবগুলো একসাথে করতে মার্ক করুন)</span>
                  )}
                </span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                {/* Target Device Dropdown */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>টার্গেট ডিভাইস:</span>
                  <select
                    value={targetDeviceSN}
                    onChange={(e) => setTargetDeviceSN(e.target.value)}
                    style={{
                      padding: '7px 10px',
                      borderRadius: '7px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      background: '#fff',
                      color: '#0f172a'
                    }}
                  >
                    <option value="all">🌐 সকল ডিভাইস (All Devices)</option>
                    {devices.map((d) => (
                      <option key={d.serialNumber} value={d.serialNumber}>
                        {d.deviceName || `SN: ${d.serialNumber}`} ({d.status === 'online' ? '🟢 Online' : '⚪ Offline'})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Verify Button */}
                <button
                  type="button"
                  onClick={() => handleVerifySelected(false)}
                  disabled={verifying}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#0284c7',
                    color: '#fff',
                    border: 'none',
                    padding: '7px 14px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: verifying ? 'not-allowed' : 'pointer',
                    boxShadow: '0 2px 6px rgba(2, 132, 199, 0.25)',
                    opacity: verifying ? 0.7 : 1
                  }}
                >
                  <Search size={15} className={verifying ? 'animate-spin' : ''} />
                  <span>আইডি যাচাই (Verify)</span>
                </button>

                {/* Upload Button */}
                <button
                  type="button"
                  onClick={() => handleUploadUsers()}
                  disabled={uploading || (selectedUserIds.size === 0 && usersList.length === 0)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#16a34a',
                    color: '#fff',
                    border: 'none',
                    padding: '7px 16px',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    cursor: uploading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 2px 6px rgba(22, 163, 74, 0.25)',
                    opacity: uploading ? 0.7 : 1
                  }}
                >
                  <UploadCloud size={16} className={uploading ? 'animate-spin' : ''} />
                  <span>
                    {selectedUserIds.size > 0
                      ? `নির্বাচিত ${selectedUserIds.size} টি আপলোড করুন`
                      : 'সবগুলো আপলোড করুন'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* User Table Card */}
          <div style={{
            background: 'var(--card-bg, #ffffff)',
            borderRadius: '14px',
            border: '1px solid var(--border-color, #e2e8f0)',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569', fontWeight: 600 }}>
                    <th style={{ padding: '12px 14px', width: '40px', textAlign: 'center' }}>
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={handleToggleSelectAll}
                        style={{ cursor: 'pointer' }}
                      />
                    </th>
                    <th style={{ padding: '12px 14px' }}>ব্যবহারকারী / নাম</th>
                    <th style={{ padding: '12px 14px' }}>ডিভাইস আইডি (PIN)</th>
                    <th style={{ padding: '12px 14px' }}>শ্রেণি / বিভাগ / পদবী</th>
                    <th style={{ padding: '12px 14px' }}>ডাটাবেজ আপডেট</th>
                    <th style={{ padding: '12px 14px' }}>মেশিনে সর্বশেষ সিঙ্ক</th>
                    <th style={{ padding: '12px 14px' }}>সিঙ্ক অবস্থা</th>
                    <th style={{ padding: '12px 14px', textAlign: 'right' }}>একক অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingUsers ? (
                    <tr>
                      <td colSpan="8" style={{ padding: '36px', textAlign: 'center', color: '#64748b' }}>
                        <RefreshCw size={24} className="animate-spin" style={{ margin: '0 auto 8px auto', color: '#10b981' }} />
                        <p style={{ margin: 0 }}>ব্যবহারকারীর তালিকা লোড হচ্ছে...</p>
                      </td>
                    </tr>
                  ) : usersList.length === 0 ? (
                    <tr>
                      <td colSpan="8" style={{ padding: '36px', textAlign: 'center', color: '#64748b' }}>
                        <Users size={32} style={{ margin: '0 auto 8px auto', opacity: 0.4 }} />
                        <p style={{ margin: 0, fontWeight: 500 }}>কোনো ব্যবহারকারী পাওয়া যায়নি</p>
                        <span style={{ fontSize: '0.78rem' }}>ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন</span>
                      </td>
                    </tr>
                  ) : (
                    usersList.map((u) => {
                      const isSelected = selectedUserIds.has(`${u.type}_${u.id}`);
                      return (
                        <tr
                          key={`${u.type}_${u.id}`}
                          style={{
                            borderBottom: '1px solid #f1f5f9',
                            background: isSelected ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
                            transition: 'background 0.15s'
                          }}
                        >
                          {/* Checkbox */}
                          <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleToggleUser(u)}
                              style={{ cursor: 'pointer' }}
                            />
                          </td>

                          {/* User Photo & Name */}
                          <td style={{ padding: '10px 14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <div style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: '#e2e8f0',
                                border: '1px solid #cbd5e1',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                              }}>
                                {u.photo ? (
                                  <img src={u.photo} alt={u.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                  <User size={18} style={{ color: '#94a3b8' }} />
                                )}
                              </div>
                              <div>
                                <div style={{ fontWeight: 600, color: '#0f172a' }}>{u.name}</div>
                                <div style={{ fontSize: '0.74rem', color: '#64748b', display: 'flex', gap: '6px' }}>
                                  <span style={{
                                    background: u.type === 'student' ? '#e0f2fe' : '#ede9fe',
                                    color: u.type === 'student' ? '#0369a1' : '#6d28d9',
                                    padding: '1px 5px',
                                    borderRadius: '4px',
                                    fontWeight: 600
                                  }}>
                                    {u.type === 'student' ? 'শিক্ষার্থী' : 'শিক্ষক'}
                                  </span>
                                  {u.rollNumber && <span>রোল: {u.rollNumber}</span>}
                                  {u.phone && <span>ফোন: {u.phone}</span>}
                                </div>
                              </div>
                            </div>
                          </td>

                          {/* Effective Device User ID */}
                          <td style={{ padding: '10px 14px' }}>
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                              <span style={{
                                background: u.deviceUserId ? '#dcfce7' : '#f1f5f9',
                                color: u.deviceUserId ? '#166534' : '#334155',
                                border: `1px solid ${u.deviceUserId ? '#86efac' : '#cbd5e1'}`,
                                padding: '3px 8px',
                                borderRadius: '6px',
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: '0.85rem'
                              }}>
                                {u.effectiveDeviceUserId || '-'}
                              </span>
                              {!u.deviceUserId && (
                                <span title="নিজস্ব ডিভাইস আইডি নেই; স্বয়ংক্রিয়ভাবে রোল/আইডি ব্যবহার হচ্ছে" style={{ color: '#94a3b8', cursor: 'help' }}>
                                  <HelpCircle size={14} />
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Class / Designation */}
                          <td style={{ padding: '10px 14px', color: '#475569' }}>
                            {u.type === 'student' ? (
                              <span>
                                {classes.find(c => c._id === u.classLevel)?.name || u.classLevel || '-'}
                                {u.section ? ` (${u.section})` : ''}
                              </span>
                            ) : (
                              <span>{u.designation || 'শিক্ষক'}</span>
                            )}
                          </td>

                          {/* Database Update Time */}
                          <td style={{ padding: '10px 14px', color: '#64748b', fontSize: '0.78rem' }}>
                            {u.updatedAt ? new Date(u.updatedAt).toLocaleDateString('bn-BD', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            }) : '-'}
                          </td>

                          {/* Last Synced to Device Time */}
                          <td style={{ padding: '10px 14px', fontSize: '0.78rem' }}>
                            {u.lastSyncedAt ? (
                              <span style={{ color: '#16a34a', fontWeight: 500 }}>
                                {new Date(u.lastSyncedAt).toLocaleDateString('bn-BD', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}
                              </span>
                            ) : (
                              <span style={{ color: '#94a3b8' }}>কখনও নয়</span>
                            )}
                          </td>

                          {/* Status Badge */}
                          <td style={{ padding: '10px 14px' }}>
                            {u.syncStatus === 'synced' && (
                              <span style={{
                                background: '#dcfce7',
                                color: '#15803d',
                                border: '1px solid #bbf7d0',
                                padding: '3px 8px',
                                borderRadius: '12px',
                                fontSize: '0.74rem',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}>
                                <Check size={12} />
                                আপ-টু-ডেট
                              </span>
                            )}
                            {u.syncStatus === 'needs_update' && (
                              <span style={{
                                background: '#fef3c7',
                                color: '#b45309',
                                border: '1px solid #fde68a',
                                padding: '3px 8px',
                                borderRadius: '12px',
                                fontSize: '0.74rem',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}>
                                <RotateCw size={12} />
                                আপডেট প্রয়োজন
                              </span>
                            )}
                            {u.syncStatus === 'not_uploaded' && (
                              <span style={{
                                background: '#fee2e2',
                                color: '#b91c1c',
                                border: '1px solid #fecaca',
                                padding: '3px 8px',
                                borderRadius: '12px',
                                fontSize: '0.74rem',
                                fontWeight: 600,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}>
                                <AlertCircle size={12} />
                                আপলোড হয়নি
                              </span>
                            )}
                          </td>

                          {/* Quick 1-click Push Button */}
                          <td style={{ padding: '10px 14px', textAlign: 'right' }}>
                            <button
                              type="button"
                              onClick={() => handleUploadUsers([u])}
                              style={{
                                background: 'transparent',
                                border: '1px solid #cbd5e1',
                                color: '#0f172a',
                                padding: '4px 8px',
                                borderRadius: '6px',
                                fontSize: '0.76rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}
                              title="শুধুমাত্র এই আইডিটি ডিভাইসে আপলোড করুন"
                            >
                              <UploadCloud size={13} />
                              <span>আপলোড</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div style={{
              padding: '12px 16px',
              background: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              color: '#64748b'
            }}>
              <span>মোট {usersList.length} জন প্রদর্শিত হচ্ছে</span>
              {selectedUserIds.size > 0 && (
                <span style={{ color: '#0f172a', fontWeight: 600 }}>
                  {selectedUserIds.size} জন নির্বাচিত আছে
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 2: সংযুক্ত ডিভাইসসমূহ (Connected Devices)         */}
      {/* ==================================================== */}
      {activeTab === 'devices' && (
        <div>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700 }}>ZKTeco ডিভাইস ও ADMS ক্লাউড স্ট্যাটাস</h2>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                ডিভাইসগুলো ইন্টারনেট সংযোগের মাধ্যমে সরাসরি আপনার সার্ভারের সাথে সংযুক্ত থাকে
              </span>
            </div>
            <button
              onClick={fetchDevices}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#f1f5f9',
                border: '1px solid #cbd5e1',
                padding: '6px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.82rem',
                fontWeight: 600
              }}
            >
              <RefreshCw size={14} className={loadingDevices ? 'animate-spin' : ''} />
              <span>রিফ্রেশ</span>
            </button>
          </div>

          {/* Device Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '16px',
            marginBottom: '20px'
          }}>
            {loadingDevices ? (
              <div style={{ padding: '30px', textAlign: 'center', color: '#64748b' }}>ডিভাইস তথ্য আসছে...</div>
            ) : devices.length === 0 ? (
              <div style={{
                background: 'var(--card-bg, #ffffff)',
                borderRadius: '12px',
                padding: '24px',
                border: '1px dashed #cbd5e1',
                gridColumn: '1 / -1',
                textAlign: 'center',
                color: '#64748b'
              }}>
                <Server size={32} style={{ margin: '0 auto 8px auto', opacity: 0.5 }} />
                <h4 style={{ margin: '0 0 4px 0', color: '#0f172a' }}>এখনও কোনো ZKTeco ডিভাইস সংযুক্ত হয়নি</h4>
                <p style={{ margin: 0, fontSize: '0.82rem' }}>
                  ডিভাইসে নিচের ADMS ক্লাউড সেটিংস বসিয়ে কানেক্ট করলেই এখানে স্বয়ংক্রিয়ভাবে ভেসে উঠবে।
                </p>
              </div>
            ) : (
              devices.map((d) => (
                <div
                  key={d.id || d.serialNumber}
                  style={{
                    background: 'var(--card-bg, #ffffff)',
                    borderRadius: '14px',
                    border: `1px solid ${d.status === 'online' ? '#bbf7d0' : '#e2e8f0'}`,
                    padding: '18px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.04)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        background: d.status === 'online' ? '#dcfce7' : '#f1f5f9',
                        color: d.status === 'online' ? '#16a34a' : '#64748b',
                        padding: '8px',
                        borderRadius: '10px'
                      }}>
                        <Cpu size={22} />
                      </div>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                          {d.deviceName || 'ZKTeco Biometric'}
                        </h4>
                        <span style={{ fontSize: '0.74rem', color: '#64748b' }}>
                          মডেল: {d.deviceModel || 'MB560-VL'}
                        </span>
                      </div>
                    </div>
                    {/* Status Pill */}
                    <span style={{
                      background: d.status === 'online' ? '#dcfce7' : '#f1f5f9',
                      color: d.status === 'online' ? '#15803d' : '#64748b',
                      border: `1px solid ${d.status === 'online' ? '#86efac' : '#cbd5e1'}`,
                      padding: '3px 9px',
                      borderRadius: '16px',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}>
                      <span style={{
                        width: '7px',
                        height: '7px',
                        borderRadius: '50%',
                        background: d.status === 'online' ? '#22c55e' : '#94a3b8'
                      }} />
                      {d.status === 'online' ? 'অনলাইন (সক্রিয়)' : 'অফলাইন'}
                    </span>
                  </div>

                  {/* Details List */}
                  <div style={{ fontSize: '0.82rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>সিরিয়াল নম্বর (SN):</span>
                      <strong style={{ fontFamily: 'monospace' }}>{d.serialNumber}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>আইপি ঠিকানা:</span>
                      <span style={{ fontFamily: 'monospace' }}>{d.ipAddress || 'Unknown'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>ডিভাইসে সংরক্ষিত ইউজার:</span>
                      <strong>{d.userCount || 0} জন</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>পেন্ডিং কমান্ড কিউ:</span>
                      <span style={{
                        background: d.pendingCommands > 0 ? '#fef3c7' : '#f1f5f9',
                        color: d.pendingCommands > 0 ? '#b45309' : '#64748b',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        fontWeight: 700
                      }}>
                        {d.pendingCommands || 0} টি
                      </span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>সর্বশেষ পিং:</span>
                      <span>
                        {d.lastSeenAt ? new Date(d.lastSeenAt).toLocaleTimeString('bn-BD') : 'কখনও নয়'}
                      </span>
                    </div>
                  </div>

                  {/* Quick Device Actions */}
                  <div style={{
                    display: 'flex',
                    gap: '6px',
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '12px',
                    flexWrap: 'wrap'
                  }}>
                    <button
                      type="button"
                      onClick={() => handleSendDeviceCommand(d.serialNumber, 'CHECK')}
                      disabled={sendingDeviceCmd}
                      style={{
                        flex: 1,
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        color: '#0f172a'
                      }}
                    >
                      কানেকশন চেক
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSendDeviceCommand(d.serialNumber, 'QUERY_USERINFO')}
                      disabled={sendingDeviceCmd}
                      style={{
                        flex: 1,
                        background: '#ede9fe',
                        border: '1px solid #c4b5fd',
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        color: '#6d28d9'
                      }}
                    >
                      ইউজার কোয়েরি
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm('আপনি কি এই ডিভাইসটি রিস্টার্ট করতে চান?')) {
                          handleSendDeviceCommand(d.serialNumber, 'REBOOT');
                        }
                      }}
                      disabled={sendingDeviceCmd}
                      style={{
                        background: '#fee2e2',
                        border: '1px solid #fecaca',
                        borderRadius: '6px',
                        padding: '6px 8px',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        color: '#b91c1c'
                      }}
                    >
                      রিস্টার্ট
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ADMS Cloud Setup Instructions Card */}
          <div style={{
            background: 'var(--card-bg, #ffffff)',
            borderRadius: '14px',
            border: '1px solid #cbd5e1',
            padding: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ background: '#ede9fe', color: '#7c3aed', padding: '8px', borderRadius: '8px' }}>
                <Server size={20} />
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700 }}>ZKTeco ডিভাইসে ADMS কনফিগারেশন নির্দেশিকা</h3>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>ডিভাইসের মেন্যুতে গিয়ে নিচের তথ্যগুলো সেট করুন</span>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '12px',
              background: '#f8fafc',
              padding: '16px',
              borderRadius: '10px',
              fontSize: '0.84rem'
            }}>
              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>ডিভাইস মেন্যু পাথ:</span>
                <strong>Menu ➔ Comm. ➔ Cloud Server / ADMS</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>সার্ভার ঠিকানা (Server Domain):</span>
                <code style={{ background: '#e2e8f0', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  annurislamicacademy.edu.bd
                </code>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>সার্ভার পোর্ট (Server Port):</span>
                <code style={{ background: '#e2e8f0', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                  443 (HTTPS)
                </code>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>Enable Domain Name:</span>
                <strong style={{ color: '#16a34a' }}>ON (চালু)</strong>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: সেটিংস ও সিমুলেটর (Settings & Simulator)       */}
      {/* ==================================================== */}
      {activeTab === 'settings' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Card 1: বায়োমেট্রিক ডিভাইস ও কাট-অফ সেটিংস */}
          <div style={{
            background: 'var(--card-bg, #ffffff)',
            borderRadius: '14px',
            border: '1px solid var(--border-color, #e2e8f0)',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px', borderRadius: '8px' }}>
                <Clock size={20} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>বায়োমেট্রিক উপস্থিতি ও কাট-অফ কনফিগারেশন</h2>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>দৈনিক সময়সীমা ও অনুপস্থিত অটো-মেশিন নির্ধারণ</span>
              </div>
            </div>

            <form onSubmit={handleSaveSettings}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                {/* 1. বায়োমেট্রিক সিস্টেম চালু/বন্ধ */}
                <div style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: biometricAttendanceEnabled ? '#f0fdf4' : '#f8fafc'
                }}>
                  <input
                    type="checkbox"
                    id="bioEnabled"
                    checked={biometricAttendanceEnabled}
                    onChange={(e) => setBiometricAttendanceEnabled(e.target.checked)}
                    style={{ marginTop: '3px', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <label htmlFor="bioEnabled" style={{ cursor: 'pointer' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a' }}>বায়োমেট্রিক উপস্থিতি ইঞ্জিন চালু</div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px' }}>
                      চালু থাকলে ZKTeco মেশিন থেকে আসা পাঞ্চ স্বয়ংক্রিয়ভাবে ডাটাবেজে রেকর্ড হবে।
                    </div>
                  </label>
                </div>

                {/* 2. পুশ নোটিফিকেশন চালু/বন্ধ */}
                <div style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: attendancePushNotifEnabled ? '#f0fdf4' : '#f8fafc'
                }}>
                  <input
                    type="checkbox"
                    id="pushEnabled"
                    checked={attendancePushNotifEnabled}
                    onChange={(e) => setAttendancePushNotifEnabled(e.target.checked)}
                    style={{ marginTop: '3px', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <label htmlFor="pushEnabled" style={{ cursor: 'pointer' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a' }}>অভিভাবকদের লাইভ পুশ নোটিফিকেশন</div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px' }}>
                      ছাত্র পাঞ্চ করার সাথে সাথে অভিভাবকের ফোনে ইনস্ট্যান্ট অ্যাপ নোটিফিকেশন যাবে।
                    </div>
                  </label>
                </div>

                {/* 3. কাট-অফ টাইম */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px', background: '#f8fafc' }}>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.88rem', color: '#0f172a', marginBottom: '6px' }}>
                    উপস্থিতির শেষ সময় (Cut-off Time):
                  </label>
                  <input
                    type="time"
                    value={cutoffTime}
                    onChange={(e) => setCutoffTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      background: '#fff'
                    }}
                  />
                  <span style={{ fontSize: '0.72rem', color: '#64748b', display: 'block', marginTop: '4px' }}>
                    এই সময়ের পর পাঞ্চ না করলে ছাত্রকে স্বয়ংক্রিয়ভাবে অনুপস্থিত ধরা হবে।
                  </span>
                </div>

                {/* 4. অটো অনুপস্থিত সিস্টেম */}
                <div style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: autoAbsentEnabled ? '#f0fdf4' : '#f8fafc'
                }}>
                  <input
                    type="checkbox"
                    id="autoAbsent"
                    checked={autoAbsentEnabled}
                    onChange={(e) => setAutoAbsentEnabled(e.target.checked)}
                    style={{ marginTop: '3px', width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                  <label htmlFor="autoAbsent" style={{ cursor: 'pointer' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#0f172a' }}>কাট-অফ শেষে স্বয়ংক্রিয় অনুপস্থিত মার্ক</div>
                    <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '2px' }}>
                      কাট-অফ সময় শেষ হলে ব্যাকএন্ড ক্রন-জব স্বয়ংক্রিয়ভাবে বাকিদের অনুপস্থিত করবে।
                    </div>
                  </label>
                </div>
              </div>

              {/* Save Settings Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="submit"
                  disabled={savingSettings}
                  style={{
                    background: '#10b981',
                    color: '#fff',
                    border: 'none',
                    padding: '9px 20px',
                    borderRadius: '8px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: savingSettings ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  {savingSettings ? 'সংরক্ষণ হচ্ছে...' : 'সেটিংস সংরক্ষণ করুন'}
                </button>
              </div>
            </form>
          </div>

          {/* Card 2: Virtual ZKTeco Device Simulator */}
          <div style={{
            background: 'var(--card-bg, #ffffff)',
            borderRadius: '14px',
            border: '1px solid var(--border-color, #e2e8f0)',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ background: '#ede9fe', color: '#7c3aed', padding: '8px', borderRadius: '8px' }}>
                <Smartphone size={20} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>ভার্চুয়াল ZKTeco ডিভাইস সিমুলেটর</h2>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>শারীরিক মেশিন ছাড়াই টেস্ট পাঞ্চ পাঠিয়ে নোটিফিকেশন পরখ করুন</span>
              </div>
            </div>

            <form onSubmit={handleSimulatePunch} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
              <div style={{ flex: 1, minWidth: '160px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#475569', marginBottom: '4px' }}>
                  টেস্ট ছাত্রের আইডি বা ডিভাইস আইডি:
                </label>
                <input
                  type="text"
                  placeholder="যেমন: 101 বা 999"
                  value={testStudentId}
                  onChange={(e) => setTestStudentId(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.88rem',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={simulating}
                style={{
                  background: '#7c3aed',
                  color: '#fff',
                  border: 'none',
                  padding: '9px 18px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  cursor: simulating ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Send size={15} />
                <span>{simulating ? 'পাঞ্চ পাঠানো হচ্ছে...' : 'টেস্ট পাঞ্চ পাঠান'}</span>
              </button>
            </form>

            {simulatorResponse && (
              <div style={{
                marginTop: '14px',
                padding: '12px 14px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                fontSize: '0.82rem'
              }}>
                <div style={{ fontWeight: 600, color: '#16a34a', marginBottom: '4px' }}>
                  ✅ পাঞ্চ সফল হয়েছে: {simulatorResponse.studentName} ({simulatorResponse.status})
                </div>
                <div style={{ color: '#64748b' }}>সময়: {simulatorResponse.punchTime} | নোটিফিকেশন: {simulatorResponse.pushResult ? 'প্রেরিত' : 'বন্ধ'}</div>
              </div>
            )}
          </div>

          {/* Card 3: Push Notification Diagnostics & Auto Absent Trigger */}
          <div style={{
            background: 'var(--card-bg, #ffffff)',
            borderRadius: '14px',
            border: '1px solid var(--border-color, #e2e8f0)',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>পুশ নোটিফিকেশন ডায়াগনস্টিক ও ম্যানুয়াল চেক</h2>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>অভিভাবকের ফোনের সাথে সংযোগ পরীক্ষা করুন</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleRunPushDiagnostic}
                disabled={diagnosing}
                style={{
                  background: '#0284c7',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: diagnosing ? 'not-allowed' : 'pointer'
                }}
              >
                {diagnosing ? 'ডায়াগনস্টিক চলছে...' : 'অভিভাবকের ফোন কানেকশন চেক'}
              </button>

              <button
                type="button"
                onClick={handleRunAbsentCheck}
                disabled={runningAbsentCheck}
                style={{
                  background: '#dc2626',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: runningAbsentCheck ? 'not-allowed' : 'pointer'
                }}
              >
                {runningAbsentCheck ? 'চেক চলছে...' : 'ম্যানুয়ালি অটো-অনুপস্থিত চেক চালান'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* VERIFY REPORT MODAL (পপআপ মডাল)                      */}
      {/* ==================================================== */}
      {showVerifyModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '16px'
        }}>
          <div style={{
            background: 'var(--card-bg, #ffffff)',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '680px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.25)',
            border: '1px solid var(--border-color, #e2e8f0)',
            overflow: 'hidden'
          }}>
            {/* Modal Header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#f8fafc'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={18} style={{ color: '#0284c7' }} />
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                  আইডি যাচাইকরণ ও ভেরিফিকেশন রিপোর্ট
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowVerifyModal(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#64748b'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '20px', overflowY: 'auto', flex: 1 }}>
              {verifying ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                  <RefreshCw size={28} className="animate-spin" style={{ margin: '0 auto 10px auto', color: '#0284c7' }} />
                  <p style={{ margin: 0, fontWeight: 600 }}>ডাটাবেজ ও ডিভাইস রেকর্ড মিলিয়ে দেখা হচ্ছে...</p>
                </div>
              ) : verifyReport ? (
                <div>
                  {/* Summary Metric Cards */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '10px',
                    marginBottom: '18px'
                  }}>
                    <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                      <span style={{ fontSize: '0.74rem', color: '#64748b' }}>মোট যাচাইকৃত</span>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a' }}>
                        {verifyReport.summary.totalChecked}
                      </div>
                    </div>
                    <div style={{ background: '#fef2f2', padding: '10px', borderRadius: '10px', textAlign: 'center', border: '1px solid #fee2e2' }}>
                      <span style={{ fontSize: '0.74rem', color: '#dc2626' }}>আপলোড হয়নি</span>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#dc2626' }}>
                        {verifyReport.summary.notUploaded}
                      </div>
                    </div>
                    <div style={{ background: '#fffbeb', padding: '10px', borderRadius: '10px', textAlign: 'center', border: '1px solid #fef3c7' }}>
                      <span style={{ fontSize: '0.74rem', color: '#d97706' }}>তথ্য পরিবর্তন</span>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#d97706' }}>
                        {verifyReport.summary.needsUpdate}
                      </div>
                    </div>
                    <div style={{ background: '#f0fdf4', padding: '10px', borderRadius: '10px', textAlign: 'center', border: '1px solid #dcfce7' }}>
                      <span style={{ fontSize: '0.74rem', color: '#16a34a' }}>আপ-টু-ডেট আছে</span>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#16a34a' }}>
                        {verifyReport.summary.upToDate}
                      </div>
                    </div>
                  </div>

                  {/* Warning on missing custom IDs */}
                  {verifyReport.summary.missingIdCount > 0 && (
                    <div style={{
                      background: '#eff6ff',
                      border: '1px solid #bfdbfe',
                      color: '#1e40af',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      marginBottom: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <Info size={16} />
                      <span>
                        <strong>{verifyReport.summary.missingIdCount}</strong> জনের প্রোফাইলে আলাদা Device User ID নেই। তাদের রোল নম্বর/স্টুডেন্ট আইডি স্বয়ংক্রিয়ভাবে মেশিনের পিন (PIN) হিসেবে ব্যবহৃত হবে।
                      </span>
                    </div>
                  )}

                  {/* User Verification List Table */}
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '0.88rem', color: '#334155' }}>যাচাইকৃত সদস্যদের বিবরণ:</h4>
                  <div style={{ maxHeight: '250px', overflowY: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                      <thead>
                        <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>
                          <th style={{ padding: '8px 10px', textAlign: 'left' }}>নাম</th>
                          <th style={{ padding: '8px 10px', textAlign: 'left' }}>পিন (ID)</th>
                          <th style={{ padding: '8px 10px', textAlign: 'left' }}>যাচাইকরণ ফলাফল</th>
                        </tr>
                      </thead>
                      <tbody>
                        {verifyReport.verifiedDetails.map((v) => (
                          <tr key={`${v.type}_${v.id}`} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '8px 10px', fontWeight: 600 }}>{v.name}</td>
                            <td style={{ padding: '8px 10px', fontFamily: 'monospace' }}>{v.effectiveDeviceUserId}</td>
                            <td style={{ padding: '8px 10px' }}>
                              <span style={{
                                color: v.status === 'synced' ? '#16a34a' : v.status === 'needs_update' ? '#d97706' : '#dc2626',
                                fontWeight: 500
                              }}>
                                {v.message}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Live Device Query Trigger Option */}
                  <div style={{
                    marginTop: '16px',
                    padding: '12px',
                    background: '#f8fafc',
                    border: '1px dashed #cbd5e1',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '10px'
                  }}>
                    <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                      <strong>সরাসরি মেশিনের মেমোরি কোয়েরি:</strong> ডিভাইস কানেক্ট থাকলে মেশিনের ইন্টারনাল মেমোরি রিড করার সিগন্যাল কিউতে পাঠানো হবে।
                    </div>
                    <button
                      type="button"
                      onClick={() => handleVerifySelected(true)}
                      style={{
                        background: '#334155',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '0.76rem',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      মেশিনে লাইভ কোয়েরি পাঠান
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '14px 20px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '10px',
              background: '#f8fafc'
            }}>
              <button
                type="button"
                onClick={() => setShowVerifyModal(false)}
                style={{
                  background: '#f1f5f9',
                  border: '1px solid #cbd5e1',
                  color: '#475569',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                বন্ধ করুন
              </button>

              <button
                type="button"
                onClick={() => handleUploadUsers()}
                disabled={uploading}
                style={{
                  background: '#16a34a',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 18px',
                  borderRadius: '8px',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: uploading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 6px rgba(22, 163, 74, 0.25)'
                }}
              >
                <UploadCloud size={16} />
                <span>যাচাইকৃতগুলো এখন আপলোড করুন</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
