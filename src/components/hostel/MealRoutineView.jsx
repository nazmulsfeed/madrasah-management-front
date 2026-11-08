import { useState, useEffect } from 'react';
import { 
  Utensils, Coffee, Sun, Sunset, Moon, Edit3, Save, X, 
  CheckCircle, AlertCircle, RefreshCw, Calendar, Sparkles, Info
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';

const DAYS_OF_WEEK = [
  { key: 'saturday', label: 'শনিবার', en: 'Saturday' },
  { key: 'sunday', label: 'রবিবার', en: 'Sunday' },
  { key: 'monday', label: 'সোমবার', en: 'Monday' },
  { key: 'tuesday', label: 'মঙ্গলবার', en: 'Tuesday' },
  { key: 'wednesday', label: 'বুধবার', en: 'Wednesday' },
  { key: 'thursday', label: 'বৃহস্পতিবার', en: 'Thursday' },
  { key: 'friday', label: 'শুক্রবার', en: 'Friday' },
];

export default function MealRoutineView({ readOnly = false, isStudentView = false }) {
  const { user, permissions } = useAuthStore();
  const isStudent = user?.userType === 'student';
  const isAuthority = 
    user?.userType === 'super_admin' || 
    user?.userType === 'co_super_admin' || 
    user?.userType === 'admin' || 
    user?.userType === 'principal' ||
    user?.userType === 'vice_principal' ||
    user?.userType === 'teacher' || 
    user?.userType === 'hifz_teacher' || 
    user?.userType === 'hostel_manager' ||
    ['super_admin', 'co_super_admin', 'admin'].includes(user?.adminRole) ||
    Boolean(permissions?.can_manage_hostel);

  const canEdit = !readOnly && !isStudentView && !isStudent && isAuthority;

  const [routines, setRoutines] = useState([]);
  const [editedRoutines, setEditedRoutines] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);
  const [selectedDay, setSelectedDay] = useState('all'); // 'all' or day key

  const todayKey = (() => {
    try {
      const dayName = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Dhaka', weekday: 'long' }).format(new Date()).toLowerCase();
      return dayName;
    } catch (_) {
      const map = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      return map[new Date().getDay()];
    }
  })();

  const fetchRoutines = async () => {
    setLoading(true);
    try {
      const res = await api.get('/hostels/meal-routine');
      if (res.data.success) {
        const list = res.data.data.routines || [];
        // Ensure all 7 days exist
        const formatted = DAYS_OF_WEEK.map(d => {
          const match = list.find(r => (r.dayOfWeek || '').toLowerCase() === d.key);
          return match || {
            dayOfWeek: d.key,
            breakfast: '',
            lunch: '',
            snacks: '',
            dinner: '',
            specialNote: ''
          };
        });
        setRoutines(formatted);
        setEditedRoutines(JSON.parse(JSON.stringify(formatted)));
      }
    } catch (err) {
      console.error('Failed to fetch meal routines', err);
      // Fallback local 7 days
      const fallback = DAYS_OF_WEEK.map(d => ({
        dayOfWeek: d.key,
        breakfast: '',
        lunch: '',
        snacks: '',
        dinner: '',
        specialNote: ''
      }));
      setRoutines(fallback);
      setEditedRoutines(JSON.parse(JSON.stringify(fallback)));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoutines();
  }, []);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleFieldChange = (dayKey, field, value) => {
    setEditedRoutines(prev => prev.map(r => {
      if ((r.dayOfWeek || '').toLowerCase() === dayKey) {
        return { ...r, [field]: value };
      }
      return r;
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await api.post('/hostels/meal-routine', { routines: editedRoutines });
      if (res.data.success) {
        setRoutines(editedRoutines);
        setIsEditing(false);
        setToast({ type: 'success', message: 'খাবার রুটিন সফলভাবে আপডেট ও প্রকাশ করা হয়েছে!' });
      }
    } catch (err) {
      console.error('Failed to save meal routine', err);
      setToast({ type: 'error', message: err.response?.data?.message || 'রুটিন সংরক্ষণে ব্যর্থ হয়েছে' });
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setEditedRoutines(JSON.parse(JSON.stringify(routines)));
    setIsEditing(false);
  };

  const todayRoutine = routines.find(r => (r.dayOfWeek || '').toLowerCase() === todayKey);

  return (
    <div className="meal-routine-container animate-fade-in" style={{ width: '100%' }}>
      {toast && (
        <div style={{
          position: 'fixed', top: '20px', right: '20px', zIndex: 2500,
          padding: '14px 20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px',
          background: toast.type === 'success' ? 'rgba(16, 185, 129, 0.96)' : 'rgba(239, 68, 68, 0.96)',
          color: '#fff', boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          animation: 'slideDown 0.3s ease-out', maxWidth: '420px',
        }}>
          {toast.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
          <span style={{ fontSize: '0.92rem', fontWeight: 500 }}>{toast.message}</span>
        </div>
      )}

      {/* Header bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '12px', marginBottom: '20px',
        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(13, 148, 136, 0.12) 100%)',
        padding: '16px 20px', borderRadius: '14px', border: '1px solid rgba(16, 185, 129, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '10px',
            background: 'var(--primary, #0f766e)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Utensils size={22} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              আবাসিক খাবার রুটিন (Hostel Meal Routine)
            </h3>
            <p style={{ margin: 0, fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              আবাসিক শিক্ষার্থীদের সাপ্তাহিক স্বাস্থ্যসম্মত খাবারের নির্ধারিত তালিকা
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {canEdit && !isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-primary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px' }}
            >
              <Edit3 size={15} />
              <span>রুটিন সম্পাদনা করুন</span>
            </button>
          )}

          {isEditing && (
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handleCancel}
                disabled={saving}
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <X size={15} />
                <span>বাতিল</span>
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="btn btn-primary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#059669', borderColor: '#059669' }}
              >
                {saving ? <RefreshCw size={15} className="spinner" /> : <Save size={15} />}
                <span>{saving ? 'সংরক্ষণ হচ্ছে...' : 'সংরক্ষণ ও প্রকাশ করুন'}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Today's Special Meal Banner */}
      {todayRoutine && (
        <div style={{
          marginBottom: '24px',
          background: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '20px',
          boxShadow: '0 8px 24px rgba(6, 78, 59, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1,
            pointerEvents: 'none'
          }}>
            <Utensils size={140} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span style={{
              background: '#f59e0b', color: '#78350f', fontSize: '0.75rem',
              fontWeight: 800, padding: '3px 10px', borderRadius: '20px',
              textTransform: 'uppercase', letterSpacing: '0.5px', display: 'inline-flex', alignItems: 'center', gap: '4px'
            }}>
              <Sparkles size={12} /> আজকের খাবার (Today)
            </span>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ecfdf5' }}>
              {DAYS_OF_WEEK.find(d => d.key === todayKey)?.label}
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#a7f3d0', marginBottom: '4px', fontWeight: 600 }}>
                <Coffee size={14} /> সকালের নাস্তা
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 500, color: '#ffffff' }}>
                {todayRoutine.breakfast || '—'}
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#a7f3d0', marginBottom: '4px', fontWeight: 600 }}>
                <Sun size={14} /> দুপুরের খাবার
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 500, color: '#ffffff' }}>
                {todayRoutine.lunch || '—'}
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#a7f3d0', marginBottom: '4px', fontWeight: 600 }}>
                <Sunset size={14} /> বিকালের নাস্তা
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 500, color: '#ffffff' }}>
                {todayRoutine.snacks || '—'}
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(8px)', padding: '12px 14px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#a7f3d0', marginBottom: '4px', fontWeight: 600 }}>
                <Moon size={14} /> রাতের খাবার
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 500, color: '#ffffff' }}>
                {todayRoutine.dinner || '—'}
              </div>
            </div>
          </div>

          {todayRoutine.specialNote && (
            <div style={{ marginTop: '12px', fontSize: '0.82rem', color: '#fef3c7', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Info size={14} />
              <span><strong>বিশেষ নির্দেশ:</strong> {todayRoutine.specialNote}</span>
            </div>
          )}
        </div>
      )}

      {/* Day Filter Pills */}
      <div style={{
        display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '10px',
        marginBottom: '16px'
      }}>
        <button
          type="button"
          onClick={() => setSelectedDay('all')}
          className={`btn btn-sm ${selectedDay === 'all' ? 'btn-primary' : 'btn-secondary'}`}
          style={{ borderRadius: '20px', padding: '6px 14px', fontSize: '0.82rem', whiteSpace: 'nowrap' }}
        >
          পুরো সপ্তাহ (সকল দিন)
        </button>
        {DAYS_OF_WEEK.map(d => {
          const isToday = d.key === todayKey;
          return (
            <button
              key={d.key}
              type="button"
              onClick={() => setSelectedDay(d.key)}
              className={`btn btn-sm ${selectedDay === d.key ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                borderRadius: '20px', padding: '6px 14px', fontSize: '0.82rem', whiteSpace: 'nowrap',
                border: isToday ? '2px solid var(--primary-500, #10b981)' : undefined
              }}
            >
              {d.label} {isToday && '★ আজ'}
            </button>
          );
        })}
      </div>

      {/* Weekly Grid / Cards */}
      {loading ? (
        <div style={{ padding: '60px', textAlign: 'center' }}>
          <div className="spinner" style={{ margin: '0 auto 12px' }}></div>
          <div className="text-muted">খাবার রুটিন লোড হচ্ছে...</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
          {DAYS_OF_WEEK
            .filter(d => selectedDay === 'all' || selectedDay === d.key)
            .map(d => {
              const r = isEditing 
                ? (editedRoutines.find(item => (item.dayOfWeek || '').toLowerCase() === d.key) || {})
                : (routines.find(item => (item.dayOfWeek || '').toLowerCase() === d.key) || {});
              const isToday = d.key === todayKey;

              return (
                <div
                  key={d.key}
                  className="card animate-slide-up"
                  style={{
                    padding: '18px',
                    borderRadius: '14px',
                    border: isToday ? '2px solid var(--primary-500, #10b981)' : '1px solid var(--border-color)',
                    background: isToday ? 'rgba(16, 185, 129, 0.03)' : 'var(--bg-card)',
                    boxShadow: isToday ? '0 4px 16px rgba(16, 185, 129, 0.12)' : 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Calendar size={18} style={{ color: isToday ? 'var(--primary-500, #10b981)' : 'var(--text-muted)' }} />
                      <span style={{ fontWeight: 700, fontSize: '1.05rem', color: isToday ? 'var(--primary-500, #10b981)' : 'var(--text-primary)' }}>
                        {d.label}
                      </span>
                    </div>
                    {isToday && (
                      <span className="badge badge-success" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                        আজকের দিন
                      </span>
                    )}
                  </div>

                  {isEditing ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                          <Coffee size={13} style={{ color: '#d97706' }} /> সকালের নাস্তা
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          style={{ fontSize: '0.86rem', padding: '6px 10px' }}
                          value={r.breakfast || ''}
                          onChange={e => handleFieldChange(d.key, 'breakfast', e.target.value)}
                          placeholder="যেমন: ডিম, খিচুড়ি, চা"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                          <Sun size={13} style={{ color: '#ea580c' }} /> দুপুরের খাবার
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          style={{ fontSize: '0.86rem', padding: '6px 10px' }}
                          value={r.lunch || ''}
                          onChange={e => handleFieldChange(d.key, 'lunch', e.target.value)}
                          placeholder="যেমন: ভাত, রুই মাছ, ডাল, সবজি"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                          <Sunset size={13} style={{ color: '#ca8a04' }} /> বিকালের নাস্তা
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          style={{ fontSize: '0.86rem', padding: '6px 10px' }}
                          value={r.snacks || ''}
                          onChange={e => handleFieldChange(d.key, 'snacks', e.target.value)}
                          placeholder="যেমন: মুড়ি, বিস্কুট, হালুয়া"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                          <Moon size={13} style={{ color: '#6366f1' }} /> রাতের খাবার
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          style={{ fontSize: '0.86rem', padding: '6px 10px' }}
                          value={r.dinner || ''}
                          onChange={e => handleFieldChange(d.key, 'dinner', e.target.value)}
                          placeholder="যেমন: ভাত, মুরগির মাংস, পাতলা ডাল"
                        />
                      </div>

                      <div>
                        <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '3px', display: 'block' }}>
                          বিশেষ নোট / সতর্কতা (ঐচ্ছিক)
                        </label>
                        <input
                          type="text"
                          className="form-input"
                          style={{ fontSize: '0.82rem', padding: '5px 8px' }}
                          value={r.specialNote || ''}
                          onChange={e => handleFieldChange(d.key, 'specialNote', e.target.value)}
                          placeholder="যেমন: শুক্রবার রাতের খাবার রাত ৮:৩০ এ"
                        />
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ padding: '8px 10px', background: 'var(--bg-secondary, #f8fafc)', borderRadius: '8px', borderLeft: '3px solid #d97706' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                          <Coffee size={13} style={{ color: '#d97706' }} /> সকালের নাস্তা
                        </div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)', marginTop: '2px' }}>
                          {r.breakfast || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>নির্ধারণ করা হয়নি</span>}
                        </div>
                      </div>

                      <div style={{ padding: '8px 10px', background: 'var(--bg-secondary, #f8fafc)', borderRadius: '8px', borderLeft: '3px solid #ea580c' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                          <Sun size={13} style={{ color: '#ea580c' }} /> দুপুরের খাবার
                        </div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)', marginTop: '2px' }}>
                          {r.lunch || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>নির্ধারণ করা হয়নি</span>}
                        </div>
                      </div>

                      <div style={{ padding: '8px 10px', background: 'var(--bg-secondary, #f8fafc)', borderRadius: '8px', borderLeft: '3px solid #ca8a04' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                          <Sunset size={13} style={{ color: '#ca8a04' }} /> বিকালের নাস্তা
                        </div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)', marginTop: '2px' }}>
                          {r.snacks || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>নির্ধারণ করা হয়নি</span>}
                        </div>
                      </div>

                      <div style={{ padding: '8px 10px', background: 'var(--bg-secondary, #f8fafc)', borderRadius: '8px', borderLeft: '3px solid #6366f1' }}>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600 }}>
                          <Moon size={13} style={{ color: '#6366f1' }} /> রাতের খাবার
                        </div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-primary)', marginTop: '2px' }}>
                          {r.dinner || <span style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>নির্ধারণ করা হয়নি</span>}
                        </div>
                      </div>

                      {r.specialNote && (
                        <div style={{ fontSize: '0.78rem', color: '#92400e', background: '#fef3c7', padding: '6px 10px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Info size={12} /> <span>{r.specialNote}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
