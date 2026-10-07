import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, Printer, ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';
import PrintSignatureRoleSelector from '../../components/common/PrintSignatureRoleSelector';
import { getMadrasahPrintStyles } from '../../utils/madrasahPrintUtils';

const DEFAULT_MONTH_ORDER = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'
];

export default function PublicCalendarPage() {
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [orientation, setOrientation] = useState('portrait');
  const [selectedRoles, setSelectedRoles] = useState(['প্রতিষ্ঠান প্রধান', 'শ্রেণী শিক্ষক']);

  useEffect(() => {
    fetchCalendarData();
  }, []);

  const fetchCalendarData = async () => {
    try {
      setLoading(true);
      const res = await api.get('/academics/public/calendar');
      if (res.data?.success && res.data.data?.events && res.data.data.events.length > 0) {
        setCalendarEvents(res.data.data.events);
      } else {
        const saved = localStorage.getItem('calendar_data');
        if (saved) {
          setCalendarEvents(JSON.parse(saved));
        } else {
          setCalendarEvents([
            { month: 'জানুয়ারি', events: ['০১ - নতুন শিক্ষাবর্ষ শুরু', '১৫ - বার্ষিক ভর্তি কার্যক্রম সম্পন্ন'] },
            { month: 'ফেব্রুয়ারি', events: ['২১ - আন্তর্জাতিক মাতৃভাষা দিবস ছুটি'] },
            { month: 'মার্চ', events: ['২৬ - মহান স্বাধীনতা দিবস ছুটি'] },
            { month: 'এপ্রিল', events: ['০১ - ১ম সাময়িক পরীক্ষা আরম্ভ', '১৪ - বাংলা নববর্ষ ছুটি'] },
            { month: 'মে', events: ['০১ - আন্তর্জাতিক মে দিবস ছুটি', '২৫ - গ্রীষ্মকালীন ছুটি'] },
            { month: 'জুন', events: ['পবিত্র ঈদুল আযহা ও অবকাশ'] },
            { month: 'জুলাই', events: ['১০ - ২য় সাময়িক পরীক্ষা আরম্ভ'] },
            { month: 'আগস্ট', events: ['১৫ - জাতীয় শোক দিবস'] },
            { month: 'সেপ্টেম্বর', events: ['১২ - সীরাতুন্নবী (সা.) প্রতিযোগিতা'] },
            { month: 'অক্টোবর', events: ['০৫ - ৩য় সাময়িক পরীক্ষা মূল্যায়ন'] },
            { month: 'নভেম্বর', events: ['১৫ - বার্ষিক ক্রীড়া ও সাংস্কৃতিক সপ্তাহ'] },
            { month: 'ডিসেম্বর', events: ['০১ - বার্ষিক পরীক্ষা আরম্ভ', '১৬ - মহান বিজয় দিবস', '৩১ - ফলাফল প্রকাশ'] },
          ]);
        }
      }
    } catch (err) {
      console.error('Error loading public calendar:', err);
      try {
        const saved = localStorage.getItem('calendar_data');
        if (saved) setCalendarEvents(JSON.parse(saved));
      } catch (_) {}
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Group events by month
  const sortedMonths = [...calendarEvents].sort((a, b) => {
    const idxA = DEFAULT_MONTH_ORDER.indexOf(a.month);
    const idxB = DEFAULT_MONTH_ORDER.indexOf(b.month);
    return (idxA !== -1 ? idxA : 99) - (idxB !== -1 ? idxB : 99);
  });

  return (
    <div className="public-calendar-page-root" style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', paddingBottom: '40px' }}>
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
          .public-calendar-page-root {
            min-height: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            background: #ffffff !important;
            background-color: #ffffff !important;
            display: flex !important;
            flex-direction: column !important;
          }
          .sheet-scroll-outer {
            overflow: visible !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .print-container {
            position: relative !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
            min-width: 100% !important;
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
          .calendar-grid {
            grid-template-columns: repeat(${orientation === 'landscape' ? 4 : 3}, 1fr) !important;
            gap: 10px !important;
            margin-top: 10px !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
          .calendar-card {
            page-break-inside: avoid !important;
            break-inside: avoid !important;
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
        .calendar-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
        }
        .calendar-card-header {
          background: #0f766e;
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .calendar-card-body {
          padding: 8px 12px;
          min-height: 70px;
        }
        .event-bullet {
          font-size: 12px;
          color: #334155;
          margin-bottom: 4px;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          line-height: 1.4;
        }
        .event-bullet::before {
          content: '•';
          color: #0f766e;
          font-weight: bold;
          font-size: 14px;
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
        @media screen and (max-width: 768px) {
          .sheet-scroll-outer {
            padding: 0 8px 20px;
          }
          .mobile-scroll-hint {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            background: #ccfbf1;
            color: #0f766e;
            border: 1px solid #99f6e4;
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
          }
          .calendar-grid {
            grid-template-columns: repeat(${orientation === 'landscape' ? 4 : 3}, 1fr) !important;
            gap: 12px !important;
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
      `}</style>

      {/* Top Navigation Bar (Hidden on print) */}
      <div className="no-print public-top-nav" style={{ background: '#0f766e', color: '#fff', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', flexWrap: 'wrap', gap: '10px' }}>
        <div className="public-top-nav-left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to={user ? "/dashboard" : "/"} style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', fontSize: '14px', background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
            <ArrowLeft size={16} /> {user ? 'ড্যাশবোর্ড' : 'হোমপেজ'}
          </Link>
          <span className="public-top-nav-title" style={{ fontSize: '18px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
            <CalendarIcon size={20} /> একাডেমিক ক্যালেন্ডার
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
                color: orientation === 'portrait' ? '#0f766e' : '#fff',
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
                color: orientation === 'landscape' ? '#0f766e' : '#fff',
                transition: 'all 0.15s ease'
              }}
            >
              🖼️ ল্যান্ডস্কেপ
            </button>
          </div>

          <Link to="/routine" style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', background: 'rgba(255,255,255,0.15)', padding: '6px 12px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <Clock size={15} /> ক্লাস রুটিন
          </Link>
          <button onClick={handlePrint} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#f59e0b', color: '#0f172a', border: 'none', padding: '7px 16px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontSize: '13px', whiteSpace: 'nowrap' }}>
            <Printer size={16} /> প্রিন্ট / PDF
          </button>
        </div>
      </div>

      {/* Signature Role Selector Controls (Hidden on print) */}
      {!(user?.userType === 'student' || user?.userType === 'guardian') && (
        <div className="no-print" style={{ maxWidth: orientation === 'portrait' ? '960px' : '1100px', margin: '12px auto 0', padding: '0 16px' }}>
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
            maxWidth: orientation === 'portrait' ? '960px' : '1100px',
            margin: '16px auto',
            background: '#fff',
            padding: orientation === 'landscape' ? '18px 22px' : '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0',
            minHeight: orientation === 'landscape' ? '700px' : '900px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
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
              documentTitle="বাৎসরিক একাডেমিক ক্যালেন্ডার ও কার্যক্রম"
              compact={orientation === 'landscape'}
              metaLeft={<span><strong>শিক্ষাবর্ষ:</strong> ২০২৬ ইং</span>}
              metaRight={<span><strong>প্রকাশনা:</strong> প্রাতিষ্ঠানিক সমন্বয় পর্ষদ</span>}
            />

            {loading ? (
              <div style={{ padding: '60px 0', textAlign: 'center', color: '#64748b' }}>
                <Loader2 className="animate-spin" size={32} style={{ margin: '0 auto 12px', color: '#0f766e' }} />
                <p>একাডেমিক ক্যালেন্ডার লোড হচ্ছে...</p>
              </div>
            ) : (
              <div className="calendar-grid" style={{ display: 'grid', gridTemplateColumns: orientation === 'landscape' ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }}>
                {sortedMonths.map((item, idx) => (
                  <div key={idx} className="calendar-card">
                    <div className="calendar-card-header">
                      <span>{item.month}</span>
                      <span style={{ fontSize: '11px', opacity: 0.9 }}>২০২৬</span>
                    </div>
                    <div className="calendar-card-body">
                      {item.events && item.events.length > 0 ? (
                        item.events.map((ev, evIdx) => (
                          <div key={evIdx} className="event-bullet">
                            <span>{ev}</span>
                          </div>
                        ))
                      ) : (
                        <div style={{ fontSize: '11px', color: '#94a3b8', fontStyle: 'italic', padding: '4px 0' }}>
                          নিয়মিত পাঠদান ও প্রাতিষ্ঠানিক কার্যক্রম
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Official Footer Signatures */}
          <div className="print-footer-wrapper" style={{ marginTop: 'auto', paddingTop: orientation === 'landscape' ? '14px' : '24px' }}>
            <PrintFooterSignatures roles={selectedRoles} style={{ paddingTop: '10px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
