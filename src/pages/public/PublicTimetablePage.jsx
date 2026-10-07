import React, { useState, useEffect } from 'react';
import { BookOpen, Clock, Printer, ArrowLeft, Calendar, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import { getMadrasahPrintStyles } from '../../utils/madrasahPrintUtils';

const UNCONFIGURED_EMPTY_PERIODS = [
  { period: 'পিরিয়ড ১', time: '০৮:০০ - ০৮:৪৫' },
  { period: 'পিরিয়ড ২', time: '০৮:৪৫ - ০৯:৩০' },
  { period: 'পিরিয়ড ৩', time: '০৯:৩০ - ১০:১৫' },
  { period: 'পিরিয়ড ৪', time: '১০:৪৫ - ১১:৩০' },
  { period: 'পিরিয়ড ৫', time: '১১:৩০ - ১২:১৫' },
];

export default function PublicTimetablePage() {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [classes, setClasses] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [timetable, setTimetable] = useState({});
  const [orientation, setOrientation] = useState('landscape');
  const [selectedRoles, setSelectedRoles] = useState(DEFAULT_SIGNATURE_ROLES);

  useEffect(() => {
    fetchTimetableData();
  }, []);

  const fetchTimetableData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/academics/public/timetable');
      if (res.data?.success) {
        const clsList = res.data.data.classes || [];
        setClasses(clsList);
        
        let fetchedTimetable = res.data.data.timetable || {};
        if (!fetchedTimetable || Object.keys(fetchedTimetable).length === 0) {
          try {
            const saved = localStorage.getItem('timetable_data');
            if (saved) fetchedTimetable = JSON.parse(saved);
          } catch (_) {}
        }
        setTimetable(fetchedTimetable);

        if (clsList.length > 0) {
          // Pre-select first class that actually has scheduled slots, else first class
          const classWithSlots = clsList.find(c => {
            const list = fetchedTimetable[c._id] || fetchedTimetable[String(c._id)] || fetchedTimetable[c.name];
            return Array.isArray(list) && list.length > 0;
          });
          setSelectedClassId(classWithSlots ? classWithSlots._id : clsList[0]._id);
        }
      }
    } catch (err) {
      console.error('Error loading public timetable:', err);
      // Fallback: load classes and local timetable
      let savedTimetable = {};
      try {
        const saved = localStorage.getItem('timetable_data');
        if (saved) savedTimetable = JSON.parse(saved);
      } catch (_) {}
      setTimetable(savedTimetable);

      try {
        const classRes = await api.get('/students/classes');
        if (classRes.data?.success) {
          const clsList = classRes.data.data.classes || [];
          setClasses(clsList);
          if (clsList.length > 0) {
            const classWithSlots = clsList.find(c => {
              const list = savedTimetable[c._id] || savedTimetable[String(c._id)] || savedTimetable[c.name];
              return Array.isArray(list) && list.length > 0;
            });
            setSelectedClassId(classWithSlots ? classWithSlots._id : clsList[0]._id);
          }
        }
      } catch (_) {}
    } finally {
      setLoading(false);
    }
  };

  const currentClassObj = classes.find(c => String(c._id) === String(selectedClassId));
  const currentClassName = currentClassObj ? currentClassObj.name : 'সকল শ্রেণি';
  const currentSchedule = (selectedClassId && (
    timetable[selectedClassId] ||
    timetable[String(selectedClassId)] ||
    (currentClassObj ? timetable[currentClassObj.name] : null)
  )) || [];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="public-routine-page-root" style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', paddingBottom: '40px' }}>
      {/* Inject print styles */}
      <style dangerouslySetInnerHTML={{ __html: getMadrasahPrintStyles(orientation, { wrap: false }) }} />
      <style>{`
        @page {
          size: A4 ${orientation};
          margin: 6mm 10mm !important;
        }
        @media print {
          .no-print { display: none !important; }
          html, body, #root {
            background: #ffffff !important;
            background-color: #ffffff !important;
            margin: 0 !important;
            padding: 0 !important;
            height: 100% !important;
            min-height: 100% !important;
            overflow: visible !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .public-routine-page-root {
            min-height: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .print-container {
            position: relative !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            min-height: ${orientation === 'landscape' ? '196.5mm' : '283.5mm'} !important;
            height: ${orientation === 'landscape' ? '196.5mm' : '283.5mm'} !important;
            max-height: ${orientation === 'landscape' ? '196.5mm' : '283.5mm'} !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            box-sizing: border-box !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            overflow: hidden !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .print-watermark {
            position: absolute !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: ${orientation === 'landscape' ? '360px' : '420px'} !important;
            height: ${orientation === 'landscape' ? '360px' : '420px'} !important;
            max-width: 80% !important;
            max-height: 80% !important;
            opacity: 0.085 !important;
            z-index: 0 !important;
            pointer-events: none !important;
            display: block !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-top-section {
            position: relative !important;
            z-index: 1 !important;
            flex: 1 0 auto !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .timetable-table {
            width: 100% !important;
            margin-top: ${orientation === 'landscape' ? '8px' : '12px'} !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            background: transparent !important;
          }
          .timetable-table tr {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .timetable-table th, .timetable-table td {
            padding: ${orientation === 'landscape' ? '4.5px 6px' : '6.5px 8px'} !important;
            font-size: ${orientation === 'landscape' ? '11px' : '12.5px'} !important;
            line-height: 1.25 !important;
          }
          .break-row td {
            padding: ${orientation === 'landscape' ? '4px 6px' : '6px'} !important;
            font-size: ${orientation === 'landscape' ? '11.5px' : '12.5px'} !important;
          }
          .print-footer-wrapper {
            position: relative !important;
            z-index: 2 !important;
            margin-top: auto !important;
            padding-top: 10px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .print-footer-signatures-wrap {
            padding-top: 10px !important;
            margin-top: 0 !important;
          }
        }
        .timetable-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
        }
        .timetable-table th, .timetable-table td {
          border: 1px solid #cbd5e1;
          padding: 8px 10px;
          font-size: 13px;
          text-align: center;
        }
        .timetable-table th {
          background-color: #047857;
          color: #fff;
          font-weight: 700;
        }
        .timetable-table tr:nth-child(even) {
          background-color: #f8fafc;
        }
        .break-row {
          background-color: #fef3c7 !important;
          color: #92400e;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .print-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 380px;
          height: 380px;
          max-width: 80%;
          max-height: 80%;
          opacity: 0.065;
          z-index: 0;
          pointer-events: none;
          user-select: none;
          object-fit: contain;
        }
        .print-top-section {
          position: relative;
          z-index: 1;
        }
        .print-footer-wrapper {
          position: relative;
          z-index: 1;
        }
        .sheet-scroll-outer {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          padding: 0 16px 24px;
          box-sizing: border-box;
        }
        .mobile-scroll-hint {
          display: none;
        }
        .timetable-scroll-wrapper {
          width: 100%;
          overflow-x: visible;
          margin-top: 12px;
          padding-bottom: 6px;
        }
        @media screen and (max-width: 768px) {
          .sheet-scroll-outer {
            padding: 0 8px 20px;
          }
          .mobile-scroll-hint {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            background: #ecfdf5;
            color: #047857;
            border: 1px solid #a7f3d0;
            border-radius: 9999px;
            padding: 5px 14px;
            font-size: 12px;
            font-weight: 600;
            margin: 8px auto;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          }
          .print-container {
            min-width: ${orientation === 'landscape' ? '880px' : '700px'} !important;
            margin: 8px auto !important;
            padding: 16px !important;
            border-radius: 8px !important;
            overflow: visible !important;
          }
          .timetable-table {
            min-width: 100%;
          }
          .timetable-scroll-wrapper {
            margin-top: 8px;
            padding-bottom: 0;
            box-shadow: none;
            overflow-x: visible;
          }
        }
        @media screen and (max-width: 640px) {
          .public-top-nav {
            padding: 10px 12px !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 8px !important;
          }
          .public-top-nav-left {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
          }
          .public-top-nav-title {
            font-size: 15px !important;
          }
          .public-top-nav-right {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            width: 100% !important;
            gap: 6px !important;
          }
          .public-top-nav-right button, .public-top-nav-right a {
            font-size: 11.5px !important;
            padding: 5px 8px !important;
          }
        }
        @media print {
          .sheet-scroll-outer {
            overflow: visible !important;
            padding: 0 !important;
            width: 100% !important;
          }
          .print-container {
            min-width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .timetable-scroll-wrapper {
            overflow: visible !important;
            margin-top: 0 !important;
            padding-bottom: 0 !important;
          }
        }
      `}</style>

      {/* Top Navigation Bar (Hidden on print) */}
      <div className="no-print public-top-nav" style={{ background: '#065f46', color: '#fff', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flexWrap: 'wrap', gap: '10px' }}>
        <div className="public-top-nav-left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to={user ? "/dashboard" : "/"} style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '14px', background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
            <ArrowLeft size={16} /> {user ? 'ড্যাশবোর্ড' : 'হোমপেজ'}
          </Link>
          <span className="public-top-nav-title" style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
            <Clock size={20} /> উন্মুক্ত ক্লাস রুটিন
          </span>
        </div>
        <div className="public-top-nav-right" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Orientation Toggle Buttons */}
          <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.25)', padding: '3px', borderRadius: '6px', gap: '3px' }}>
            <button
              type="button"
              onClick={() => setOrientation('portrait')}
              style={{
                padding: '4px 10px',
                borderRadius: '4px',
                border: 'none',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                background: orientation === 'portrait' ? '#fff' : 'transparent',
                color: orientation === 'portrait' ? '#065f46' : '#fff',
                transition: 'all 0.15s ease'
              }}
            >
              📄 পোর্ট্রেট
            </button>
            <button
              type="button"
              onClick={() => setOrientation('landscape')}
              style={{
                padding: '4px 10px',
                borderRadius: '4px',
                border: 'none',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                background: orientation === 'landscape' ? '#fff' : 'transparent',
                color: orientation === 'landscape' ? '#065f46' : '#fff',
                transition: 'all 0.15s ease'
              }}
            >
              🖼️ ল্যান্ডস্কেপ
            </button>
          </div>

          <Link to="/calendar" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <Calendar size={15} /> একাডেমিক ক্যালেন্ডার
          </Link>
          <button onClick={handlePrint} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f59e0b', color: '#0f172a', border: 'none', padding: '7px 16px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontSize: '13px', whiteSpace: 'nowrap' }}>
            <Printer size={16} /> প্রিন্ট / PDF
          </button>
        </div>
      </div>

      {/* Class Selector Bar (Hidden on print) */}
      <div className="no-print" style={{ maxWidth: orientation === 'portrait' ? '860px' : '1100px', margin: '20px auto 0', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
        <label style={{ fontWeight: 600, fontSize: '14px', color: '#334155' }}>শ্রেণি নির্বাচন করুন:</label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {classes.map(c => (
            <button
              key={c._id}
              onClick={() => setSelectedClassId(c._id)}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                border: '1.5px solid',
                borderColor: selectedClassId === c._id ? '#059669' : '#cbd5e1',
                background: selectedClassId === c._id ? '#059669' : '#fff',
                color: selectedClassId === c._id ? '#fff' : '#334155',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Signature Role Selector Controls (Hidden on print) */}
      {!(user?.userType === 'student' || user?.userType === 'guardian') && (
        <div className="no-print" style={{ maxWidth: orientation === 'portrait' ? '860px' : '1100px', margin: '12px auto 0', padding: '0 16px' }}>
          <PrintSignatureRoleSelector
            selectedRoles={selectedRoles}
            onChange={setSelectedRoles}
          />
        </div>
      )}

      {/* Printable Sheet Scroll Outer */}
      <div className="sheet-scroll-outer">
        <div style={{ textAlign: 'center' }}>
          <div className="mobile-scroll-hint no-print">
            👈 সম্পূর্ণ পৃষ্ঠা দেখতে ডানে-বামে স্ক্রোল করুন 👉
          </div>
        </div>

        {/* Printable Sheet Wrapper */}
        <div
          className="print-container"
          style={{
            maxWidth: orientation === 'portrait' ? '860px' : '1100px',
            margin: '16px auto',
            background: '#fff',
            padding: orientation === 'landscape' ? '18px 22px' : '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'visible'
          }}
        >
          {/* Background Watermark for Print & Screen */}
          <img
            src="/images/madrasah_logo.png"
            className="print-watermark"
            alt="ওয়াটারমার্ক"
            onError={(e) => { e.currentTarget.src = '/madrasah_logo.png'; }}
          />

        <div className="print-top-section">
          {/* Official Letterhead */}
          <MadrasahLetterhead
            documentTitle="দৈনিক ক্লাস রুটিন ও সময়সূচী"
            compact={orientation === 'landscape'}
            metaLeft={<span><strong>শ্রেণি:</strong> {currentClassName}</span>}
            metaRight={<span><strong>শিক্ষাবর্ষ:</strong> ২০২৬ ইং</span>}
          />

          {loading ? (
            <div style={{ padding: '60px 0', textAlign: 'center', color: '#64748b' }}>
              <Loader2 className="animate-spin" size={32} style={{ margin: '0 auto 12px', color: '#059669' }} />
              <p>ক্লাস রুটিন লোড হচ্ছে...</p>
            </div>
          ) : (
            <div className="timetable-scroll-wrapper">
              <table className="timetable-table">
                <thead>
                  <tr>
                    <th style={{ width: '130px' }}>সময় ও পিরিয়ড</th>
                    <th>শনিবার</th>
                    <th>রবিবার</th>
                    <th>সোমবার</th>
                    <th>মঙ্গলবার</th>
                    <th>বুধবার</th>
                    <th>বৃহস্পতিবার</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSchedule.length === 0 ? (
                    UNCONFIGURED_EMPTY_PERIODS.map((slot, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 700, color: '#047857' }}>
                          <div>{slot.period}</div>
                          <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{slot.time}</div>
                        </td>
                        <td style={{ color: '#94a3b8' }}>-</td>
                        <td style={{ color: '#94a3b8' }}>-</td>
                        <td style={{ color: '#94a3b8' }}>-</td>
                        <td style={{ color: '#94a3b8' }}>-</td>
                        <td style={{ color: '#94a3b8' }}>-</td>
                        <td style={{ color: '#94a3b8' }}>-</td>
                      </tr>
                    ))
                  ) : (
                    currentSchedule.map((row, idx) => {
                      if (row.isBreak) {
                        return (
                          <tr key={idx} className="break-row">
                            <td style={{ fontWeight: 700 }}>{row.time}</td>
                            <td colSpan={6} style={{ textAlign: 'center', padding: '6px', fontSize: '13px' }}>
                              ☕ {row.label || 'বিরতি ও নাস্তা'}
                            </td>
                          </tr>
                        );
                      }

                      const renderCell = (cell) => {
                        if (!cell) return <span style={{ color: '#94a3b8' }}>-</span>;
                        if (typeof cell === 'string') {
                          const trimmed = cell.trim();
                          return (trimmed && trimmed !== '-') ? trimmed : <span style={{ color: '#94a3b8' }}>-</span>;
                        }
                        if (!cell.subject || !cell.subject.trim() || cell.subject.trim() === '-') {
                          return <span style={{ color: '#94a3b8' }}>-</span>;
                        }
                        return (
                          <div>
                            <div style={{ fontWeight: 700, color: '#0f172a' }}>{cell.subject}</div>
                            {cell.teacher && cell.teacher.trim() && cell.teacher.trim() !== '-' && (
                              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>({cell.teacher})</div>
                            )}
                          </div>
                        );
                      };

                      return (
                        <tr key={idx}>
                          <td style={{ fontWeight: 700, color: '#047857' }}>
                            <div>পিরিয়ড {idx + 1}</div>
                            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500 }}>{row.time}</div>
                          </td>
                          <td>{renderCell(row.sat)}</td>
                          <td>{renderCell(row.sun)}</td>
                          <td>{renderCell(row.mon)}</td>
                          <td>{renderCell(row.tue)}</td>
                          <td>{renderCell(row.wed)}</td>
                          <td>{renderCell(row.thu)}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Official Footer Signatures */}
        <div className="print-footer-wrapper" style={{ marginTop: 'auto', paddingTop: orientation === 'landscape' ? '14px' : '20px' }}>
          <PrintFooterSignatures roles={selectedRoles} style={{ paddingTop: '10px' }} />
        </div>
      </div>
    </div>
  </div>
);
}
