import { useState, useEffect, useMemo } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import api from '../api/axios';
import {
  LogOut,
  Moon,
  Sun,
  ChevronLeft,
  Menu,
  Building2,
  X,
} from 'lucide-react';
import useAuthStore from '../store/authStore';
import { getVisibleNavigation } from '../utils/navigationConfig';
import NotificationDropdown from '../components/common/NotificationDropdown';
import GlobalSearch from '../components/common/GlobalSearch';
import PushNotificationPrompt from '../components/common/PushNotificationPrompt';
import { autoRegisterPushNotification } from '../utils/pushNotificationService';

export default function DashboardLayout() {
  const { user, logout, getUserTypeLabel, fetchMe } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [myPermissions, setMyPermissions] = useState(() => {
    try { return JSON.parse(localStorage.getItem('userPermissions') || '{}'); } catch { return {}; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Fetch latest user info on layout mount to sync updates (e.g. Institution Name)
  useEffect(() => {
    if (user) {
      fetchMe();
      autoRegisterPushNotification(user);
    }
  }, [user?._id || user?.id]);

  // Handle theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }, []);

  // Fetch and cache user permissions
  useEffect(() => {
    const fetchPerms = async () => {
      try {
        const res = await api.get('/permissions/me');
        if (res.data.success) {
          const perms = res.data.data;
          localStorage.setItem('userPermissions', JSON.stringify(perms));
          setMyPermissions(perms);
        }
      } catch (_) {}
    };
    if (user) fetchPerms();
  }, [user]);



  const visibleGroups = useMemo(() => {
    return getVisibleNavigation(user, myPermissions);
  }, [user, myPermissions]);

  const handleLogout = () => {
    localStorage.removeItem('userPermissions');
    logout();
    navigate('/login');
  };

  const handleToggleMenu = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      setMobileOpen(prev => !prev);
    } else {
      setSidebarOpen(prev => !prev);
    }
  };

  const getPageTitle = () => {
    if (location.pathname.startsWith('/reports')) return 'রিপোর্ট ও বিশ্লেষণ';
    for (const group of visibleGroups) {
      for (const item of group.items) {
        if (location.pathname.startsWith(item.path)) {
          return item.label;
        }
      }
    }
    return 'ড্যাশবোর্ড';
  };

  const userInitial = user?.firstName
    ? user.firstName.charAt(0)
    : user?.username?.charAt(0)?.toUpperCase() || 'A';

  return (
    <div className={`app-layout ${!sidebarOpen ? 'sidebar-collapsed' : ''}`}>
      {/* সাইডবার */}
      <aside className={`sidebar ${!sidebarOpen ? 'collapsed' : ''} ${mobileOpen ? 'open' : ''}`}>
        <div className="sidebar-brand" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="sidebar-brand-logo">م</div>
            <div className="sidebar-brand-text">
              <div className="sidebar-brand-name">মাদ্রাসা ERP</div>
              <div className="sidebar-brand-sub">ম্যানেজমেন্ট সিস্টেম</div>
            </div>
          </div>
          <button 
            type="button"
            onClick={() => {
              setSidebarOpen(false);
              setMobileOpen(false);
            }}
            aria-label="মেনু বন্ধ করুন"
            title="মেনু বন্ধ করুন"
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-secondary)', 
              cursor: 'pointer', 
              padding: '6px', 
              display: 'flex', 
              alignItems: 'center',
              borderRadius: '6px',
            }}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {visibleGroups.map((group) => (
            <div key={group.group} className="sidebar-nav-group">
              <div className="sidebar-nav-group-title">{group.group}</div>
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-nav-item ${isActive ? 'active' : ''}`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div 
              className="sidebar-user"
              onClick={() => {
                setMobileOpen(false);
                navigate('/settings');
              }}
              title="প্রোফাইল ও পাসওয়ার্ড পরিবর্তন করতে ক্লিক করুন"
              style={{ 
                cursor: 'pointer', 
                flex: 1, 
                padding: '8px 10px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <div className="sidebar-user-avatar" style={{ overflow: 'hidden' }}>
                {user?.photo ? (
                  <img 
                    src={user.photo} 
                    alt="User" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
                  />
                ) : (
                  userInitial
                )}
              </div>
              <div className="sidebar-user-info" style={{ overflow: 'hidden' }}>
                <div className="sidebar-user-name" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
                  {user?.fullName || user?.firstName || user?.username}
                </div>
                <div className="sidebar-user-role" style={{ fontSize: '0.72rem', opacity: 0.75 }}>
                  {getUserTypeLabel()}
                </div>
              </div>
            </div>

            <button
              className="btn-ghost btn-icon"
              onClick={(e) => {
                e.stopPropagation();
                handleLogout();
              }}
              title="লগ আউট"
              style={{ padding: '8px', borderRadius: '8px', flexShrink: 0 }}
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* টপবার */}
      <header className="topbar">
        <div className="topbar-left">
          <button
            type="button"
            className="topbar-icon-btn menu-toggle-btn"
            onClick={handleToggleMenu}
            aria-label={sidebarOpen ? "সাইডবার লুকান" : "সাইডবার দেখান"}
            title={sidebarOpen ? "সাইডবার লুকান" : "সাইডবার দেখান"}
            style={{ cursor: 'pointer' }}
          >
            <Menu size={22} />
          </button>

          <div className="topbar-breadcrumb">
            <Building2 size={16} />
            {(typeof user?.institution === 'object' ? user?.institution?.name : user?.institution) || 'আন্-নুর-ইসলামিক একাডেমি'}
            <ChevronLeft size={14} style={{ opacity: 0.4 }} />
            <span>{getPageTitle()}</span>
          </div>
        </div>

        <div className="topbar-right">
          <GlobalSearch />

          <button className="topbar-icon-btn" onClick={toggleTheme} title="থিম পরিবর্তন করুন">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <NotificationDropdown />
        </div>
      </header>

      {/* মেইন কন্টেন্ট */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* মোবাইল ও ওয়েব পুশ নোটিফিকেশন প্রম্পট */}
      <PushNotificationPrompt />

      {/* মোবাইল ড্রয়ার overlay (ডেস্কটপে সম্পূর্ণ লুকানো, মোবাইলে ক্লিক করলে ড্রয়ার বন্ধ হবে) */}
      {mobileOpen && (
        <div
          className="mobile-sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </div>
  );
}
