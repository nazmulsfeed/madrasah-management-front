import React from 'react';
import { User, Shield, Clock } from 'lucide-react';

/**
 * Reusable Audit Badge component
 * Displays who created, updated, approved, or received a record with timestamp and role
 * 
 * Props:
 * - user: { name, roleLabel, username, phone, photo }
 * - date: Date | string
 * - label: string (e.g. 'ভর্তি করেছেন', 'আপডেট করেছেন', 'আদায়কারী', 'অনুমোদনকারী')
 * - variant: 'compact' | 'badge' | 'card' | 'stamp'
 */
export default function AuditBadge({
  user,
  date,
  label = 'সম্পাদনকারী',
  variant = 'badge',
  className = '',
  style = {}
}) {
  if (!user && !date) return null;

  const formatDate = (d) => {
    if (!d) return '';
    try {
      const parsed = new Date(d);
      if (isNaN(parsed.getTime())) return String(d);
      return parsed.toLocaleString('bn-BD', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch {
      return String(d);
    }
  };

  const name = user?.name || user?.username || 'অজানা ব্যবহারকারী';
  const role = user?.roleLabel || '';
  const dateStr = formatDate(date);

  if (variant === 'compact') {
    return (
      <span 
        className={`inline-flex items-center gap-4 text-xs ${className}`}
        style={{ color: 'var(--text-secondary)', ...style }}
        title={`${label}: ${name} (${role || 'স্টাফ'}) ${dateStr ? `• ${dateStr}` : ''}`}
      >
        <User size={12} className="text-muted" />
        <span className="font-medium text-slate-800 dark:text-slate-200">{name}</span>
        {dateStr && <span className="text-muted opacity-80">({dateStr})</span>}
      </span>
    );
  }

  if (variant === 'stamp') {
    return (
      <div 
        className={`p-6 rounded-lg text-xs flex flex-col gap-2 ${className}`}
        style={{
          border: '1px dashed var(--border-color)',
          background: 'rgba(255, 255, 255, 0.03)',
          minWidth: '140px',
          ...style
        }}
      >
        <span className="text-muted font-medium" style={{ fontSize: '0.75rem' }}>{label}</span>
        <strong className="text-primary font-semibold" style={{ fontSize: '0.85rem' }}>{name}</strong>
        {role && <span className="badge badge-sm badge-info" style={{ width: 'fit-content', fontSize: '0.7rem' }}>{role}</span>}
        {dateStr && (
          <span className="text-muted flex items-center gap-4 text-xs" style={{ fontSize: '0.72rem' }}>
            <Clock size={11} /> {dateStr}
          </span>
        )}
      </div>
    );
  }

  // Default 'badge' variant
  return (
    <div 
      className={`inline-flex items-center gap-6 px-8 py-4 rounded-md text-xs ${className}`}
      style={{
        backgroundColor: 'rgba(59, 130, 246, 0.08)',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        color: 'var(--text-primary)',
        width: 'fit-content',
        ...style
      }}
      title={`${label}: ${name} (${role || 'স্টাফ'})`}
    >
      <div className="flex items-center gap-4">
        <Shield size={13} className="text-primary" />
        <span className="text-muted">{label}:</span>
        <strong className="font-semibold">{name}</strong>
        {role && (
          <span 
            className="text-primary-600 font-medium px-4 py-1 rounded" 
            style={{ fontSize: '0.7rem', background: 'rgba(59, 130, 246, 0.15)' }}
          >
            {role}
          </span>
        )}
      </div>
      {dateStr && (
        <span className="text-muted opacity-75 font-mono text-xs flex items-center gap-2">
          • <Clock size={10} /> {dateStr}
        </span>
      )}
    </div>
  );
}
