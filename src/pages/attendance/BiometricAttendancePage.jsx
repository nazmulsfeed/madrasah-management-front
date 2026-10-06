import { useState, useEffect } from 'react';
import {
  Cpu, Clock, Send, Smartphone, ShieldCheck, CheckCircle2,
  AlertCircle, RefreshCw, Server, Info, Radio, UserCheck, Bell,
  Power, ShieldAlert, CheckSquare, Square, Eye, EyeOff
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';

export default function BiometricAttendancePage() {
  const { user } = useAuthStore();

  // Settings State
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

  // Feedback Notification
  const [message, setMessage] = useState(null);

  // Load Settings
  useEffect(() => {
    fetchBiometricSettings();
  }, []);

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
        if (devId) {
          setTestStudentId(devId);
        }
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    } finally {
      setLoadingSettings(false);
    }
  };

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

  // মোবাইল থেকে টেস্ট পুশ পাঠানো (ZKTeco ডিভাইস টেস্ট)
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

  // নির্দিষ্ট স্টুডেন্ট আইডির পুশ সাবস্ক্রিপশন চেক ও টেস্ট নোটিফিকেশন পাঠানো
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

  // এখনই অনুপস্থিত চেক চালানো (ম্যানুয়ালি টেস্ট করার জন্য)
  const handleRunAbsentCheck = async () => {
    if (!attendancePushNotifEnabled && !testDeviceUserId) {
      const confirmRun = window.confirm(
        'পুশ নোটিফিকেশন বন্ধ রয়েছে। সিস্টেম ডাটাবেজে অনুপস্থিত স্ট্যাটাস মার্ক করবে কিন্তু কোনো অভিভাবকের ফোনে নোটিফিকেশন পাঠাবে না। আপনি কি চালিয়ে যেতে চান?'
      );
      if (!confirmRun) return;
    } else {
      const confirmRun = window.confirm(
        'সতর্কবার্তা: নির্ধারিত সময় পার হওয়া অনুপস্থিত ছাত্রদের চিহ্নিত করা হবে। আপনি কি নিশ্চিত?'
      );
      if (!confirmRun) return;
    }

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
    <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '16px' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        borderRadius: '16px',
        padding: '24px',
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
              <Cpu size={30} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h1 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 700 }}>ZKTeco বায়োমেট্রিক ও নোটিফিকেশন সিস্টেম</h1>
                <span style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  color: '#f87171',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '2px 8px',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 600
                }}>
                  গোপন সুপার অ্যাডমিন কন্ট্রোল
                </span>
              </div>
              <p style={{ margin: '4px 0 0', opacity: 0.8, fontSize: '0.85rem' }}>
                ডিভাইস উপস্থিতি ইন্টিগ্রেশন, অভিভাবক নোটিফিকেশন সুইচ ও ভার্চুয়াল টেস্ট সিমুলেটর
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: biometricAttendanceEnabled ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            padding: '8px 14px',
            borderRadius: '10px',
            border: `1px solid ${biometricAttendanceEnabled ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
            color: biometricAttendanceEnabled ? '#34d399' : '#f87171',
            fontSize: '0.85rem',
            fontWeight: 600
          }}>
            <Power size={16} />
            <span>সিস্টেম অবস্থা: {biometricAttendanceEnabled ? 'অনলাইন ও সক্রিয়' : 'পরীক্ষামূলক মোড (অফ)'}</span>
          </div>
        </div>
      </div>

      {/* Alert Notification */}
      {message && (
        <div style={{
          padding: '12px 16px',
          borderRadius: '10px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: message.type === 'success' ? '#ecfdf5' : '#fef2f2',
          border: `1px solid ${message.type === 'success' ? '#a7f3d0' : '#fecaca'}`,
          color: message.type === 'success' ? '#065f46' : '#991b1b',
          fontSize: '0.9rem'
        }}>
          {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <span>{message.text}</span>
          <button
            onClick={() => setMessage(null)}
            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit' }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Feature Visibility & Guardian Notification Protection Notice */}
      <div style={{
        background: '#eff6ff',
        border: '1px solid #bfdbfe',
        borderRadius: '12px',
        padding: '14px 18px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        color: '#1e40af',
        fontSize: '0.88rem',
        lineHeight: '1.5'
      }}>
        <ShieldCheck size={24} style={{ flexShrink: 0, marginTop: '2px', color: '#2563eb' }} />
        <div>
          <strong>🔒 ১০০% সুরক্ষিত ও প্রাইভেট টেস্টিং মোড:</strong>
          <div>
            বর্তমানে এই ফিচারটি পাবলিক নয় এবং <strong>কোনো সাধারণ অভিভাবকের ফোনে ভুলবশত নোটিফিকেশন যাবে না</strong>।
            আপনি নিচে আপনার টেস্ট করার জন্য নির্দিষ্ট একটি স্টুডেন্ট আইডি দিয়ে রাখতে পারেন অথবা নোটিফিকেশন সম্পূর্ণ বন্ধ রেখে ডাটাবেজ এন্ট্রি ও অনলাইন পুশ ভেরিফাই করতে পারবেন।
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
        
        {/* Card 1: Functionality & Notification Switches */}
        <div style={{
          background: 'var(--card-bg, #ffffff)',
          border: '1px solid var(--border-color, #e2e8f0)',
          borderRadius: '14px',
          padding: '20px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-color, #e2e8f0)', paddingBottom: '12px' }}>
            <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <Power size={20} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>কার্যকারিতা ও নোটিফিকেশন নিয়ন্ত্রণ</h2>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>সবার জন্য চালু বা বন্ধ রাখার মাস্টার সুইচ</span>
            </div>
          </div>

          <form onSubmit={handleSaveSettings}>
            {/* Master Switch 1 */}
            <div style={{
              background: biometricAttendanceEnabled ? '#f0fdf4' : '#f8fafc',
              border: `1px solid ${biometricAttendanceEnabled ? '#bbf7d0' : '#e2e8f0'}`,
              borderRadius: '10px',
              padding: '12px 14px',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }} onClick={() => setBiometricAttendanceEnabled(!biometricAttendanceEnabled)}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: biometricAttendanceEnabled ? '#15803d' : '#334155' }}>
                  বায়োমেট্রিক উপস্থিতি সার্ভিস
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {biometricAttendanceEnabled ? 'চালু রয়েছে (সিস্টেম প্রস্তুত)' : 'বন্ধ রয়েছে (কেবল সুপার অ্যাডমিন টেস্ট)'}
                </div>
              </div>
              <input
                type="checkbox"
                checked={biometricAttendanceEnabled}
                onChange={(e) => setBiometricAttendanceEnabled(e.target.checked)}
                style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#10b981' }}
              />
            </div>

            {/* Master Switch 2: Guardian Push Notifications */}
            <div style={{
              background: attendancePushNotifEnabled ? '#fef3c7' : '#f8fafc',
              border: `1px solid ${attendancePushNotifEnabled ? '#fde68a' : '#e2e8f0'}`,
              borderRadius: '10px',
              padding: '12px 14px',
              marginBottom: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer'
            }} onClick={() => setAttendancePushNotifEnabled(!attendancePushNotifEnabled)}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: attendancePushNotifEnabled ? '#b45309' : '#334155' }}>
                  সকল অভিভাবকের ফোনে পুশ নোটিফিকেশন
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                  {attendancePushNotifEnabled ? 'সকল অভিভাবকের কাছে নোটিফিকেশন যাবে' : 'বন্ধ (কোন অভিভাবকের কাছে যাবে না)'}
                </div>
              </div>
              <input
                type="checkbox"
                checked={attendancePushNotifEnabled}
                onChange={(e) => setAttendancePushNotifEnabled(e.target.checked)}
                style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#d97706' }}
              />
            </div>

            {/* Single Test Student Filter for Notification */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                🎯 শুধুমাত্র একটি টেস্ট স্টুডেন্ট আইডি (ঐচ্ছিক):
              </label>
              <input
                type="text"
                placeholder="যেমন: STU-001 (এটি দিলে শুধু এই আইডিতে নোটিফিকেশন যাবে)"
                value={testDeviceUserId}
                onChange={(e) => setTestDeviceUserId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.88rem',
                  outline: 'none',
                  background: 'var(--input-bg, #f8fafc)'
                }}
              />
              <span style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '4px', display: 'block' }}>
                * অভিভাবক নোটিফিকেশন বন্ধ থাকলেও শুধুমাত্র এই আইডিতে আপনি টেস্ট নোটিফিকেশন পাঠাতে পারবেন।
              </span>
            </div>

            {/* Cutoff Time */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                উপস্থিতির শেষ সময় (Cut-off Time):
              </label>
              <input
                type="time"
                value={cutoffTime}
                onChange={(e) => setCutoffTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  outline: 'none',
                  background: 'var(--input-bg, #f8fafc)'
                }}
              />
            </div>

            {/* Auto Absent Switch */}
            <div style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input
                type="checkbox"
                id="autoAbsent"
                checked={autoAbsentEnabled}
                onChange={(e) => setAutoAbsentEnabled(e.target.checked)}
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#10b981' }}
              />
              <label htmlFor="autoAbsent" style={{ fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer' }}>
                কাট-অফ সময় পার হলে অটোমেটিক অনুপস্থিত মার্ক করা সক্রিয় রাখুন
              </label>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="submit"
                disabled={savingSettings || loadingSettings}
                style={{
                  background: '#10b981',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 18px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {savingSettings ? <RefreshCw size={16} className="animate-spin" /> : <CheckCircle2 size={16} />}
                <span>সেটিংস সেভ করুন</span>
              </button>

              <button
                type="button"
                onClick={handleRunAbsentCheck}
                disabled={runningAbsentCheck}
                style={{
                  background: '#f1f5f9',
                  color: '#475569',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  padding: '10px 14px',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {runningAbsentCheck ? <RefreshCw size={15} className="animate-spin" /> : <Bell size={15} />}
                <span>অনুপস্থিত চেক চালান (টেস্ট)</span>
              </button>
            </div>
          </form>

          {absentCheckResponse && (
            <div style={{ marginTop: '14px', padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '0.82rem' }}>
              <strong>রেজাল্ট:</strong> মোট ছাত্র: {absentCheckResponse.totalStudents} জন, আজ অনুপস্থিত মার্ক হয়েছে: <strong>{absentCheckResponse.absentCount}</strong> জন।
            </div>
          )}
        </div>

        {/* Card 2: Virtual ZKTeco Device Simulator (Android / Mobile Test) */}
        <div style={{
          background: 'var(--card-bg, #ffffff)',
          border: '1px solid var(--border-color, #e2e8f0)',
          borderRadius: '14px',
          padding: '20px',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '1px solid var(--border-color, #e2e8f0)', paddingBottom: '12px' }}>
            <div style={{ background: '#fef3c7', color: '#d97706', padding: '8px', borderRadius: '8px' }}>
              <Smartphone size={20} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>মোবাইল টেস্ট ফিঙ্গারপ্রিন্ট সিমুলেটর</h2>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>ডিভাইস ছাড়া ফোন থেকেই সরাসরি উপস্থিতি পুশ টেস্ট</span>
            </div>
          </div>

          <form onSubmit={handleSimulatePunch}>
            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                ছাত্রের আইডি বা বায়োমেট্রিক আইডি (Student / Device ID):
              </label>
              <input
                type="text"
                placeholder="যেমন: ছাত্রের আইডি (STU-001)"
                value={testStudentId}
                onChange={(e) => setTestStudentId(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.9rem',
                  outline: 'none',
                  background: 'var(--input-bg, #f8fafc)'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                পাঞ্চ টাইম (ঐচ্ছিক — খালি রাখলে বর্তমান লাইভ সময় হবে):
              </label>
              <input
                type="datetime-local"
                value={testPunchTime}
                onChange={(e) => setTestPunchTime(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.85rem',
                  outline: 'none',
                  background: 'var(--input-bg, #f8fafc)'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={simulating}
              style={{
                width: '100%',
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '12px',
                fontSize: '0.92rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              {simulating ? <RefreshCw size={16} className="animate-spin" /> : <Send size={16} />}
              <span>{simulating ? 'পাঞ্চ পাঠানো হচ্ছে...' : 'ভার্চুয়াল উপস্থিতি পুশ করুন (অনলাইনে টেস্ট)'}</span>
            </button>
          </form>

          {simulatorError && (
            <div style={{
              marginTop: '14px',
              padding: '12px',
              background: '#fef2f2',
              borderRadius: '8px',
              border: '1px solid #fecaca',
              color: '#dc2626',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <AlertCircle size={16} />
              <span>{simulatorError}</span>
            </div>
          )}

          {simulatorResponse && (
            <div style={{
              marginTop: '16px',
              padding: '14px',
              background: '#f0fdf4',
              borderRadius: '10px',
              border: '1px solid #bbf7d0',
              color: '#15803d',
              fontSize: '0.86rem'
            }}>
              <div style={{ fontWeight: 700, marginBottom: '6px', fontSize: '0.95rem' }}>
                🎉 হোস্টিং ও সার্ভারে ডাটা সফলভাবে জমা হয়েছে!
              </div>
              <div style={{ display: 'grid', gap: '4px' }}>
                <div>শিক্ষার্থীর নাম: <strong>{simulatorResponse.studentName}</strong></div>
                <div>আইডি: <strong>{simulatorResponse.studentId}</strong></div>
                <div>ইন-টাইম (In-Time): <strong>{simulatorResponse.inTime}</strong></div>
                <div>স্ট্যাটাস: <strong style={{ textTransform: 'uppercase', color: '#16a34a' }}>{simulatorResponse.status}</strong></div>
                <div>
                  অনলাইন ভেরিফিকেশন: <strong style={{ color: '#0284c7' }}>MySQL ডাটাবেজে রেকর্ড নিশ্চিত ✅</strong>
                </div>

                {simulatorResponse.pushResultInfo && (
                  <div style={{
                    marginTop: '8px',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    background: simulatorResponse.pushResultInfo.sentCount > 0 ? '#dcfce7' : '#fef9c3',
                    color: simulatorResponse.pushResultInfo.sentCount > 0 ? '#15803d' : '#854d0e',
                    border: `1px solid ${simulatorResponse.pushResultInfo.sentCount > 0 ? '#86efac' : '#fde047'}`
                  }}>
                    🔔 পুশ নোটিফিকেশন: {simulatorResponse.pushResultInfo.reason}
                  </div>
                )}
              </div>
            </div>
          )}

          <div style={{
            marginTop: '16px',
            background: 'var(--bg-subtle, #f8fafc)',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            fontSize: '0.78rem',
            color: '#64748b'
          }}>
            💡 <strong>কীভাবে বুঝবেন হোস্টিংয়ে কাজ করছে?</strong><br />
            উপরে ছাত্রের আইডি দিয়ে পাঞ্চ বাটনে চাপার পর সাধারণ মেন্যু থেকে <strong>"উপস্থিতি"</strong> পেজে যান। এরপর <strong>"শিক্ষার্থী লোড করুন"</strong> বাটনে ক্লিক করুন। দেখবেন সাথে সাথে ছাত্রটির আজকের উপস্থিতি সবুজ রঙের "উপস্থিত" ও সময়সহ অনলাইনে দেখতে পাবেন!
          </div>
        </div>

      </div>

      {/* Card 2.5: Push Notification Live Diagnostics & Direct Test */}
      <div style={{
        marginTop: '20px',
        background: 'var(--card-bg, #ffffff)',
        border: '1px solid var(--border-color, #e2e8f0)',
        borderRadius: '14px',
        padding: '20px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '14px', borderBottom: '1px solid var(--border-color, #e2e8f0)', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '8px', borderRadius: '8px' }}>
              <Bell size={20} />
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>পুশ নোটিফিকেশন ডায়াগনস্টিক ও টেস্ট সেন্ড</h2>
              <span style={{ fontSize: '0.78rem', color: '#64748b' }}>ডাটাবেজে ইউজারের ফোন সাবস্ক্রিপশন আছে কিনা চেক করুন ও সরাসরি টেস্ট পুশ পাঠান</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRunPushDiagnostic}
            disabled={diagnosing}
            style={{
              background: '#0284c7',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {diagnosing ? <RefreshCw size={14} className="animate-spin" /> : <Radio size={14} />}
            <span>{diagnosing ? 'চেক হচ্ছে...' : '🔍 ডিভাইস চেক ও টেস্ট পুশ পাঠান'}</span>
          </button>
        </div>

        <p style={{ margin: '0 0 12px', fontSize: '0.82rem', color: '#475569' }}>
          টেস্ট আইডি <strong>{testStudentId || testDeviceUserId || '999'}</strong> এর জন্য সার্ভার ডাটাবেজে কোনো ব্রাউজার/ফোন সাবস্ক্রিপশন সক্রিয় আছে কিনা পরীক্ষা করতে উপরের বাটনে চাপ দিন।
        </p>

        {diagnosticError && (
          <div style={{
            marginBottom: '14px',
            padding: '12px',
            background: '#fef2f2',
            borderRadius: '8px',
            border: '1px solid #fecaca',
            color: '#dc2626',
            fontSize: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertCircle size={16} />
            <span>{diagnosticError}</span>
          </div>
        )}

        {diagnosticResult && (
          <div style={{
            background: diagnosticResult.diagnostic?.matchedSubscriptionsCount > 0 ? '#f0fdf4' : '#fffbeb',
            border: `1px solid ${diagnosticResult.diagnostic?.matchedSubscriptionsCount > 0 ? '#86efac' : '#fde68a'}`,
            borderRadius: '10px',
            padding: '14px',
            fontSize: '0.85rem'
          }}>
            <div style={{
              fontWeight: 700,
              fontSize: '0.95rem',
              marginBottom: '8px',
              color: diagnosticResult.diagnostic?.matchedSubscriptionsCount > 0 ? '#15803d' : '#b45309'
            }}>
              {diagnosticResult.diagnostic?.matchedSubscriptionsCount > 0 
                ? `✅ সফল! ডাটাবেজে ${diagnosticResult.diagnostic.matchedSubscriptionsCount} টি সাবস্ক্রাইবড ডিভাইস পাওয়া গেছে!` 
                : '⚠️ এই ছাত্র আইডির জন্য কোনো ফোনে পুশ নোটিফিকেশন চালু করা নেই!'}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', marginBottom: '10px' }}>
              <div>ছাত্রের নাম: <strong>{diagnosticResult.student?.name}</strong></div>
              <div>ছাত্র আইডি: <strong>{diagnosticResult.student?.studentId}</strong></div>
              <div>লিংকড ইউজার অ্যাকাউন্ট: <strong>{diagnosticResult.student?.userLinked ? 'সংযুক্ত ✅' : 'নেই ❌'}</strong></div>
              <div>এই আইডির সক্রিয় ডিভাইস: <strong style={{ color: diagnosticResult.diagnostic?.matchedSubscriptionsCount > 0 ? '#16a34a' : '#dc2626' }}>{diagnosticResult.diagnostic?.matchedSubscriptionsCount} টি</strong></div>
              <div>সিস্টেমের মোট পুশ গ্রাহক: <strong>{diagnosticResult.diagnostic?.totalSystemSubscriptions} টি</strong></div>
              <div>টেস্ট নোটিফিকেশন ডেলিভারি: <strong>{diagnosticResult.diagnostic?.pushDelivered > 0 ? `পৌঁছেছে (${diagnosticResult.diagnostic.pushDelivered} টি)` : 'পৌঁছায়নি'}</strong></div>
            </div>

            {diagnosticResult.diagnostic?.matchedSubscriptionsCount === 0 && (
              <div style={{
                background: '#ffffff',
                border: '1px dashed #f59e0b',
                padding: '12px',
                borderRadius: '8px',
                color: '#78350f',
                fontSize: '0.82rem',
                lineHeight: '1.5'
              }}>
                <strong>📢 ফোনে নোটিফিকেশন পাওয়ার জন্য যা করতে হবে:</strong>
                <ol style={{ margin: '6px 0 0', paddingLeft: '20px' }}>
                  <li>যে মোবাইলটিতে নোটিফিকেশন পেতে চান, সেই মোবাইলের ব্রাউজারে (Chrome / Safari) মাদরাসা ওয়েবসাইটে যান।</li>
                  <li>স্টুডেন্ট আইডি <strong>{diagnosticResult.student?.studentId || '999'}</strong> দিয়ে লগইন করুন।</li>
                  <li>লগইন করার সাথে সাথে স্ক্রিনের নিচে আসা <strong>"🔔 মাদরাসা পুশ নোটিফিকেশন চালু করুন"</strong> ব্যানারে ক্লিক করে ব্রাউজারের <strong>Allow (অনুমোদন)</strong> দিন। অথবা ওপরের নোটিফিকেশন বেল আইকনে গিয়ে <strong>"🔔 পুশ চালু করুন"</strong> চাপুন।</li>
                  <li>অনুমতি দেওয়ার পর এখানে এসে আবার টেস্ট পুশ বাটন চাপুন — সাথে সাথে আপনার ফোনের স্ক্রিনে নোটিফিকেশন চলে যাবে! 🔔</li>
                </ol>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Card 3: Real Device Configuration Information */}
      <div style={{
        marginTop: '20px',
        background: 'var(--card-bg, #ffffff)',
        border: '1px solid var(--border-color, #e2e8f0)',
        borderRadius: '14px',
        padding: '20px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <div style={{ background: '#ede9fe', color: '#7c3aed', padding: '8px', borderRadius: '8px' }}>
            <Server size={20} />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 600 }}>ভবিষ্যতে ZKTeco MB560-VL ফিঙ্গার ডিভাইস কানেক্ট করার ঠিকানা</h2>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>ডিভাইসের মেন্যুতে গিয়ে নিচের তথ্যগুলো বসাবেন</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          background: 'var(--bg-subtle, #f8fafc)',
          padding: '14px',
          borderRadius: '10px',
          fontSize: '0.84rem'
        }}>
          <div>
            <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>Device Menu:</span>
            <strong>Menu ➔ Comm. ➔ Cloud Server / ADMS</strong>
          </div>
          <div>
            <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>Server Domain / IP:</span>
            <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>annurislamicacademy.edu.bd</code>
          </div>
          <div>
            <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>Server Port:</span>
            <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>443 (HTTPS)</code>
          </div>
          <div>
            <span style={{ color: '#64748b', display: 'block', marginBottom: '2px' }}>Enable Domain Name:</span>
            <strong>ON</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
