import React, { useState, useEffect } from 'react';
import { Plus, X } from 'lucide-react';
import useAuthStore from '../../store/authStore';

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
 * Allows choosing which roles appear in the official footer signatures and dynamically adding custom roles.
 */
export default function PrintSignatureRoleSelector({
  selectedRoles = DEFAULT_SIGNATURE_ROLES,
  onChange,
  maxRoles = 6,
  additionalRoles = [],
  className = '',
  style = {}
}) {
  const { user } = useAuthStore();
  const userType = user?.userType;

  // Student and Guardian accounts do not need the signature role selector
  if (userType === 'student' || userType === 'guardian') {
    return null;
  }
  // Load saved custom roles from localStorage
  const [customRoles, setCustomRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_custom_roles');
      return saved ? JSON.parse(saved) : [];
    } catch (_) {
      return [];
    }
  });

  const [newRoleInput, setNewRoleInput] = useState('');

  // Combined roles list
  const allRoles = [...new Set([...PRESET_SIGNATURE_ROLES, ...customRoles, ...additionalRoles])];

  const handleToggle = (role) => {
    if (!onChange) return;
    if (selectedRoles.includes(role)) {
      onChange(selectedRoles.filter(r => r !== role));
    } else {
      if (selectedRoles.length >= maxRoles) return;
      onChange([...selectedRoles, role]);
    }
  };

  const handleAddCustomRole = (e) => {
    if (e) e.preventDefault();
    const trimmed = newRoleInput.trim();
    if (!trimmed) return;
    if (allRoles.includes(trimmed)) {
      if (!selectedRoles.includes(trimmed) && selectedRoles.length < maxRoles) {
        onChange && onChange([...selectedRoles, trimmed]);
      }
      setNewRoleInput('');
      return;
    }

    const updatedCustom = [...customRoles, trimmed];
    setCustomRoles(updatedCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(updatedCustom));
    } catch (_) {}

    // Automatically check the new role if under maxRoles limit
    if (onChange && selectedRoles.length < maxRoles) {
      onChange([...selectedRoles, trimmed]);
    }
    setNewRoleInput('');
  };

  const handleDeleteCustomRole = (role, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const updatedCustom = customRoles.filter(r => r !== role);
    setCustomRoles(updatedCustom);
    try {
      localStorage.setItem('annur_footer_custom_roles', JSON.stringify(updatedCustom));
    } catch (_) {}

    if (selectedRoles.includes(role) && onChange) {
      onChange(selectedRoles.filter(r => r !== role));
    }
  };

  return (
    <div className={`no-print print-signature-role-selector ${className}`} style={{
      padding: '10px 14px',
      background: 'var(--bg-tertiary, #f8fafc)',
      border: '1px solid var(--border-color, #e2e8f0)',
      borderRadius: '8px',
      marginBottom: '14px',
      ...style
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-primary, #1e293b)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>✍️ ফুটার স্বাক্ষরকারী রোল নির্বাচন:</span>
          <span style={{ fontSize: '0.72rem', color: selectedRoles.length >= maxRoles ? '#f59e0b' : 'var(--text-muted, #64748b)' }}>
            (নির্বাচিত: {selectedRoles.length}টি{maxRoles ? ` / সর্বোচ্চ ${maxRoles}টি` : ''})
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

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', marginBottom: '8px' }}>
        {allRoles.map((role) => {
          const isChecked = selectedRoles.includes(role);
          const isCustom = customRoles.includes(role);
          return (
            <label
              key={role}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                padding: '3px 8px',
                borderRadius: '6px',
                background: isChecked ? 'rgba(37, 99, 235, 0.12)' : '#ffffff',
                border: '1px solid',
                borderColor: isChecked ? '#2563eb' : '#cbd5e1',
                color: isChecked ? '#1d4ed8' : '#334155',
                fontWeight: isChecked ? 600 : 400,
                userSelect: 'none',
                position: 'relative'
              }}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleToggle(role)}
                style={{ cursor: 'pointer', accentColor: '#2563eb' }}
              />
              <span>{role}</span>
              {isCustom && (
                <button
                  type="button"
                  onClick={(e) => handleDeleteCustomRole(role, e)}
                  title="এই পদবি তালিকা থেকে মুছুন"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0 0 0 2px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
                >
                  <X size={12} />
                </button>
              )}
            </label>
          );
        })}
      </div>

      {/* Add Custom Role Input Form */}
      <form onSubmit={handleAddCustomRole} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
        <input
          type="text"
          placeholder="নতুন স্বাক্ষর রোল/পদবি লিখুন (যেমন: হিসাবরক্ষক, সভাপতি)..."
          value={newRoleInput}
          onChange={(e) => setNewRoleInput(e.target.value)}
          style={{
            fontSize: '0.75rem',
            padding: '4px 10px',
            borderRadius: '5px',
            border: '1px solid var(--border-color, #cbd5e1)',
            background: '#ffffff',
            color: 'var(--text-primary, #0f172a)',
            width: '260px',
            maxWidth: '100%',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          disabled={!newRoleInput.trim()}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '3px',
            fontSize: '0.74rem',
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: '5px',
            background: newRoleInput.trim() ? '#0f766e' : '#e2e8f0',
            color: newRoleInput.trim() ? '#ffffff' : '#94a3b8',
            border: 'none',
            cursor: newRoleInput.trim() ? 'pointer' : 'not-allowed'
          }}
        >
          <Plus size={13} />
          <span>যোগ করুন</span>
        </button>
      </form>
    </div>
  );
}
