import React from 'react';

/**
 * RouteLoadingFallback — একটি হালকা, প্রিমিয়াম ও রেসপনসিভ লোডিং ফলব্যাক
 * বিদ্যমান ডিজাইন সিস্টেম ও CSS ভেরিয়েবল অনুযায়ী ডার্ক/লাইট উভয় থিমে কাজ করে।
 */
export default function RouteLoadingFallback({ fullScreen = false, message = 'লোড হচ্ছে...' }) {
  if (fullScreen) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: 'var(--bg-primary, #0f172a)',
          color: 'var(--text-primary, #f8fafc)',
          gap: '16px',
        }}
        aria-live="polite"
        aria-busy="true"
      >
        <div className="spinner" style={{ width: '42px', height: '42px', borderWidth: '3.5px' }} />
        {message && (
          <p
            style={{
              fontSize: '0.938rem',
              color: 'var(--text-muted, #94a3b8)',
              fontWeight: 500,
              letterSpacing: '0.02em',
              margin: 0,
            }}
          >
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '45vh',
        width: '100%',
        padding: '40px 16px',
        gap: '14px',
      }}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="spinner" style={{ width: '36px', height: '36px', borderWidth: '3px' }} />
      {message && (
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted, #94a3b8)',
            fontWeight: 500,
            margin: 0,
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
