import React from 'react';

export default function WholeWordToggle({ checked = true, onChange, style = {} }) {
  return (
    <label
      title={checked ? 'পূর্ণ শব্দ ম্যাচ (Whole words) চালু আছে — আংশিক সার্চের জন্য টিক উঠিয়ে দিন' : 'সাধারণ আংশিক সার্চ চালু আছে — পূর্ণ শব্দ ম্যাচের জন্য টিক দিন'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 9px',
        borderRadius: '8px',
        border: `1px solid ${checked ? 'rgba(13, 148, 136, 0.45)' : 'var(--border-color)'}`,
        background: checked ? 'rgba(13, 148, 136, 0.1)' : 'transparent',
        color: checked ? '#0d9488' : 'var(--text-secondary)',
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        flexShrink: 0,
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange && onChange(e.target.checked)}
        style={{ width: '14px', height: '14px', accentColor: '#0d9488', cursor: 'pointer', margin: 0 }}
      />
      <span>Whole words</span>
    </label>
  );
}
