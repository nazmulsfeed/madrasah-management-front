import { useState, useEffect, useCallback } from 'react';
import { BookOpen, FileText, Calendar, ShieldAlert, Search, Sun, Moon, Download, Bell, BellOff, X } from 'lucide-react';
import api from '../../api/axios';
import { SECTION_OPTIONS } from '../../utils/constants';

export default function PublicHomeworkPage() {
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPublic, setIsPublic] = useState(null);
  const [institutionName, setInstitutionName] = useState('দারুল উলূম মাদ্রাসা');

  // Notices State
  const [notices, setNotices] = useState([]);
  const [selectedPublicNotice, setSelectedPublicNotice] = useState(null);
  const [showAllNotices, setShowAllNotices] = useState(false);

  // Theme: always light mode on public page

  // Filter States
  const [search, setSearch] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFilter, setDateFilter] = useState('today');
  const [customDate, setCustomDate] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [sections, setSections] = useState([]);

  // PWA Install Prompt State
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  // Push Notification State
  const [notifStatus, setNotifStatus] = useState('idle'); // 'idle' | 'subscribed' | 'denied' | 'loading'
  const FALLBACK_VAPID_PUBLIC_KEY = 'BNVHR4Au94AbinB-C_b6GsIIWmEbYUY8j6C3GLICK6E32vct-L25B3riXMtwWDiv83CfvYykPCh3ObiobSeE0uk';

  // MDN Standard: VAPID key কে URL-safe base64 থেকে Uint8Array এ কনভার্ট করা
  const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  };

  // পেজ লোড হলে চেক করা হচ্ছে ব্রাউজারে নোটিফিকেশন অলরেডি অন আছে কিনা
  useEffect(() => {
    if ('Notification' in window) {
      if (Notification.permission === 'denied') {
        setNotifStatus('denied');
      } else if (Notification.permission === 'granted') {
        navigator.serviceWorker.ready.then(reg => {
          reg.pushManager.getSubscription().then(sub => {
            setNotifStatus(sub ? 'subscribed' : 'idle');
          });
        });
      }
    }
  }, []);

  // নোটিফিকেশন টগল করার ফাংশন
  const handleNotificationToggle = async () => {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert('আপনার ব্রাউজার পুশ নোটিফিকেশন সাপোর্ট করে না।');
      return;
    }
    setNotifStatus('loading');
    try {
      let reg;
      try {
        reg = await navigator.serviceWorker.ready;
      } catch (swErr) {
        reg = await navigator.serviceWorker.register('/sw.js');
        await navigator.serviceWorker.ready;
      }

      const existingSub = await reg.pushManager.getSubscription();

      if (existingSub) {
        // আনসাবস্ক্রাইব করা হচ্ছে
        await existingSub.unsubscribe();
        try {
          await api.post('/push/unsubscribe', { endpoint: existingSub.endpoint });
        } catch (e) {
          console.error('[Push] Unsubscribe server call error:', e);
        }
        setNotifStatus('idle');
      } else {
        // নতুন সাবস্ক্রাইব করা হচ্ছে
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
          setNotifStatus('denied');
          alert('নোটিফিকেশনের অনুমতি দেওয়া হয়নি (Permission Denied)। ব্রাউজারের সেটিংস থেকে পারমিশন Allow করুন।');
          return;
        }

        // সার্ভার থেকে ডায়নামিক VAPID Key আনা হচ্ছে
        let publicKey = FALLBACK_VAPID_PUBLIC_KEY;
        try {
          const keyRes = await api.get('/push/vapid-key');
          if (keyRes.data?.publicKey) {
            publicKey = keyRes.data.publicKey;
          }
        } catch (kErr) {
          console.warn('[Push] Using fallback VAPID key');
        }

        const sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicKey),
        });
        const subJSON = sub.toJSON();
        await api.post('/push/subscribe', { endpoint: subJSON.endpoint, keys: subJSON.keys });
        setNotifStatus('subscribed');
        alert('নোটিফিকেশন সফলভাবে চালু করা হয়েছে! 🔔');
      }
    } catch (err) {
      console.error('[Push] Toggle error:', err);
      setNotifStatus('idle');
      const msg = err.response?.data?.message || err.message || 'নোটিফিকেশন সেটআপে সমস্যা হয়েছে।';
      if (msg.includes('push service error') || msg.includes('Registration failed')) {
        alert('ব্রাউজারের পুশ সার্ভিস সংযুক্ত করা যাচ্ছে না। আপনি যদি Brave ব্রাউজার ব্যবহার করেন, তবে Settings -> Privacy & Security এ গিয়ে "Use Google Services for Push Messaging" অপশনটি অন করুন। অথবা ব্রাউজারের অন্যান্য এক্সটেনশন/VPN বন্ধ করে চেষ্টা করুন।');
      } else {
        alert(`নোটিফিকেশন সেটআপ সমস্যা: ${msg}`);
      }
    }
  };

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    setDeferredPrompt(null);
    setShowInstallBtn(false);
  };

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    setTheme(current => current === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const [loadingHomeworks, setLoadingHomeworks] = useState(false);

  useEffect(() => {
    const checkSettingsAndLoad = async () => {
      try {
        const settingsRes = await api.get('/homework/public/settings');
        const allowed = settingsRes.data.data.isHomeworkPublic;
        setIsPublic(allowed);
        if (settingsRes.data.data.institutionName) {
          setInstitutionName(settingsRes.data.data.institutionName);
        }

        if (allowed) {
          // Fetch once to populate dropdown filter choices
          const res = await api.get('/homework/public?limit=1000');
          if (res.data.success) {
            const list = res.data.data || [];
            setClasses(Array.from(new Set(list.map(h => h.classLevel).filter(Boolean))));
            setSubjects(Array.from(new Set(list.map(h => h.subject).filter(Boolean))));
            setSections(Array.from(new Set(list.map(h => h.section).filter(Boolean))));
          }

          // Fetch public notices
          try {
            const noticeRes = await api.get('/notices/public');
            if (noticeRes.data.success) {
              setNotices(noticeRes.data.data.notices || []);
            }
          } catch (nErr) {
            console.error('Failed to fetch public notices:', nErr);
          }
        }
      } catch (err) {
        console.error('Failed to load public settings', err);
        setIsPublic(false);
      } finally {
        setLoading(false);
      }
    };
    checkSettingsAndLoad();
  }, []);

  useEffect(() => {
    if (isPublic !== true) return;

    const fetchFilteredHomeworks = async () => {
      setLoadingHomeworks(true);
      try {
        const params = {};
        if (dateFilter === 'today') {
          params.dateFilter = 'today';
        } else if (dateFilter === 'custom' && customDate) {
          params.dateFilter = customDate;
        } else {
          params.dateFilter = 'all';
        }

        if (classFilter) params.classLevel = classFilter;
        if (sectionFilter) params.section = sectionFilter;
        if (subjectFilter) params.subject = subjectFilter;
        if (statusFilter) params.status = statusFilter;
        if (searchQuery) params.search = searchQuery;

        params.limit = 1000;

        const res = await api.get('/homework/public', { params });
        if (res.data.success) {
          setHomeworks(res.data.data || []);
        }
      } catch (err) {
        console.error('Failed to load filtered homeworks', err);
      } finally {
        setLoadingHomeworks(false);
      }
    };

    fetchFilteredHomeworks();
  }, [isPublic, dateFilter, customDate, classFilter, sectionFilter, subjectFilter, statusFilter, searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };



  const filteredHomeworks = homeworks;

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <div className="spinner"></div>
        <span style={{ marginLeft: '12px' }}>তথ্য লোড হচ্ছে...</span>
      </div>
    );
  }

  if (isPublic === false) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', padding: '20px', textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--danger-bg)', color: 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <ShieldAlert size={36} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '8px' }}>পাবলিক অ্যাক্সেস নিষ্ক্রিয়</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', fontSize: '0.9rem' }}>
          {institutionName}-এর হোমওয়ার্ক তালিকাটি বর্তমানে সর্বসাধারণের জন্য উন্মুক্ত নয়। অনুগ্রহ করে আপনার অ্যাকাউন্টে লগ ইন করে চেক করুন।
        </p>
        <a href="/login" className="btn btn-primary" style={{ marginTop: '24px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', height: '42px', padding: '0 24px', borderRadius: '8px' }}>
          লগ ইন পেজে যান
        </a>
      </div>
    );
  }

  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
  const recentNotices = notices.filter(n => new Date(n.publishedAt || n.createdAt) >= twoDaysAgo);
  const hasNewNotices = recentNotices.length > 0;

  const visibleNotices = recentNotices.slice(0, 2);
  const hiddenNotices = notices.filter(n => !visibleNotices.includes(n));
  const displayedNotices = showAllNotices ? notices : visibleNotices;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', padding: '40px 20px', transition: 'background 0.3s, color 0.3s' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '24px', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '6px' }}>
              <BookOpen size={16} /> {institutionName}
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>আজকের হোমওয়ার্ক ও অ্যাসাইনমেন্ট</h1>
            <p style={{ color: 'var(--text-secondary)', margin: '6px 0 0 0', fontSize: '0.95rem' }}>অফিসিয়াল ড্যাশবোর্ড থেকে রিয়েল-টাইমে প্রকাশিত ও উন্মুক্ত হোমওয়ার্কসমূহ</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Push Notification Toggle Button */}
            <button
              onClick={handleNotificationToggle}
              disabled={notifStatus === 'loading' || notifStatus === 'denied'}
              title={
                notifStatus === 'subscribed' ? 'নোটিফিকেশন বন্ধ করুন' :
                  notifStatus === 'denied' ? 'ব্রাউজার নোটিফিকেশন ব্লক করা আছে' :
                    notifStatus === 'loading' ? 'প্রসেস হচ্ছে...' :
                      'নোটিফিকেশন চালু করুন'
              }
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '42px',
                padding: '0 16px',
                border: `1px solid ${notifStatus === 'subscribed' ? 'var(--danger)' : notifStatus === 'denied' ? 'var(--border-color)' : 'var(--primary-200)'}`,
                borderRadius: '8px',
                background: notifStatus === 'subscribed' ? 'var(--danger-bg)' : notifStatus === 'denied' ? 'var(--bg-secondary)' : 'var(--primary-50)',
                color: notifStatus === 'subscribed' ? 'var(--danger)' : notifStatus === 'denied' ? 'var(--text-muted)' : 'var(--primary-600)',
                cursor: notifStatus === 'denied' ? 'not-allowed' : 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                transition: 'all 0.2s',
                boxShadow: 'var(--shadow-sm)',
                opacity: notifStatus === 'loading' ? 0.6 : 1,
              }}
            >
              {notifStatus === 'subscribed' ? <BellOff size={16} /> : <Bell size={16} />}
              <span style={{ display: window.innerWidth < 500 ? 'none' : 'inline' }}>
                {notifStatus === 'loading' ? 'লোড হচ্ছে...' :
                  notifStatus === 'subscribed' ? 'নোটিফিকেশন অন' :
                    notifStatus === 'denied' ? 'ব্লকড' :
                      'নোটিফিকেশন'}
              </span>
            </button>
            {showInstallBtn && (
              <button
                onClick={handleInstallClick}
                title="অ্যাপ ইনস্টল করুন"
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '42px',
                  padding: '0 20px',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                  fontWeight: 600,
                  background: theme === 'dark' ? '#0259f9' : 'var(--bg-card)',
                  color: theme === 'dark' ? '#ffffff' : '#000000',
                  border: theme === 'dark' ? '1px solid #0040cc' : '1px solid var(--border-color)',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(15, 23, 42, 0.08)',
                  whiteSpace: 'nowrap'
                }}
              >
                <Download size={16} />
                <span>অ্যাপ ইনস্টল করুন</span>
              </button>
            )}
            <button
              onClick={toggleTheme}
              className="btn btn-icon"
              style={{
                width: '42px', height: '42px', borderRadius: '50%',
                background: 'var(--bg-card)', color: 'var(--text-primary)',
                border: '1px solid var(--border-color)'
              }}
              title={theme === 'dark' ? 'লাইট মোড' : 'ডার্ক মোড'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="/login" className="btn btn-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '42px', padding: '0 20px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
              ড্যাশবোর্ডে লগ ইন
            </a>
          </div>
        </div>

        {/* Notice Board Section (Above Search/Filter Box) */}
        {(displayedNotices.length > 0 || hasNewNotices || hiddenNotices.length > 0) && (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: '16px',
            padding: '20px 24px',
            marginBottom: '28px',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <style>{`
              @keyframes ping-slow {
                75%, 100% {
                  transform: scale(2);
                  opacity: 0;
                }
              }
              .animate-ping-slow {
                animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
              }
            `}</style>

            {/* Top Glowing Accent Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #f59e0b, #ef4444, #14b8a6)'
            }} />

            {/* Section Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#f59e0b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Bell size={20} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    নোটিশ বোর্ড
                    {hasNewNotices && (
                      <span style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                        <span style={{ position: 'relative', display: 'flex', width: '8px', height: '8px', marginRight: '2px' }}>
                          <span className="animate-ping-slow" style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', background: '#ef4444', opacity: 0.75 }}></span>
                          <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', width: '8px', height: '8px', background: '#ef4444' }}></span>
                        </span>
                        নতুন নোটিশ
                      </span>
                    )}
                    {!hasNewNotices && (
                      <span style={{ fontSize: '0.75rem', background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b', padding: '2px 8px', borderRadius: '12px', fontWeight: 600 }}>
                        {notices.length} টি নোটিশ
                      </span>
                    )}
                  </h2>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>প্রতিষ্ঠানের অফিসিয়াল ঘোষণা ও জরুরি তথ্যাবলী</p>
                </div>
              </div>
            </div>

            {/* Notice Cards List */}
            {displayedNotices.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '16px'
              }}>
                {displayedNotices.map((notice) => {
                  const isUrgent = notice.priority === 'urgent' || notice.priority === 'high';
                  return (
                    <div
                      key={notice._id}
                      onClick={() => setSelectedPublicNotice(notice)}
                      style={{
                        background: 'var(--bg-secondary)',
                        border: `1px solid ${isUrgent ? 'rgba(239, 68, 68, 0.4)' : 'var(--border-color)'}`,
                        borderLeft: `4px solid ${isUrgent ? '#ef4444' : '#14b8a6'}`,
                        borderRadius: '12px',
                        padding: '16px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Calendar size={12} />
                            {new Date(notice.publishedAt || notice.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                          </span>
                          {isUrgent && (
                            <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', fontWeight: 600 }}>
                              জরুরি
                            </span>
                          )}
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '0 0 6px 0', color: 'var(--text-primary)', lineHeight: 1.4 }}>
                          {notice.title}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                          {notice.content}
                        </p>
                      </div>
                      <div style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          বিস্তারিত পড়ুন →
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ padding: '20px', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px dashed var(--border-color)', color: 'var(--text-secondary)' }}>
                সাম্প্রতিক ২ দিনের মধ্যে কোনো নতুন নোটিশ নেই।
              </div>
            )}

            {/* See More Button */}
            {hiddenNotices.length > 0 && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                  onClick={() => setShowAllNotices(!showAllNotices)}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    padding: '8px 24px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderColor = 'var(--primary)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                >
                  {showAllNotices ? 'সংকোচন করুন' : `আরও ${hiddenNotices.length} টি নোটিশ দেখুন`}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Filter Bar (Premium Styling Matching Screenshot) */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '32px',
          backdropFilter: 'blur(10px)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>

            {/* Search Input Box */}
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '8px', flex: 1, minWidth: '300px' }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder="বিষয় বা শিরোনাম দিয়ে খুঁজুন..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 36px',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
              >
                <Search size={14} /> অনুসন্ধান
              </button>
            </form>

            {/* Dropdown 1: Date Filter */}
            <select
              value={dateFilter}
              onChange={e => setDateFilter(e.target.value)}
              style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              <option value="today">আজকের হোমওয়ার্ক</option>
              <option value="all">সকল হোমওয়ার্ক</option>
              <option value="custom">নির্দিষ্ট তারিখ</option>
            </select>

            {/* Custom Date Input */}
            {dateFilter === 'custom' && (
              <input
                type="date"
                value={customDate}
                onChange={e => setCustomDate(e.target.value)}
                style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '6px 12px', borderRadius: '8px', outline: 'none', fontSize: '0.875rem' }}
              />
            )}

            {/* Dropdown 2: Subject Filter */}
            <select
              value={subjectFilter}
              onChange={e => setSubjectFilter(e.target.value)}
              style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              <option value="">সকল বিষয়</option>
              {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
            </select>

            {/* Dropdown 3: Class Filter */}
            <select
              value={classFilter}
              onChange={e => setClassFilter(e.target.value)}
              style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              <option value="">সকল শ্রেণী</option>
              {classes.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            {/* Dropdown 4: Section Filter */}
            <select
              value={sectionFilter}
              onChange={e => setSectionFilter(e.target.value)}
              style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              <option value="">সকল সেকশন</option>
              {SECTION_OPTIONS.map((sec, idx) => (
                <option key={idx} value={sec}>{sec}</option>
              ))}
            </select>

            {/* Dropdown 5: Status Filter */}
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              style={{ background: 'var(--bg-input)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', padding: '8px 16px', borderRadius: '8px', outline: 'none', cursor: 'pointer', fontSize: '0.875rem' }}
            >
              <option value="">সকল স্ট্যাটাস</option>
              <option value="active">সক্রিয়</option>
              <option value="closed">বন্ধ</option>
            </select>

            {/* Clear Filters Link */}
            {(classFilter || sectionFilter || subjectFilter || dateFilter !== 'today' || statusFilter || searchQuery) && (
              <button
                onClick={() => {
                  setClassFilter('');
                  setSectionFilter('');
                  setSubjectFilter('');
                  setDateFilter('today');
                  setCustomDate('');
                  setStatusFilter('');
                  setSearch('');
                  setSearchQuery('');
                }}
                style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}
              >
                ফিল্টার মুছুন
              </button>
            )}

            <div style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              মোট হোমওয়ার্ক: <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{filteredHomeworks.length}</span> টি
            </div>
          </div>
        </div>

        {/* Homework Grid */}
        {filteredHomeworks.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
            <FileText size={48} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '1.2rem', margin: '0 0 4px 0', color: 'var(--text-primary)' }}>কোনো সক্রিয় হোমওয়ার্ক পাওয়া যায়নি</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', margin: 0 }}>ফিল্টারের মানদণ্ড অনুযায়ী কোনো সক্রিয় হোমওয়ার্ক পাওয়া যায়নি।</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px', alignItems: 'stretch' }}>
            {filteredHomeworks.map(hw => (
              <div
                key={hw._id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '280px',
                  transition: 'transform 0.2s, border-color 0.2s',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--success-bg)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FileText size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{hw.subject || 'অজানা বিষয়'}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{hw.classLevel} • {hw.section}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', background: 'var(--bg-secondary)', padding: '4px 10px', borderRadius: '20px' }}>
                    শিক্ষক: {hw.assignedBy?.fullName || 'অজানা'}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0 0 10px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {hw.title}
                  {hw.isKhataHomework && (
                    <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.15)', color: 'var(--accent-300)', border: '1px solid rgba(245, 158, 11, 0.3)', fontWeight: 500 }}>
                      খাতায় লেখার কাজ দেওয়া হয়েছে
                    </span>
                  )}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0 0 20px 0', lineHeight: 1.6, flex: 1, whiteSpace: 'pre-line', overflowY: 'auto' }}>{hw.description}</p>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={13} />
                    <span>পোস্ট: {new Date(hw.assignDate || hw.createdAt).toLocaleDateString('bn-BD')}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 600 }}>
                    <Calendar size={13} />
                    <span>জমা: {new Date(hw.dueDate).toLocaleDateString('bn-BD')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full Notice Modal */}
      {selectedPublicNotice && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(15, 23, 42, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
          }}
          onClick={() => setSelectedPublicNotice(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '20px',
              padding: '28px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              animation: 'fadeIn 0.2s ease-out'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(20, 184, 166, 0.15)', color: 'var(--primary)', padding: '2px 10px', borderRadius: '12px', fontWeight: 600 }}>
                    অফিসিয়াল ঘোষণা
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {new Date(selectedPublicNotice.publishedAt || selectedPublicNotice.createdAt).toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {selectedPublicNotice.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedPublicNotice(null)}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ color: 'var(--text-primary)', fontSize: '0.95rem', lineHeight: 1.7, whiteSpace: 'pre-line', padding: '8px 0' }}>
              {selectedPublicNotice.content}
            </div>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setSelectedPublicNotice(null)}
                style={{
                  background: 'var(--primary)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
