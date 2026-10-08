import React from 'react';
import { AlertTriangle, RefreshCw, LogIn } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  handleReload = () => {
    // If Service Worker caches are stale or chunks are missing, clearing them helps
    if ('caches' in window) {
      caches.keys().then((names) => {
        names.forEach((name) => {
          if (name.includes('annur-academy-cache')) {
            caches.delete(name);
          }
        });
      });
    }
    window.location.reload();
  };

  handleGoLogin = () => {
    window.location.href = '/login';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'var(--bg-primary, #0b1120)',
            color: 'var(--text-primary, #f8fafc)',
            fontFamily: "'Noto Sans Bengali', 'Inter', sans-serif",
          }}
        >
          <div
            style={{
              maxWidth: '520px',
              width: '100%',
              background: 'var(--bg-card, #1e293b)',
              border: '1px solid var(--border-color, #334155)',
              borderRadius: '16px',
              padding: '32px 24px',
              textAlign: 'center',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                color: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
              }}
            >
              <AlertTriangle size={32} />
            </div>

            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                marginBottom: '10px',
                color: 'var(--text-primary, #f8fafc)',
              }}
            >
              সাময়িক ত্রুটি দেখা দিয়েছে
            </h2>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted, #94a3b8)',
                lineHeight: '1.6',
                marginBottom: '24px',
              }}
            >
              অ্যাপ্লিকেশনটি লোড করার সময় একটি সমস্যা হয়েছে। পেজটি পুনরায় লোড দিলে সাধারণত এই সমস্যার সমাধান হয়ে যায়।
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px',
              }}
            >
              <button
                type="button"
                onClick={this.handleReload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'var(--primary-600, #059669)',
                  color: '#ffffff',
                  border: 'none',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}
              >
                <RefreshCw size={18} /> পেজটি পুনরায় লোড করুন
              </button>

              <button
                type="button"
                onClick={this.handleGoLogin}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  color: 'var(--text-secondary, #cbd5e1)',
                  border: '1px solid var(--border-color, #334155)',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                <LogIn size={16} /> লগইন পেজে ফিরে যান
              </button>
            </div>

            {this.state.error && (
              <details
                style={{
                  textAlign: 'left',
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  color: '#f87171',
                  marginTop: '16px',
                  cursor: 'pointer',
                  wordBreak: 'break-word',
                }}
              >
                <summary style={{ color: 'var(--text-muted, #94a3b8)', marginBottom: '6px' }}>
                  কারিগরি বিবরণ (Technical details)
                </summary>
                {this.state.error.toString()}
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
