import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Printer, Save, Search, FileText, Eye, EyeOff, CheckCircle, AlertCircle, User } from 'lucide-react';
import api from '../../api/axios';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import { matchesSearchQuery } from '../../utils/searchUtils';
import WholeWordToggle from '../../components/common/WholeWordToggle';
import './TransferCertificatePage.css';

const BN = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
const bn = (n) => String(n ?? '').replace(/\d/g, (d) => BN[d]);

const MONTHS_BN = [
  'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন',
  'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর',
];

const CLASS_ORDER = [
  'প্লে', 'নার্সারী', 'প্রথম', 'দ্বিতীয়', 'তৃতীয়',
  'চতুর্থ', 'পঞ্চম', 'ষষ্ঠ', 'সপ্তম', 'অষ্টম', 'নবম', 'দশম',
];

const REASONS_LIST = [
  'ক) অভিভাবকের অভিপ্রায়।',
  'খ) বাসস্থান পরিবর্তন।',
  'গ) শারীরিক অসুস্থতা।',
  'ঘ) অন্যান্য।',
];

function fmtDate(s) {
  if (!s) return '';
  const d = new Date(s);
  if (isNaN(d)) return '';
  return `${bn(String(d.getDate()).padStart(2, '0'))} ${MONTHS_BN[d.getMonth()]}, ${bn(d.getFullYear())}`;
}

function fmtShortDate(s) {
  if (!s) return '';
  const d = new Date(s);
  if (isNaN(d)) return '';
  return `${bn(String(d.getDate()).padStart(2, '0'))}/${bn(String(d.getMonth() + 1).padStart(2, '0'))}/${bn(d.getFullYear())}`;
}

function fmtDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  if (isNaN(d)) return '—';
  const dd = bn(String(d.getDate()).padStart(2, '0'));
  const mm = bn(String(d.getMonth() + 1).padStart(2, '0'));
  const yy = bn(d.getFullYear());
  let h = d.getHours();
  const min = bn(String(d.getMinutes()).padStart(2, '0'));
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${dd}/${mm}/${yy}, ${bn(String(h).padStart(2, '0'))}:${min} ${ampm}`;
}

function calcAge(dobStr) {
  if (!dobStr) return { y: '', m: '', d: '' };
  const dob = new Date(dobStr);
  const now = new Date();
  if (isNaN(dob)) return { y: '', m: '', d: '' };
  let y = now.getFullYear() - dob.getFullYear();
  let m = now.getMonth() - dob.getMonth();
  let d = now.getDate() - dob.getDate();
  if (d < 0) {
    m -= 1;
    d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (m < 0) {
    y -= 1;
    m += 12;
  }
  return { y: bn(y), m: bn(m), d: bn(d) };
}

function normBn(s) {
  return (s || '')
    .normalize('NFC')
    .replace(/\u09AF\u09BC/g, 'য়')
    .replace(/\u09A1\u09BC/g, 'ড়')
    .replace(/\u09A2\u09BC/g, 'ঢ়');
}

function parseAddress(raw) {
  const text = normBn(raw).replace(/।/g, '').trim();
  if (!text) return { village: '', post: '', upazila: '', district: '', division: '' };

  let post = '';
  let upazila = '';
  let district = '';
  let division = '';

  const divMatch = text.match(/([^\s,]+)\s*বিভাগ/);
  if (divMatch) division = divMatch[1].trim();

  const distMatch = text.match(/(?:^|[\s,])জেলা\s*[:ঃ,]+\s*([^,\n]+)/);
  if (distMatch) district = distMatch[1].replace(/\s*(?:দেশ|বাংলাদেশ|বিভাগ).*$/, '').trim();

  const upaMatch = text.match(/(?:উপজেলা|থানা)\s*[:ঃ,]+\s*([^,\n]+)/);
  if (upaMatch) upazila = upaMatch[1].replace(/\s*জেলা.*$/, '').trim();

  const postMatch = text.match(/(?:ডাকঘর|ডাক|পোঃ|পো)\s*[:ঃ,]+\s*([^,\n]+)/);
  if (postMatch) post = postMatch[1].replace(/\s*(?:উপজেলা|থানা|ওয়ার্ড|ওয়ার্ড|জেলা).*$/, '').trim();

  const knownDists = [
    ['চাঁপাইনবাবগঞ্জ', ['চাঁপাইনবাবগঞ্জ', 'চাঁপাই নবাবগঞ্জ']],
    ['রাজশাহী', ['রাজশাহী']],
    ['নাটোর', ['নাটোর']],
    ['মেহেরপুর', ['মেহেরপুর']],
    ['কুড়িগ্রাম', ['কুড়িগ্রাম']],
    ['বগুড়া', ['বগুড়া']],
    ['নওগাঁ', ['নওগাঁ']],
    ['কুষ্টিয়া', ['কুষ্টিয়া']],
    ['টাঙ্গাইল', ['টাঙ্গাইল']],
    ['গাইবান্ধা', ['গাইবান্ধা']],
    ['রংপুর', ['রংপুর']],
    ['চাঁদপুর', ['চাঁদপুর']],
  ];
  if (!district) {
    for (const [canon, variants] of knownDists) {
      if (variants.some((v) => text.includes(v))) {
        district = canon;
        break;
      }
    }
  }

  const knownUpas = [
    'চাঁপাইনবাবগঞ্জ সদর', 'শিবগঞ্জ', 'গোমস্তাপুর', 'নাচোল', 'ভোলাহাট',
    'গোদাগাড়ী', 'লালপুর', 'গাংনী', 'চিলমারী', 'নিয়ামতপুর', 'মিরপুর',
    'নলডাঙ্গা', 'দুপচাঁচিয়া', 'পলাশবাড়ী', 'বদরগঞ্জ', 'বাঘা', 'দুর্গাপুর',
  ];
  if (!upazila) {
    for (const u of knownUpas) {
      if (text.includes(u)) {
        upazila = u;
        break;
      }
    }
    if (!upazila && text.includes('পৌরসভা') && district === 'চাঁপাইনবাবগঞ্জ') {
      upazila = 'চাঁপাইনবাবগঞ্জ সদর';
    }
  }

  if (!post) {
    const pinMatch = text.match(/([^\s,]+(?:\s+[^\s,]+)?\s*-\s*[০-৯0-9]{4})/);
    if (pinMatch) post = pinMatch[1].trim();
  }

  const parts = text.split(',').map((p) => p.trim()).filter(Boolean);
  let village = parts[0] || text;
  if (/^(?:গ্রাম|বাসা\s*নম্বর|হোল্ডিং)/.test(village) && parts.length > 1 && !/:|ঃ/.test(village)) {
    village = parts[1];
  }
  village = village.replace(/^(?:গ্রাম|মহল্লা)\s*[:ঃ,]?\s*/, '').trim();
  if (parts.length === 1 && district && village !== district) {
    village = village.replace(new RegExp(`[\\s,-]*${district}$`), '').trim();
  }

  return { village, post, upazila, district, division };
}

function nextClass(c) {
  const normalized = (c || '').trim().replace('দ্বিতীয়', 'দ্বিতীয়').replace('তৃতীয়', 'তৃতীয়');
  const i = CLASS_ORDER.indexOf(normalized);
  return i >= 0 && i < CLASS_ORDER.length - 1 ? CLASS_ORDER[i + 1] : '';
}

function formatSerial(num) {
  return bn(String(num || 1).padStart(3, '0'));
}

export default function TransferCertificatePage() {
  const [searchParams] = useSearchParams();
  const initialStudentParam = searchParams.get('studentId');

  const [students, setStudents] = useState([]);
  const [nextSerial, setNextSerial] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const fetchTCStudents = async (silent = false) => {
    try {
      if (!silent) setIsLoading(true);
      setIsError(false);
      const res = await api.get('/transfer-certificates/students');
      setStudents(res.data?.data?.students || []);
      setNextSerial(res.data?.data?.nextSerial || 1);
    } catch (err) {
      console.error('Failed to fetch TC students:', err);
      setIsError(true);
    } finally {
      if (!silent) setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTCStudents();
  }, []);

  const [classFilter, setClassFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [wholeWords, setWholeWords] = useState(true);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [showCert, setShowCert] = useState(false);
  const [useUniversalHeader, setUseUniversalHeader] = useState(true);

  const [resultStatus, setResultStatus] = useState('উত্তীর্ণ হইয়াছে');
  const [selectedReasons, setSelectedReasons] = useState(['ক) অভিভাবকের অভিপ্রায়।']);
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (type, message) => {
    setToastMsg({ type, message });
    setTimeout(() => setToastMsg(null), 3200);
  };

  const certRef = useRef(null);
  const certSectionRef = useRef(null);

  const classOptions = useMemo(() => {
    const cls = [...new Set(students.map((s) => (s.className || '').trim()).filter(Boolean))];
    return cls.sort((a, b) => {
      const ai = CLASS_ORDER.indexOf(a);
      const bi = CLASS_ORDER.indexOf(b);
      return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
    });
  }, [students]);

  const filteredStudents = useMemo(() => {
    return students.filter((s) => {
      if (classFilter && (s.className || '').trim() !== classFilter) return false;
      return matchesSearchQuery(
        [s.name, s.studentId, s.rollNumber, s.fatherName],
        searchQuery,
        wholeWords
      );
    });
  }, [students, classFilter, searchQuery, wholeWords]);

  const selectedStudent = useMemo(
    () => students.find((s) => s._id === selectedStudentId) || null,
    [students, selectedStudentId]
  );

  // Auto-open if ?studentId= is provided
  useEffect(() => {
    if (initialStudentParam && students.length > 0 && !selectedStudentId) {
      const found = students.find(
        (s) => s._id === initialStudentParam || s.studentId === initialStudentParam
      );
      if (found) {
        handleGenerateCert(found);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialStudentParam, students]);

  // Populate editable certificate fields whenever selectedStudent or showCert changes
  const certFields = useMemo(() => {
    if (!selectedStudent) return null;
    const s = selectedStudent;
    const tc = s.tc;
    const saved = tc?.customData || {};
    const now = new Date();
    const issueDt = tc?.issueDate ? new Date(tc.issueDate) : now;
    const leaveDt = tc?.leaveDate ? new Date(tc.leaveDate) : now;
    const dd = bn(String(issueDt.getDate()).padStart(2, '0'));
    const mm = bn(String(issueDt.getMonth() + 1).padStart(2, '0'));
    const yy = bn(issueDt.getFullYear());
    const hasStructuredAddr = Boolean(s.postOffice || s.upazila || s.district || s.division);
    const addr = parseAddress(s.village);
    const age = calcAge(s.dateOfBirth);
    const serialNum = tc?.serialNumber || nextSerial;

    return {
      serialNum,
      serialStr: saved.serialStr || formatSerial(serialNum),
      cfDate: saved.cfDate || `${dd}/${mm}/${yy}`,
      dd: saved.dd || dd,
      mm: saved.mm || mm,
      yy: saved.yy || yy,
      name: saved.name ?? (s.name || ''),
      fatherName: saved.fatherName ?? (s.fatherName || ''),
      motherName: saved.motherName ?? (s.motherName || ''),
      nationalId: saved.nationalId ?? (s.nationalId || ''),
      village: saved.village ?? (hasStructuredAddr ? (s.village || '') : (addr.village || s.village || '')),
      post: saved.post ?? (s.postOffice || addr.post),
      upazila: saved.upazila ?? (s.upazila || addr.upazila),
      district: saved.district ?? (s.district || addr.district),
      division: saved.division ?? (s.division || addr.division),
      genderLabel: saved.genderLabel ?? (s.gender === 'female' ? 'ছাত্রী' : 'ছাত্র'),
      dobLong: saved.dobLong ?? fmtDate(s.dateOfBirth),
      dobShort: saved.dobShort ?? fmtShortDate(s.dateOfBirth),
      leaveDate: saved.leaveDate ?? fmtDate(leaveDt),
      ageY: saved.ageY ?? age.y,
      ageM: saved.ageM ?? age.m,
      ageD: saved.ageD ?? age.d,
      className: saved.className ?? (s.className || ''),
      rollNumber: saved.rollNumber ?? (s.rollNumber ? bn(s.rollNumber) : ''),
      examClass: saved.examClass ?? (s.className || ''),
      promotedClass: saved.promotedClass ?? (tc?.promotedClass || nextClass(s.className)),
      dueYr: saved.dueYr ?? (tc?.duePaidYear || bn(String(now.getFullYear()))),
      regNo: saved.regNo ?? (s.studentId || ''),
      sigTitle: saved.sigTitle ?? 'অধ্যক্ষ / প্রধান শিক্ষক',
      sigInst: saved.sigInst ?? 'আন-নুর-ইসলামিক একাডেমি',
    };
  }, [selectedStudent, nextSerial]);

  const handleGenerateCert = (student) => {
    setSelectedStudentId(student._id);
    setResultStatus(student.tc?.resultStatus || 'উত্তীর্ণ হইয়াছে');
    setSelectedReasons(
      Array.isArray(student.tc?.reasons) && student.tc.reasons.length > 0
        ? student.tc.reasons
        : ['ক) অভিভাবকের অভিপ্রায়।']
    );
    setShowCert(true);
    setTimeout(() => {
      certSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const handleToggleReason = (reasonText) => {
    setSelectedReasons((prev) =>
      prev.includes(reasonText) ? prev.filter((r) => r !== reasonText) : [...prev, reasonText]
    );
  };

  const handleToggleTaken = async (student, isChecked) => {
    try {
      setIsToggling(true);
      const res = await api.patch(`/transfer-certificates/${student._id}/toggle-taken`, {
        isTaken: isChecked,
      });
      await fetchTCStudents(true);
      showToast('success', res?.data?.message || 'অবস্থা আপডেট হয়েছে');
    } catch (err) {
      showToast('error', err?.response?.data?.message || 'আপডেট করতে সমস্যা হয়েছে');
    } finally {
      setIsToggling(false);
    }
  };

  const collectCustomDataFromDOM = () => {
    if (!certRef.current) return {};
    const getText = (id) => certRef.current.querySelector(`[data-field="${id}"]`)?.textContent?.trim() || '';
    return {
      serialStr: getText('cSerial'),
      cfDate: getText('cfDate'),
      dd: getText('cDay'),
      mm: getText('cMonth'),
      yy: getText('cYear'),
      name: getText('cName'),
      fatherName: getText('cFather'),
      motherName: getText('cMother'),
      nationalId: getText('cNID'),
      village: getText('cVillage'),
      post: getText('cPost'),
      upazila: getText('cUpazila'),
      district: getText('cDistrict'),
      division: getText('cDivision'),
      genderLabel: getText('cGender'),
      dobLong: getText('cDOB'),
      dobShort: getText('cfDOB'),
      leaveDate: getText('cLeaveDate'),
      ageY: getText('cAgeY'),
      ageM: getText('cAgeM'),
      ageD: getText('cAgeD'),
      className: getText('cClass'),
      rollNumber: getText('cfRoll'),
      examClass: getText('cExam'),
      promotedClass: getText('cPromo'),
      dueYr: getText('cDueYr'),
      regNo: getText('cRegNo'),
      sigTitle: getText('sigTitle'),
      sigInst: getText('sigInst'),
    };
  };

  const handleSaveCertificate = async (silent = false) => {
    if (!selectedStudent || !certFields) return;
    const customData = collectCustomDataFromDOM();
    try {
      setIsSaving(true);
      await api.post('/transfer-certificates', {
        studentId: selectedStudent._id,
        serialNumber: certFields.serialNum,
        resultStatus,
        promotedClass: customData.promotedClass || '',
        duePaidYear: customData.dueYr || '',
        reasons: selectedReasons,
        customData,
      });
      await fetchTCStudents(true);
      if (!silent) showToast('success', 'ছাড়পত্রের তথ্য ডাটাবেজে সংরক্ষিত হয়েছে');
    } catch (err) {
      if (!silent) showToast('error', err?.response?.data?.message || 'সংরক্ষণ করতে সমস্যা হয়েছে');
    } finally {
      setIsSaving(false);
    }
  };

  const handlePrint = async () => {
    await handleSaveCertificate(true);
    document.body.classList.add('printing-chadropatra');
    const cleanup = () => {
      document.body.classList.remove('printing-chadropatra');
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);
    setTimeout(() => window.print(), 80);
  };

  return (
    <div className="tc-page-root">
      {toastMsg && (
        <div className={`print-hidden tc-toast ${toastMsg.type}`}>
          {toastMsg.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          <span>{toastMsg.message}</span>
        </div>
      )}

      {/* Top Bar */}
      <div className="print-hidden tc-topbar">
        <div>
          <h1 className="tc-brand-title">
            <FileText size={20} />
            মাদরাসা ছাড়পত্র জেনারেটর
          </h1>
          <p className="tc-brand-sub">
            মেইন ডাটাবেজ থেকে যেকোনো শিক্ষার্থীর ছাড়পত্র তৈরি, এডিট ও প্রিন্ট করুন (গৃহীত হলে স্ট্যাটাস স্বয়ংক্রিয়ভাবে Transferred হবে)
          </p>
        </div>

        <div className="tc-actions">
          <button
            type="button"
            onClick={() => setUseUniversalHeader((v) => !v)}
            className="tc-btn tc-btn-outline"
          >
            {useUniversalHeader ? <Eye size={16} color="#059669" /> : <EyeOff size={16} color="#94a3b8" />}
            {useUniversalHeader ? 'ইউনিভার্সাল হেডার: চালু' : 'ইউনিভার্সাল হেডার: বন্ধ (ফাঁকা প্যাড)'}
          </button>

          <button
            type="button"
            disabled={!selectedStudent}
            onClick={() => selectedStudent && handleGenerateCert(selectedStudent)}
            className="tc-btn tc-btn-green"
          >
            📜 ছাড়পত্র তৈরি করুন
          </button>

          <button
            type="button"
            disabled={!showCert || !selectedStudent}
            onClick={handlePrint}
            className="tc-btn tc-btn-blue"
          >
            <Printer size={16} />
            প্রিন্ট করুন
          </button>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="print-hidden tc-controls-bar">
        <label htmlFor="tc-cls-filter">শ্রেণি:</label>
        <select
          id="tc-cls-filter"
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
          className="tc-select"
        >
          <option value="">সকল শ্রেণি</option>
          {classOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div className="tc-search-wrap">
          <Search size={15} className="tc-search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="নাম, আইডি, রোল বা পিতার নাম দিয়ে খুঁজুন..."
            className="tc-search-input"
          />
        </div>
        <WholeWordToggle checked={wholeWords} onChange={setWholeWords} />
      </div>

      {/* Student List Table */}
      <div className="print-hidden tc-table-panel">
        <div className="tc-table-header">
          <span>📋 শিক্ষার্থী তালিকা</span>
          <span className="tc-count-badge">{bn(filteredStudents.length)} জন</span>
        </div>

        <div className="tc-table-scroll">
          <table className="tc-table">
            <thead>
              <tr>
                <th>ছবি</th>
                <th>আইডি</th>
                <th>শিক্ষার্থীর নাম</th>
                <th>পিতার নাম</th>
                <th>শ্রেণি</th>
                <th>রোল</th>
                <th>অ্যাকশন</th>
                <th>গৃহীত অবস্থা</th>
                <th>গ্রহণের তারিখ ও সময়</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={9} style={{ textAlign: 'center', padding: '28px', color: '#94a3b8' }}>
                    শিক্ষার্থী তালিকা লোড হচ্ছে...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan={9} style={{ textAlign: 'center', padding: '28px', color: '#e11d48' }}>
                    তথ্য লোড করতে সমস্যা হয়েছে
                  </td>
                </tr>
              ) : filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={9} style={{ textAlign: 'center', padding: '28px', color: '#94a3b8' }}>
                    কোনো শিক্ষার্থী পাওয়া যায়নি
                  </td>
                </tr>
              ) : (
                filteredStudents.map((s) => {
                  const isTaken = Boolean(s.tc?.isTaken);
                  const isActiveRow = selectedStudentId === s._id;
                  return (
                    <tr
                      key={s._id}
                      onClick={() => setSelectedStudentId(s._id)}
                      className={isActiveRow ? 'active' : ''}
                    >
                      <td>
                        {s.photo ? (
                          <img
                            src={s.photo}
                            alt={s.name}
                            className="tc-avatar"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        ) : (
                          <span className="tc-avatar-fallback">
                            <User size={18} />
                          </span>
                        )}
                      </td>
                      <td><strong>{s.studentId}</strong></td>
                      <td style={{ fontWeight: 600 }}>
                        {s.name || '—'}
                        {s.status === 'transferred' && (
                          <span className="tc-transferred-pill">Transferred</span>
                        )}
                      </td>
                      <td>{s.fatherName || '—'}</td>
                      <td>{s.className || '—'}</td>
                      <td>{s.rollNumber ? bn(s.rollNumber) : '—'}</td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <button
                          type="button"
                          onClick={() => handleGenerateCert(s)}
                          className="tc-btn tc-btn-green tc-btn-sm"
                        >
                          📜 ছাড়পত্র তৈরি করুন
                        </button>
                      </td>
                      <td onClick={(e) => e.stopPropagation()}>
                        <label className={`tc-taken-label ${isTaken ? 'is-taken' : ''}`}>
                          <input
                            type="checkbox"
                            checked={isTaken}
                            disabled={isToggling}
                            onChange={(e) => handleToggleTaken(s, e.target.checked)}
                          />
                          <span>{isTaken ? 'গৃহীত' : 'নেওয়া হয়নি'}</span>
                        </label>
                      </td>
                      <td style={{ fontSize: '12px', color: '#64748b' }}>
                        {isTaken ? fmtDateTime(s.tc?.takenAt) : '—'}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Certificate Preview & Editor */}
      {showCert && selectedStudent && certFields && (
        <div ref={certSectionRef} className="tc-cert-outer">
          <div className="print-hidden tc-cert-toolbar">
            <span className="tc-cert-hint">
              💡 যেকোনো তথ্যে ক্লিক করে সরাসরি এডিট করতে পারবেন (সেভ বা প্রিন্ট করলে পরিবর্তন ডাটাবেজে সংরক্ষিত হবে)
            </span>
            <div className="tc-actions">
              <button
                type="button"
                onClick={() => handleSaveCertificate(false)}
                disabled={isSaving}
                className="tc-btn tc-btn-green tc-btn-sm"
              >
                <Save size={14} />
                তথ্য সেভ করুন
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="tc-btn tc-btn-blue tc-btn-sm"
              >
                <Printer size={14} />
                প্রিন্ট করুন (A4 Landscape)
              </button>
            </div>
          </div>

          <div
            key={`${selectedStudent._id}-${selectedStudent.tc?.updatedAt || 'new'}`}
            ref={certRef}
            className="tc-certificate-sheet"
          >
            {/* LEFT COUNTERFOIL (অফিস কপি / মুড়ি অংশ) */}
            <div className="tc-counterfoil">
              <div>
                <div className={`tc-custom-header-slot ${useUniversalHeader ? 'has-universal' : ''}`}>
                  {useUniversalHeader ? (
                    <div className="tc-cf-header-scale">
                      <div className="tc-cf-title-inst">
                        আন্-নূর ইসলামিক একাডেমি
                      </div>
                      <div className="tc-cf-title-sub">
                        শাহীবাগ (বটতলা হাট), চাঁপাইনবাবগঞ্জ সদর
                      </div>
                      <div className="tc-cf-title-sub">
                        মোবাইল: ০১৭১৩-৬৮৫৩৬২
                      </div>
                    </div>
                  ) : (
                    'কাস্টম হেডার এরিয়া (ওয়েবসাইট হেডিং)'
                  )}
                </div>
                <hr className="tc-header-divider" />

                <div className="tc-cf-meta-row">
                  <div className="tc-cf-fields tc-cf-meta-fields">
                    <div className="tc-cf-line">
                      <span className="lbl">সিরিয়াল নং-</span>
                      <span className="val" data-field="cfSerial" contentEditable suppressContentEditableWarning>
                        {certFields.serialStr}
                      </span>
                    </div>
                    <div className="tc-cf-line">
                      <span className="lbl">তারিখ :</span>
                      <span className="val" data-field="cfDate" contentEditable suppressContentEditableWarning>
                        {certFields.cfDate}
                      </span>
                    </div>
                  </div>
                  {selectedStudent.photo && (
                    <div className="tc-cf-photo-box">
                      <img src={selectedStudent.photo} alt={certFields.name} />
                    </div>
                  )}
                </div>

                <div className="tc-cf-title">ছাড়পত্র</div>

                <div className="tc-cf-fields">
                  <div className="tc-cf-line">
                    <span className="lbl">নাম :</span>
                    <span className="val" data-field="cfName" contentEditable suppressContentEditableWarning>
                      {certFields.name}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">পিতার নাম :</span>
                    <span className="val" data-field="cfFather" contentEditable suppressContentEditableWarning>
                      {certFields.fatherName}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">মাতার নাম :</span>
                    <span className="val" data-field="cfMother" contentEditable suppressContentEditableWarning>
                      {certFields.motherName}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">জন্ম তারিখ :</span>
                    <span className="val" data-field="cfDOB" contentEditable suppressContentEditableWarning>
                      {certFields.dobShort}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">শ্রেণি :</span>
                    <span className="val" data-field="cfClass" contentEditable suppressContentEditableWarning>
                      {certFields.className}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">রোল নং :</span>
                    <span className="val" data-field="cfRoll" contentEditable suppressContentEditableWarning>
                      {certFields.rollNumber}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">ডাকঘর:</span>
                    <span className="val" data-field="cfPost" contentEditable suppressContentEditableWarning>
                      {certFields.post}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">থানা/উপজেলা:</span>
                    <span className="val" data-field="cfUpazila" contentEditable suppressContentEditableWarning>
                      {certFields.upazila}
                    </span>
                  </div>
                  <div className="tc-cf-line">
                    <span className="lbl">জেলা:</span>
                    <span className="val" data-field="cfDistrict" contentEditable suppressContentEditableWarning>
                      {certFields.district}
                    </span>
                  </div>
                </div>
              </div>

              <div className="tc-cf-sig">গ্রহিতার স্বাক্ষর</div>
            </div>

            {/* VERTICAL PERFORATION DIVIDER */}
            <div className="tc-cut-divider">
              <span className="tc-scissor-icon">✂</span>
              <span className="tc-scissor-icon">✂</span>
              <span className="tc-scissor-icon">✂</span>
            </div>

            {/* RIGHT MAIN CERTIFICATE (শিক্ষার্থী কপি / মূল অংশ) */}
            <div className="tc-main-cert">
              <div className="tc-main-cert-inner">
                <div>
                  <div className={`tc-custom-header-slot tc-main-header-scale ${useUniversalHeader ? 'has-universal' : ''}`}>
                    {useUniversalHeader ? (
                      <MadrasahLetterhead compact showDivider={false} className="!min-w-0" />
                    ) : (
                      'কাস্টম হেডার সেকশন (আপনার ওয়েবসাইটের হেডিং এখানে যুক্ত করুন)'
                    )}
                  </div>
                  <hr className="tc-header-divider" />

                  <div className="tc-cert-meta">
                    <div className="tc-serial-wrap">
                      <span>সিরিয়াল নং-</span>
                      <div className="tc-serial-box" data-field="cSerial" contentEditable suppressContentEditableWarning>
                        {certFields.serialStr}
                      </div>
                    </div>
                    <div className="tc-date-wrap">
                      <span>তারিখ:</span>
                      <div className="tc-date-box" data-field="cDay" contentEditable suppressContentEditableWarning>
                        {certFields.dd}
                      </div>
                      <div className="tc-date-box" data-field="cMonth" contentEditable suppressContentEditableWarning>
                        {certFields.mm}
                      </div>
                      <div className="tc-date-box yr" data-field="cYear" contentEditable suppressContentEditableWarning>
                        {certFields.yy}
                      </div>
                    </div>
                  </div>

                  <div className="tc-cert-title-wrap">
                    <div className="tc-cert-title-main">ছাড়পত্র</div>
                  </div>

                  <div className="tc-cert-body">
                    <p>
                      এই মর্মে প্রত্যয়ন করা যাচ্ছে যে,{' '}
                      <span className="tc-fv wide" data-field="cName" contentEditable suppressContentEditableWarning>
                        {certFields.name}
                      </span>{' '}
                      (জন্ম নিবন্ধন / এনআইডি নং:{' '}
                      <span className="tc-fv" data-field="cNID" contentEditable suppressContentEditableWarning>
                        {certFields.nationalId}
                      </span>
                      ), <span className="tc-fl-bold">পিতা:</span>{' '}
                      <span className="tc-fv med" data-field="cFather" contentEditable suppressContentEditableWarning>
                        {certFields.fatherName}
                      </span>
                      , <span className="tc-fl-bold">মাতা:</span>{' '}
                      <span className="tc-fv med" data-field="cMother" contentEditable suppressContentEditableWarning>
                        {certFields.motherName}
                      </span>
                      , <span className="tc-fl-bold">গ্রাম:</span>{' '}
                      <span className="tc-fv med" data-field="cVillage" contentEditable suppressContentEditableWarning>
                        {certFields.village}
                      </span>
                      , <span className="tc-fl-bold">ডাকঘর:</span>{' '}
                      <span className="tc-fv" data-field="cPost" contentEditable suppressContentEditableWarning>
                        {certFields.post}
                      </span>
                      , <span className="tc-fl-bold">উপজেলা:</span>{' '}
                      <span className="tc-fv" data-field="cUpazila" contentEditable suppressContentEditableWarning>
                        {certFields.upazila}
                      </span>
                      , <span className="tc-fl-bold">জেলা:</span>{' '}
                      <span className="tc-fv" data-field="cDistrict" contentEditable suppressContentEditableWarning>
                        {certFields.district}
                      </span>
                      {certFields.division && (
                        <span>
                          , <span className="tc-fl-bold">বিভাগ:</span>{' '}
                          <span className="tc-fv" data-field="cDivision" contentEditable suppressContentEditableWarning>
                            {certFields.division}
                          </span>
                        </span>
                      )}{' '}
                      অত্র মাদরাসার একজন নিয়মিত{' '}
                      <span className="tc-fv sm" data-field="cGender" contentEditable suppressContentEditableWarning>
                        {certFields.genderLabel}
                      </span>{' '}
                      ছিল।
                    </p>
                    <p>
                      ভর্তি বহির বিবরণ অনুযায়ী তাহার জন্ম তারিখ{' '}
                      <span className="tc-fv" data-field="cDOB" contentEditable suppressContentEditableWarning>
                        {certFields.dobLong}
                      </span>
                      । সে{' '}
                      <span className="tc-fv" data-field="cLeaveDate" contentEditable suppressContentEditableWarning>
                        {certFields.leaveDate}
                      </span>{' '}
                      তারিখে অত্র মাদরাসা পরিত্যাগ করিয়াছে; উক্ত তারিখে তাহার বয়স ছিল{' '}
                      <span className="tc-fv sm" data-field="cAgeY" contentEditable suppressContentEditableWarning>
                        {certFields.ageY}
                      </span>{' '}
                      বৎসর{' '}
                      <span className="tc-fv sm" data-field="cAgeM" contentEditable suppressContentEditableWarning>
                        {certFields.ageM}
                      </span>{' '}
                      মাস{' '}
                      <span className="tc-fv sm" data-field="cAgeD" contentEditable suppressContentEditableWarning>
                        {certFields.ageD}
                      </span>{' '}
                      দিন মাত্র।
                    </p>
                    <p>
                      সে{' '}
                      <span className="tc-fv" data-field="cClass" contentEditable suppressContentEditableWarning>
                        {certFields.className}
                      </span>{' '}
                      শ্রেণীতে অধ্যয়ন করিত এবং বিগত বার্ষিক পরীক্ষায়{' '}
                      <span className="tc-fv" data-field="cExam" contentEditable suppressContentEditableWarning>
                        {certFields.examClass}
                      </span>{' '}
                      শ্রেণী হইতে{' '}
                      <span className="tc-fv" data-field="cPromo" contentEditable suppressContentEditableWarning>
                        {certFields.promotedClass}
                      </span>{' '}
                      শ্রেণীতে{' '}
                      <span
                        className="tc-fv-toggle"
                        title="পরিবর্তন করতে ক্লিক করুন"
                        onClick={() =>
                          setResultStatus((prev) =>
                            prev === 'উত্তীর্ণ হইয়াছে' ? 'উত্তীর্ণ হয় নাই' : 'উত্তীর্ণ হইয়াছে'
                          )
                        }
                      >
                        {resultStatus}
                      </span>
                      । সে মাদরাসার বেতন ও অন্যান্য যাবতীয় পাওনা{' '}
                      <span className="tc-fv sm" data-field="cDueYr" contentEditable suppressContentEditableWarning>
                        {certFields.dueYr}
                      </span>{' '}
                      সাল পর্যন্ত সম্পূর্ণ পরিশোধ করিয়াছে। তাহার মাদরাসা আইডি / রেজিস্ট্রেশন নং:{' '}
                      <span className="tc-fv" data-field="cRegNo" contentEditable suppressContentEditableWarning>
                        {certFields.regNo}
                      </span>
                      ।
                    </p>
                    <p className="no-indent">
                      তাহার স্বভাব ও চরিত্র ভালো। আমরা তাহার উজ্জ্বল ভবিষ্যৎ ও সর্বাঙ্গীণ মঙ্গল কামনা করি।
                    </p>
                  </div>
                </div>

                <div className="tc-cert-footer">
                  <div className="tc-reasons">
                    <div className="r-title">মাদরাসা পরিত্যাগের কারণঃ</div>
                    {REASONS_LIST.map((reasonText) => {
                      const isOn = selectedReasons.includes(reasonText);
                      return (
                        <div
                          key={reasonText}
                          className="tc-r-item"
                          onClick={() => handleToggleReason(reasonText)}
                        >
                          <div className={`tc-r-box ${isOn ? 'on' : ''}`} />
                          <span>{reasonText}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="tc-principal-sig">
                    <div className="sig-line" />
                    <div className="sig-title" data-field="sigTitle" contentEditable suppressContentEditableWarning>
                      {certFields.sigTitle}
                    </div>
                    <div className="sig-inst" data-field="sigInst" contentEditable suppressContentEditableWarning>
                      {certFields.sigInst}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
