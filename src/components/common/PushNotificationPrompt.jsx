import { useState, useEffect } from 'react';
import { Bell, X, CheckCircle, ShieldAlert } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import { requestAndRegisterPushNotification } from '../../utils/pushNotificationService';

export default function PushNotificationPrompt() {
  const { user } = useAuthStore();
  const [showPrompt, setShowPrompt] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  useEffect(() => {
    // শুধুমাত্র লগইন করা ইউজার এবং ব্রাউজার সাপোর্ট করলে চেক করবে
    if (!user) return;
    if (typeof window === 'undefined') return;
    if (!('serviceWorker' in navigator) || !('PushManager' in window) || !('Notification' in window)) return;

    // যদি পারমিশন ইতিমধ্যে দিয়ে দেওয়া থাকে বা এই সেশনে বাতিল করা থাকে তবে দেখাবে না
    if (Notification.permission === 'granted') return;
    if (sessionStorage.getItem('push_prompt_dismissed') === 'true') return;

    // পারমিশন 'default' হলে প্রম্পট দেখাবে
    if (Notification.permission === 'default') {
      const timer = setTimeout(() => setShowPrompt(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [user]);

  const handleEnablePush = async () => {
    try {
      setLoading(true);
      const res = await requestAndRegisterPushNotification(user);
      if (res.success) {
        setStatusMessage({ type: 'success', text: res.message });
        setTimeout(() => {
          setShowPrompt(false);
        }, 3000);
      } else {
        setStatusMessage({ type: 'error', text: res.message });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: err.message || 'পুশ চালু করতে সমস্যা হয়েছে।' });
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    sessionStorage.setItem('push_prompt_dismissed', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      right: '20px',
      maxWidth: '480px',
      margin: '0 auto',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      color: '#fff',
      padding: '16px 20px',
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(16, 185, 129, 0.4)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      animation: 'fadeInUp 0.3s ease-out'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'rgba(16, 185, 129, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#10b981',
            flexShrink: 0
          }}>
            <Bell size={20} />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc' }}>
              মাদরাসা পুশ নোটিফিকেশন চালু করুন
            </h4>
            <p style={{ margin: '3px 0 0', fontSize: '0.78rem', color: '#cbd5e1', lineHeight: '1.4' }}>
              দৈনিক উপস্থিতি, বায়োমেট্রিক পাঞ্চ ও জরুরি নোটিশের পুশ অ্যালার্ট সরাসরি এই ফোনে পেতে অনুমোদন দিন।
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDismiss}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '4px',
            borderRadius: '6px'
          }}
          title="পরে"
        >
          <X size={18} />
        </button>
      </div>

      {statusMessage && (
        <div style={{
          padding: '8px 12px',
          borderRadius: '8px',
          fontSize: '0.8rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: statusMessage.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
          color: statusMessage.type === 'success' ? '#34d399' : '#f87171',
          border: `1px solid ${statusMessage.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
        }}>
          {statusMessage.type === 'success' ? <CheckCircle size={15} /> : <ShieldAlert size={15} />}
          <span>{statusMessage.text}</span>
        </div>
      )}

      {!statusMessage?.type || statusMessage.type === 'error' ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px' }}>
          <button
            type="button"
            onClick={handleDismiss}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#cbd5e1',
              borderRadius: '8px',
              padding: '6px 14px',
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer'
            }}
          >
            পরে
          </button>

          <button
            type="button"
            onClick={handleEnablePush}
            disabled={loading}
            style={{
              background: '#10b981',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '7px 16px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.4)'
            }}
          >
            <Bell size={14} />
            <span>{loading ? 'অনুমতি নেওয়া হচ্ছে...' : '🔔 নোটিফিকেশন চালু করুন'}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
