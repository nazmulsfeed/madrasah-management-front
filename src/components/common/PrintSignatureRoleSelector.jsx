import React from 'react';

export const PRESET_SIGNATURE_ROLES = [
  'পরিচালক',
  'প্রতিষ্ঠান প্রধান',
  'প্রধান শিক্ষক, নূরানী বিভাগ',
  'প্রধান শিক্ষক, বালক শাখা',
  'প্রধান শিক্ষিকা, বালিকা শাখা',
  'শ্রেণী শিক্ষক'
];

export const DEFAULT_SIGNATURE_ROLES = [
  'পরিচালক',
  'প্রতিষ্ঠান প্রধান'
];

/**
 * Interactive signature role selector to be placed above print preview or in print modals.
 * Allows choosing which roles appear in the official footer signatures.
 */
export default function PrintSignatureRoleSelector({
  selectedRoles = DEFAULT_SIGNATURE_ROLES,
  onChange,
  maxRoles = 6,
  additionalRoles = [],
  className = '',
  style = {}
}) {
  const allRoles = [...new Set([...PRESET_SIGNATURE_ROLES, ...additionalRoles])];

  const handleToggle = (role) => {
    if (!onChange) return;
    if (selectedRoles.includes(role)) {
      onChange(selectedRoles.filter(r => r !== role));
    } else {
      if (selectedRoles.length >= maxRoles) return;
      onChange([...selectedRoles, role]);
    }
  };

  return (
    <div className={`no-print print-signature-role-selector ${className}`} style={{
      padding: '8px 12px',
      background: 'var(--bg-tertiary, #f8fafc)',
      border: '1px solid var(--border-color, #e2e8f0)',
      borderRadius: '8px',
      marginBottom: '14px',
      ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '6px' }}>
        <div style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-primary, #1e293b)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>✍️ ফুটার স্বাক্ষরকারী রোল নির্বাচন:</span>
          <span style={{ fontSize: '0.70rem', color: selectedRoles.length >= maxRoles ? '#f59e0b' : 'var(--text-muted, #64748b)' }}>
            (নির্বাচিত: {selectedRoles.length}টি)
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => onChange && onChange(allRoles.slice(0, maxRoles))}
            style={{
              background: 'none',
              border: 'none',
              color: '#059669',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0
            }}
          >
            সব নির্বাচন
          </button>
          <span style={{ color: '#cbd5e1' }}>|</span>
          <button
            type="button"
            onClick={() => onChange && onChange([])}
            style={{
              background: 'none',
              border: 'none',
              color: '#ef4444',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline',
              padding: 0
            }}
          >
            সব মুছুন
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
        {allRoles.map((role) => {
          const isChecked = selectedRoles.includes(role);
          return (
            <label
              key={role}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.74rem',
                cursor: 'pointer',
                padding: '3px 8px',
                borderRadius: '5px',
                background: isChecked ? 'rgba(37, 99, 235, 0.12)' : '#ffffff',
                border: '1px solid',
                borderColor: isChecked ? '#2563eb' : '#cbd5e1',
                color: isChecked ? '#1d4ed8' : '#334155',
                fontWeight: isChecked ? 600 : 400,
                userSelect: 'none'
              }}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleToggle(role)}
                style={{ cursor: 'pointer', accentColor: '#2563eb' }}
              />
              <span>{role}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
