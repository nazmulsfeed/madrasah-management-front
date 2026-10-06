import React from 'react';

/**
 * Reusable official footer signatures component matching the standard A4 print template.
 */
export default function PrintFooterSignatures({
  roles = [
    'পরিচালক',
    'প্রতিষ্ঠান প্রধান'
  ],
  institutionName = 'আন্-নূর ইসলামিক একাডেমি',
  className = '',
  style = {}
}) {
  if (!roles || roles.length === 0) return null;
  const isSingle = roles.length === 1;

  return (
    <div
      className={`print-footer-signatures-wrap ${className}`}
      style={{
        marginTop: 'auto',
        paddingTop: '24px',
        width: '100%',
        pageBreakInside: 'avoid',
        breakInside: 'avoid',
        ...style
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: isSingle ? 'flex-end' : 'space-between',
          alignItems: 'flex-end',
          gap: '12px',
          width: '100%'
        }}
      >
        {roles.map((role) => (
          <div
            key={role}
            style={{
              flex: isSingle ? '0 0 200px' : 1,
              marginLeft: isSingle ? 'auto' : undefined,
              textAlign: 'center',
              minWidth: 0
            }}
          >
            <div
              style={{
                borderTop: '1.5px solid #334155',
                paddingTop: '4px',
                fontWeight: 700,
                fontSize: '11.5px',
                color: '#0f172a',
                maxWidth: '220px',
                margin: '0 auto',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {role}
            </div>
            <div
              style={{
                fontSize: '11.5px',
                color: '#64748b',
                fontWeight: 500,
                marginTop: '2px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {institutionName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
