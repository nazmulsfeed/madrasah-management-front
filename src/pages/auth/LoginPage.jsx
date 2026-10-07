import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { BookOpen, Users, GraduationCap, Shield, Eye, EyeOff, Sun, Moon, Download, Bell, BellOff, ArrowLeft } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import api from '../../api/axios';
import {
  requestAndRegisterPushNotification,
  unsubscribePushNotification,
  checkPushSubscriptionStatus,
} from '../../utils/pushNotificationService';

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError, token } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [isHomeworkPublic, setIsHomeworkPublic] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // Handle theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get('/homework/public/settings');
        if (res.data.success) {
          setIsHomeworkPublic(res.data.data.isHomeworkPublic);
        }
      } catch (err) {
        console.error('Failed to fetch public homework settings', err);
      }
    };
    fetchSettings();
  }, []);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    const success = await login(email, password);
    if (success) {
      navigate('/dashboard');
    }
  };

  // PWA Install State
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

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
    if (!deferredPrompt) {
      alert('অ্যাপটি ডাউনলোড বা ইনস্টল করতে আপনার ব্রাউজারের মেনু (⋮) অপশন থেকে "Add to Home screen" বা "Install App" নির্বাচন করুন।');
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstallBtn(false);
    }
    setDeferredPrompt(null);
  };

  // Push Notification State
  const [pushStatus, setPushStatus] = useState('loading'); // 'subscribed' | 'default' | 'denied' | 'unsupported' | 'loading'
  const [pushLoading, setPushLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const checkStatus = async () => {
      const status = await checkPushSubscriptionStatus();
      if (isMounted) setPushStatus(status);
    };
    checkStatus();
    return () => { isMounted = false; };
  }, []);

  const handleTogglePush = async () => {
    if (pushLoading) return;
    setPushLoading(true);
    try {
      if (pushStatus === 'subscribed') {
        const res = await unsubscribePushNotification();
        if (res.success) {
          setPushStatus('default');
          alert('এই ডিভাইসে পুশ নোটিফিকেশন বন্ধ করা হয়েছে।');
        } else {
          alert(res.message);
        }
      } else {
        const res = await requestAndRegisterPushNotification(null);
        if (res.success) {
          setPushStatus('subscribed');
          alert('নোটিফিকেশন সফলভাবে চালু করা হয়েছে! 🔔');
        } else {
          alert(res.message);
          const current = await checkPushSubscriptionStatus();
          setPushStatus(current);
        }
      }
    } catch (err) {
      alert('নোটিফিকেশন সেটআপে সমস্যা হয়েছে: ' + (err.message || 'Unknown error'));
    } finally {
      setPushLoading(false);
    }
  };

  return (
    <div className="login-page" style={{ position: 'relative' }}>
      {/* টপবার কন্ট্রোলস (অ্যাপ ইনস্টল, পুশ নোটিফিকেশন, থিম) */}
      <div 
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          zIndex: 100,
        }}
      >
        {/* অ্যাপ ইনস্টল বাটন */}
        <button 
          type="button"
          onClick={handleInstallClick}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          title={showInstallBtn ? "অ্যাপ ইনস্টল করুন" : "অ্যাপ ইনস্টল (Add to Home screen)"}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
        >
          <Download size={19} />
        </button>

        {/* পুশ নোটিফিকেশন বাটন */}
        <button 
          type="button"
          onClick={handleTogglePush}
          disabled={pushLoading}
          style={{
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: pushStatus === 'subscribed' ? '#10b981' : 'var(--text-primary)',
            cursor: pushLoading ? 'wait' : 'pointer',
            transition: 'all 0.2s',
          }}
          title={
            pushStatus === 'subscribed'
              ? "পুশ নোটিফিকেশন চালু আছে (ক্লিক করে বন্ধ করুন)"
              : pushStatus === 'denied'
              ? "নোটিফিকেশন পারমিশন ব্লকড (ব্রাউজার সেটিংস থেকে Allow করুন)"
              : "পুশ নোটিফিকেশন চালু করুন"
          }
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
        >
          {pushStatus === 'subscribed' ? (
            <Bell size={19} style={{ color: '#10b981' }} />
          ) : pushStatus === 'denied' ? (
            <BellOff size={19} style={{ opacity: 0.5 }} />
          ) : (
            <Bell size={19} />
          )}
          {pushStatus === 'subscribed' && (
            <span style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 4px #10b981'
            }} />
          )}
        </button>

        {/* থিম পরিবর্তন বাটন */}
        <button 
          type="button"
          onClick={toggleTheme}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          title="থিম পরিবর্তন করুন"
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      {/* বাম পাশ — Hero */}
      <div className="login-hero">
        <div className="login-hero-content animate-fade-in">
          <div className="login-hero-icon">📖</div>
          <h1>আন্-নুর-ইসলামিক একাডেমি</h1>
          <p>
            আপনার প্রতিষ্ঠানের সম্পূর্ণ পরিচালনা একটি মাত্র প্ল্যাটফর্মে।
            ছাত্র ভর্তি থেকে ফলাফল প্রকাশ, ফি ব্যবস্থাপনা থেকে হিফজ অগ্রগতি —
            সবকিছু সহজে পরিচালনা করুন।
          </p>

          <div className="login-features">
            <div className="login-feature">
              <div className="login-feature-icon">
                <Users size={16} />
              </div>
              <span>ছাত্র, শিক্ষক ও অভিভাবক ব্যবস্থাপনা</span>
            </div>
            <div className="login-feature">
              <div className="login-feature-icon">
                <GraduationCap size={16} />
              </div>
              <span>পরীক্ষা, ফলাফল ও হিফজ অগ্রগতি ট্র্যাকিং</span>
            </div>
            <div className="login-feature">
              <div className="login-feature-icon">
                <BookOpen size={16} />
              </div>
              <span>উপস্থিতি, হোমওয়ার্ক ও পাঠ পরিকল্পনা</span>
            </div>
            <div className="login-feature">
              <div className="login-feature-icon">
                <Shield size={16} />
              </div>
              <span>নিরাপদ ও ভূমিকা-ভিত্তিক অ্যাক্সেস নিয়ন্ত্রণ</span>
            </div>
          </div>
        </div>
      </div>

      {/* ডান পাশ — লগ ইন ফর্ম */}
      <div className="login-form-side">
        <div className="login-form-container animate-slide-up">
          <h2 className="login-form-title">লগ ইন করুন</h2>
          <p className="login-form-subtitle">
            আপনার অ্যাকাউন্টে প্রবেশ করতে তথ্য দিন
          </p>

          {error && (
            <div
              style={{
                background: 'var(--danger-bg)',
                color: 'var(--danger)',
                padding: '12px 16px',
                borderRadius: 'var(--border-radius-sm)',
                marginBottom: '20px',
                fontSize: '0.875rem',
                border: '1px solid rgba(239, 68, 68, 0.2)',
              }}
            >
              {error}
            </div>
          )}

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="login-email">
                ইমেইল, ফোন নম্বর, ইউজারনেম বা ছাত্র আইডি
              </label>
              <input
                id="login-email"
                type="text"
                className="form-input"
                placeholder="আপনার ইমেইল, ফোন নম্বর, ইউজারনেম বা ছাত্র আইডি দিন"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="login-password">
                পাসওয়ার্ড
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="আপনার পাসওয়ার্ড দিন"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ paddingLeft: '44px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                  }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="login-remember">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                মনে রাখুন
              </label>
              <a href="#" onClick={(e) => e.preventDefault()}>
                পাসওয়ার্ড ভুলে গেছেন?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="spinner" style={{ width: 20, height: 20, borderWidth: 2 }}></div>
                  প্রবেশ করা হচ্ছে...
                </>
              ) : (
                'লগ ইন করুন'
              )}
            </button>
          </form>

          {isHomeworkPublic && (
            <div style={{ marginTop: '20px' }}>
              <a 
                href="/public-homework" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  textDecoration: 'none', 
                  width: '100%', 
                  justifyContent: 'center',
                  background: 'rgba(20, 184, 166, 0.08)',
                  color: 'var(--primary-400)',
                  border: '1px solid rgba(20, 184, 166, 0.2)',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(20, 184, 166, 0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(20, 184, 166, 0.08)'}
              >
                <BookOpen size={16} /> আজকের হোমওয়ার্ক (পাবলিক ভিউ)
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
