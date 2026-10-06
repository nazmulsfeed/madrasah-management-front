import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  X,
  Loader2,
  GraduationCap,
  Users,
  ChevronRight,
  Compass,
  Phone,
  User,
} from 'lucide-react';
import api from '../../api/axios';
import { RAW_MENU_GROUPS } from '../../utils/navigationConfig';

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({ students: [], teachers: [] });
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Keyboard shortcut listener: '/' or 'Ctrl+K'
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') ||
          ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Flatten menu items for fast keyword searching
  const allMenuItems = useMemo(() => {
    const list = [];
    RAW_MENU_GROUPS.forEach((group) => {
      group.items.forEach((item) => {
        list.push({
          group: group.group,
          label: item.label,
          path: item.path,
          icon: item.icon,
          color: item.color,
        });
      });
    });
    return list;
  }, []);

  // Match menu items based on query
  const matchedMenus = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allMenuItems.filter((item) => {
      const matchLabel = item.label.toLowerCase().includes(q);
      const matchGroup = item.group.toLowerCase().includes(q);
      const matchPath = item.path.toLowerCase().includes(q);
      return matchLabel || matchGroup || matchPath;
    }).slice(0, 6);
  }, [query, allMenuItems]);

  // Debounced API search for students and teachers
  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults({ students: [], teachers: [] });
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await api.get('/search/global', {
          params: { q: trimmed },
        });
        if (res.data.success) {
          setResults(res.data.data || { students: [], teachers: [] });
        }
      } catch (err) {
        console.error('Global search error:', err);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSelectMenu = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const handleSelectStudent = (student) => {
    setIsOpen(false);
    navigate(`/students?search=${encodeURIComponent(student.studentId || student.name)}`);
  };

  const handleSelectTeacher = () => {
    setIsOpen(false);
    navigate('/teachers');
  };

  const hasAnyResults =
    matchedMenus.length > 0 ||
    results.students.length > 0 ||
    results.teachers.length > 0;

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div
      ref={containerRef}
      className="global-search-container"
      style={{ position: 'relative' }}
    >
      <div className="topbar-search" style={{ position: 'relative' }}>
        <Search
          size={16}
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            pointerEvents: 'none',
          }}
        />
        <input
          ref={inputRef}
          type="text"
          placeholder="যেকোনো তথ্য খুঁজুন (ছাত্র, শিক্ষক, মেনু)..."
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          style={{
            paddingLeft: '38px',
            paddingRight: query ? '34px' : '36px',
          }}
        />

        {loading ? (
          <Loader2
            size={15}
            className="animate-spin"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--primary-500, #0d9488)',
            }}
          />
        ) : query ? (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setResults({ students: [], teachers: [] });
              inputRef.current?.focus();
            }}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px',
            }}
            title="মুছে ফেলুন"
          >
            <X size={15} />
          </button>
        ) : (
          <kbd
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '11px',
              padding: '2px 5px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              color: 'var(--text-muted)',
              pointerEvents: 'none',
            }}
          >
            /
          </kbd>
        )}
      </div>

      {/* Floating Results Popover */}
      {showDropdown && (
        <div
          className="global-search-dropdown"
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            width: '440px',
            maxWidth: '92vw',
            maxHeight: '480px',
            overflowY: 'auto',
            background: 'var(--bg-secondary, #1e293b)',
            border: '1px solid var(--border-color, #334155)',
            borderRadius: '12px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.35)',
            zIndex: 1100,
            padding: '8px 0',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '8px 16px',
              borderBottom: '1px solid var(--border-color, #334155)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              "{query}" এর জন্য ফলাফল
            </span>
            <span style={{ fontSize: '0.72rem', opacity: 0.8 }}>Esc চাপুন বন্ধ করতে</span>
          </div>

          {!hasAnyResults && !loading && (
            <div
              style={{
                padding: '32px 16px',
                textAlign: 'center',
                color: 'var(--text-muted)',
              }}
            >
              <Compass size={28} style={{ margin: '0 auto 8px', opacity: 0.4 }} />
              <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>
                কোনো ফলাফল পাওয়া যায়নি
              </div>
              <div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: 0.8 }}>
                অন্য কিওয়ার্ড (যেমন: ছাত্রের নাম, আইডি, ফোন বা মেনুর নাম) দিয়ে চেষ্টা করুন
              </div>
            </div>
          )}

          {/* Section 1: Pages & Menus */}
          {matchedMenus.length > 0 && (
            <div style={{ padding: '6px 0' }}>
              <div
                style={{
                  padding: '4px 16px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'var(--primary-400, #38bdf8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Compass size={13} /> পেজ ও মেনু ({matchedMenus.length})
              </div>
              {matchedMenus.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.path}
                    onClick={() => handleSelectMenu(item.path)}
                    style={{
                      padding: '8px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          background: item.color ? `${item.color}22` : 'rgba(255,255,255,0.08)',
                          color: item.color || 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {IconComponent && <IconComponent size={15} />}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                          {item.group} • {item.path}
                        </div>
                      </div>
                    </div>
                    <ChevronRight size={14} style={{ color: 'var(--text-muted)' }} />
                  </div>
                );
              })}
            </div>
          )}

          {/* Section 2: Students */}
          {results.students.length > 0 && (
            <div
              style={{
                padding: '6px 0',
                borderTop: matchedMenus.length > 0 ? '1px solid var(--border-color, #334155)' : 'none',
              }}
            >
              <div
                style={{
                  padding: '6px 16px 4px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <GraduationCap size={14} /> শিক্ষার্থী ({results.students.length})
              </div>
              {results.students.map((student) => (
                <div
                  key={student.id}
                  onClick={() => handleSelectStudent(student)}
                  style={{
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: 'var(--primary-600, #0d9488)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        flexShrink: 0,
                      }}
                    >
                      {student.photo ? (
                        <img
                          src={student.photo}
                          alt={student.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        student.name?.charAt(0) || 'S'
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {student.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.73rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          flexWrap: 'wrap',
                          marginTop: '2px',
                        }}
                      >
                        {student.studentId && (
                          <span
                            style={{
                              background: 'rgba(255,255,255,0.08)',
                              padding: '1px 5px',
                              borderRadius: '4px',
                            }}
                          >
                            আইডি: {student.studentId}
                          </span>
                        )}
                        {student.className && (
                          <span>শ্রেণি: {student.className}</span>
                        )}
                        {student.fatherName && (
                          <span>পিতা: {student.fatherName}</span>
                        )}
                        {student.phone && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            <Phone size={10} /> {student.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          )}

          {/* Section 3: Teachers */}
          {results.teachers.length > 0 && (
            <div
              style={{
                padding: '6px 0',
                borderTop: '1px solid var(--border-color, #334155)',
              }}
            >
              <div
                style={{
                  padding: '6px 16px 4px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#8b5cf6',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Users size={14} /> শিক্ষক ও স্টাফ ({results.teachers.length})
              </div>
              {results.teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  onClick={handleSelectTeacher}
                  style={{
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#6366f1',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        flexShrink: 0,
                      }}
                    >
                      {teacher.photo ? (
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <User size={16} />
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {teacher.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.73rem',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginTop: '2px',
                        }}
                      >
                        <span
                          style={{
                            background: 'rgba(99, 102, 241, 0.15)',
                            color: '#a5b4fc',
                            padding: '1px 5px',
                            borderRadius: '4px',
                          }}
                        >
                          {teacher.designation}
                        </span>
                        {teacher.phone && (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                            <Phone size={10} /> {teacher.phone}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={14} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
