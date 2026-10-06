import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, ArrowRight, CheckCheck, Loader2, Check } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { requestAndRegisterPushNotification } from '../../utils/pushNotificationService';

const toBengaliNumber = (num) => {
  if (num === null || num === undefined) return '';
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, d => bnDigits[d]);
};

export default function NotificationDropdown() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seenNoticeIds, setSeenNoticeIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('seen_notice_ids') || '[]');
    } catch {
      return [];
    }
  });
  const dropdownRef = useRef(null);

  // নোটিশ লোড করা
  const fetchNotices = async () => {
    try {
      setLoading(true);
      const res = await api.get('/notices');
      if (res.data?.success) {
        const list = res.data.data.notices || [];
        setNotices(list);
      }
    } catch (err) {
      console.error('Failed to fetch notifications:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchNotices();
    }
  }, [user]);

  // আনসিন (না দেখা) নোটিশের সংখ্যা হিসাব
  const unseenNotices = notices.filter(n => {
    const id = n._id || n.id;
    return !seenNoticeIds.includes(String(id));
  });

  const unseenCount = unseenNotices.length;

  // ড্রপডাউন বাইরে ক্লিক করলে বন্ধ করা
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // বেল আইকন ক্লিক হ্যান্ডলার
  const handleToggle = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      fetchNotices();
    }
  };

  // সব নোটিশ পড়া হিসেবে চিহ্নিত করা
  const markAllAsSeen = () => {
    const allIds = notices.map(n => String(n._id || n.id));
    const merged = Array.from(new Set([...seenNoticeIds, ...allIds]));
    setSeenNoticeIds(merged);
    localStorage.setItem('seen_notice_ids', JSON.stringify(merged));
  };

  // কোনো নির্দিষ্ট নোটিশে ক্লিক করলে সেটি পড়া হিসেবে চিহ্নিত করা
  const handleNoticeClick = (notice) => {
    const id = String(notice._id || notice.id);
    if (!seenNoticeIds.includes(id)) {
      const next = [...seenNoticeIds, id];
      setSeenNoticeIds(next);
      localStorage.setItem('seen_notice_ids', JSON.stringify(next));
    }
    setIsOpen(false);
    navigate('/notices');
  };

  const handleViewAll = () => {
    setIsOpen(false);
    navigate('/notices');
  };

  const formatBengaliTime = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    if (seconds < 60) return 'এইমাত্র';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} মিনিট আগে`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} ঘণ্টা আগে`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'গতকাল';
    return date.toLocaleDateString('bn-BD', { day: 'numeric', month: 'short' });
  };

  const renderPriorityBadge = (priority) => {
    switch (priority) {
      case 'urgent':
        return <span className="badge badge-danger" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>জরুরি</span>;
      case 'high':
        return <span className="badge badge-warning" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>উচ্চ গুরুত্ব</span>;
      case 'low':
        return <span className="badge" style={{ fontSize: '0.68rem', padding: '2px 6px', background: 'var(--bg-tertiary)', color: 'var(--text-muted)' }}>সাধারণ</span>;
      default:
        return <span className="badge badge-info" style={{ fontSize: '0.68rem', padding: '2px 6px' }}>সাধারণ</span>;
    }
  };

  return (
    <div className="notification-dropdown-wrapper" ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        type="button"
        className="topbar-icon-btn"
        onClick={handleToggle}
        title={unseenCount > 0 ? `${toBengaliNumber(unseenCount)} টি নতুন নোটিফিকেশন আছে` : 'নোটিফিকেশন ও নোটিশ'}
        aria-label="নোটিফিকেশন ও নোটিশ"
        aria-expanded={isOpen}
      >
        <Bell size={20} />
        {/* যদি আনসিন নোটিফিকেশন থাকে, তবে বেল বাটনের ওপর লাল ব্যাজে স্পষ্ট সংখ্যা দেখাবে */}
        {unseenCount > 0 && (
          <span className="notification-badge-count">
            {unseenCount > 9 ? '৯+' : toBengaliNumber(unseenCount)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="notification-dropdown-menu">
          <div className="notification-dropdown-header">
            <h4>
              <Bell size={16} style={{ color: 'var(--primary-500)' }} />
              নোটিফিকেশন
              {unseenCount > 0 && (
                <span className="badge badge-danger" style={{ fontSize: '0.72rem', padding: '2px 6px' }}>
                  {toBengaliNumber(unseenCount)} টি নতুন
                </span>
              )}
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={async () => {
                  const res = await requestAndRegisterPushNotification(user);
                  alert(res.message);
                }}
                style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#059669',
                  borderRadius: '6px',
                  padding: '3px 8px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                title="এই ফোনে পুশ নোটিফিকেশন চালু করুন"
              >
                <Bell size={11} /> পুশ চালু করুন
              </button>

              {unseenCount > 0 && (
                <button
                  type="button"
                  onClick={markAllAsSeen}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary-600)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  title="সবগুলো পড়া হয়েছে হিসেবে চিহ্নিত করুন"
                >
                  <Check size={12} /> পঠিত
                </button>
              )}
            </div>
          </div>

          <div className="notification-dropdown-body">
            {loading ? (
              <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)' }}>
                <Loader2 size={24} className="spinner" style={{ margin: '0 auto 8px' }} />
                <p style={{ fontSize: '0.85rem' }}>নোটিফিকেশন লোড হচ্ছে...</p>
              </div>
            ) : notices.length === 0 ? (
              <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 10px',
                  color: 'var(--text-secondary)'
                }}>
                  <CheckCheck size={22} />
                </div>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  কোনো নোটিফিকেশন পাওয়া যায়নি
                </p>
                <p style={{ fontSize: '0.78rem' }}>নতুন কোনো নোটিশ আসলে এখানে দেখাবে।</p>
              </div>
            ) : (
              notices.slice(0, 6).map((item) => {
                const isItemUnseen = !seenNoticeIds.includes(String(item._id || item.id));
                return (
                  <div
                    key={item._id || item.id}
                    className="notification-dropdown-item"
                    onClick={() => handleNoticeClick(item)}
                    style={{
                      background: isItemUnseen ? 'rgba(20, 184, 166, 0.05)' : 'transparent',
                      borderLeft: isItemUnseen ? '3px solid var(--primary-500)' : '3px solid transparent',
                    }}
                    title="বিস্তারিত দেখতে ক্লিক করুন"
                  >
                    <div className="notification-item-top">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flex: 1, overflow: 'hidden' }}>
                        {isItemUnseen && (
                          <span style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: '#ef4444',
                            flexShrink: 0
                          }} />
                        )}
                        <span className="notification-item-title">{item.title}</span>
                      </div>
                      {renderPriorityBadge(item.priority)}
                    </div>
                    {item.content && (
                      <p className="notification-item-desc">{item.content}</p>
                    )}
                    <div className="notification-item-time">
                      {formatBengaliTime(item.createdAt)}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="notification-dropdown-footer">
            <button type="button" onClick={handleViewAll}>
              সব নোটিশ বোর্ড দেখুন <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
