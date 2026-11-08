import { useState, useEffect } from 'react';
import { 
  Award, BookOpen, CheckCircle, TrendingUp, Calendar, 
  Printer, AlertCircle, RefreshCw, Trophy, Star
} from 'lucide-react';
import api from '../../api/axios';

const CATEGORY_LABELS = {
  term_exam: 'সাময়িক পরীক্ষা (টার্ম)',
  monthly_test: 'মাসিক ক্লাস টেস্ট',
  weekly_sabina: 'সাপ্তাহিক সবিনা পরীক্ষা',
  tanzim_board: 'তানজিমুল মাদারিস বোর্ড পরীক্ষা',
  huffaz_board: 'হুফফাজুল কুরআন / হোফ ফাস্ট বোর্ড পরীক্ষা',
  model_test: 'মডেল টেস্ট',
  general: 'সাধারণ পরীক্ষা'
};

const MONTH_LABELS = {
  january: 'জানুয়ারি', february: 'ফেব্রুয়ারি', march: 'মার্চ', april: 'এপ্রিল',
  may: 'মে', june: 'জুন', july: 'জুলাই', august: 'আগস্ট',
  september: 'সেপ্টেম্বর', october: 'অক্টোবর', november: 'নভেম্বর', december: 'ডিসেম্বর'
};

export default function StudentResultView({ studentId }) {
  const [results, setResults] = useState([]);
  const [studentInfo, setStudentInfo] = useState(null);
  const [annualCumulative, setAnnualCumulative] = useState(null);
  const [selectedExamId, setSelectedExamId] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchResults = async () => {
    setLoading(true);
    setError(null);
    try {
      const url = studentId 
        ? `/exams/student-results/${studentId}`
        : `/exams/student-results`;
      const res = await api.get(url);
      if (res.data.success) {
        setResults(res.data.data.results || []);
        setStudentInfo(res.data.data.student || null);
        setAnnualCumulative(res.data.data.annualCumulative || null);
        if (res.data.data.results && res.data.data.results.length > 0) {
          setSelectedExamId(res.data.data.results[0].examId);
        }
      }
    } catch (err) {
      console.error('Failed to fetch student results', err);
      setError('পরীক্ষার ফলাফল লোড করতে সমস্যা হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [studentId]);

  const filteredResults = results.filter(r => {
    if (categoryFilter === 'all') return true;
    return r.examCategory === categoryFilter;
  });

  const activeExamResult = selectedExamId === 'all'
    ? filteredResults[0]
    : filteredResults.find(r => String(r.examId) === String(selectedExamId)) || filteredResults[0];

  const getGradeBadgeClass = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'badge-success';
    if (grade === 'A-' || grade === 'B') return 'badge-info';
    if (grade === 'C' || grade === 'D') return 'badge-warning';
    return 'badge-danger';
  };

  const getRankBadge = (pos, total) => {
    if (!pos) return '—';
    const bnNums = { '0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯' };
    const toBn = (n) => String(n).replace(/[0-9]/g, d => bnNums[d]);
    const posBn = toBn(pos);
    const suffix = pos === 1 ? 'ম' : pos === 2 ? 'য়' : pos === 3 ? 'য়' : 'র্থ';
    return `${posBn}${suffix} স্থান ${total ? `(মোট ${toBn(total)} জনের মধ্যে)` : ''}`;
  };

  return (
    <div className="student-result-container animate-fade-in" style={{ width: '100%' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(99, 102, 241, 0.1) 100%)',
        padding: '18px 22px', borderRadius: '16px', border: '1px solid rgba(14, 165, 233, 0.25)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px',
        marginBottom: '20px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '46px', height: '46px', borderRadius: '12px',
            background: 'linear-gradient(135deg, #0284c7 0%, #2563eb 100%)',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
          }}>
            <Trophy size={24} />
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              শিক্ষার্থীর পরীক্ষার ফলাফল ও মেধা তালিকা (Exam Results)
            </h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              মডেল টেস্ট, মাসিক ক্লাস টেস্ট ও টার্ম পরীক্ষার বিষয়ভিত্তিক মূল্যায়ন ও মেধা স্থান
            </p>
          </div>
        </div>

        <button
          onClick={fetchResults}
          className="btn btn-secondary btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
        >
          <RefreshCw size={14} className={loading ? 'spinner' : ''} />
          <span>রিফ্রেশ</span>
        </button>
      </div>

      {loading ? (
        <div style={{ padding: '60px', textAlign: 'center' }}>
          <div className="spinner" style={{ margin: '0 auto 12px' }}></div>
          <div className="text-muted">ফলাফল লোড হচ্ছে...</div>
        </div>
      ) : error ? (
        <div className="card text-center" style={{ padding: '40px', color: 'var(--danger)' }}>
          <AlertCircle size={36} style={{ margin: '0 auto 10px', opacity: 0.8 }} />
          <div>{error}</div>
        </div>
      ) : results.length === 0 ? (
        <div className="card empty-state text-center" style={{ padding: '50px 20px' }}>
          <Award size={48} style={{ opacity: 0.25, margin: '0 auto 12px' }} />
          <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>এখনও কোনো পরীক্ষার ফলাফল প্রকাশ করা হয়নি</h4>
          <p className="text-muted text-sm">শিক্ষক বা পরীক্ষা নিয়ন্ত্রণ শাখা থেকে ফলাফল যুক্ত হলে এখানে প্রদর্শিত হবে।</p>
        </div>
      ) : (
        <>
          {/* Annual Cumulative Summary Card */}
          {annualCumulative && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.12) 100%)',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '16px',
              padding: '18px 22px',
              marginBottom: '24px',
              boxShadow: '0 4px 16px rgba(245, 158, 11, 0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px', borderBottom: '1px solid rgba(245, 158, 11, 0.25)', paddingBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Trophy size={20} style={{ color: '#d97706' }} />
                  <span style={{ fontWeight: 800, fontSize: '1.08rem', color: '#92400e' }}>
                    চূড়ান্ত বার্ষিক সমন্বিত ফলাফল (Annual Combined Standing)
                  </span>
                </div>
                {annualCumulative.rank && (
                  <span style={{
                    background: '#d97706', color: '#fff', padding: '4px 12px',
                    borderRadius: '20px', fontWeight: 800, fontSize: '0.85rem'
                  }}>
                    {annualCumulative.rankText}
                  </span>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>১ম সাময়িক পরীক্ষা</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {annualCumulative.term1?.obtained || 0} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ {annualCumulative.term1?.max || 0}</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>২য় সাময়িক পরীক্ষা</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {annualCumulative.term2?.obtained || 0} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ {annualCumulative.term2?.max || 0}</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>৩য় সাময়িক পরীক্ষা</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '4px' }}>
                    {annualCumulative.term3?.obtained || 0} <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/ {annualCumulative.term3?.max || 0}</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '12px', borderRadius: '10px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.75rem', color: '#b45309', fontWeight: 700 }}>সর্বমোট নম্বর (Grand Total)</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#d97706', marginTop: '4px' }}>
                    {annualCumulative.grandTotalObtained} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ {annualCumulative.grandTotalMaxMarks}</span>
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {annualCumulative.overallPercentage}% — গ্রেড: <strong>{annualCumulative.overallGrade}</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filter Bar & Exam Selector */}
          <div style={{
            display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap',
            marginBottom: '20px', background: 'var(--bg-card)', padding: '12px 16px',
            borderRadius: '12px', border: '1px solid var(--border-color)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '220px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                পরীক্ষার ধরন:
              </label>
              <select
                className="form-input"
                style={{ padding: '6px 10px', fontSize: '0.85rem' }}
                value={categoryFilter}
                onChange={e => {
                  setCategoryFilter(e.target.value);
                  const firstMatch = results.find(r => e.target.value === 'all' || r.examCategory === e.target.value);
                  if (firstMatch) setSelectedExamId(firstMatch.examId);
                }}
              >
                <option value="all">সব পরীক্ষার ফলাফল</option>
                <option value="term_exam">সাময়িক পরীক্ষা (টার্ম ১-৩)</option>
                <option value="monthly_test">মাসিক ক্লাস টেস্ট (১ম-১২শ মাস)</option>
                <option value="model_test">মডেল টেস্ট (১-৩)</option>
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: '240px' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                নির্দিষ্ট পরীক্ষা:
              </label>
              <select
                className="form-input"
                style={{ padding: '6px 10px', fontSize: '0.85rem' }}
                value={selectedExamId}
                onChange={e => setSelectedExamId(e.target.value)}
              >
                {filteredResults.map(r => (
                  <option key={r.examId} value={r.examId}>
                    {r.examName} {r.termNumber ? `(টার্ম ${r.termNumber})` : ''} {r.month ? `— ${MONTH_LABELS[r.month] || r.month}` : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {activeExamResult && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Summary Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '14px'
              }}>
                {/* Total Marks */}
                <div className="card" style={{
                  padding: '16px', borderRadius: '12px', borderLeft: '4px solid #0284c7',
                  background: 'var(--bg-card)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    মোট প্রাপ্ত নম্বর / পূর্ণমান
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 700, color: '#0284c7' }}>
                    {activeExamResult.totalObtained} <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>/ {activeExamResult.totalMaxMarks}</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    বিষয় সংখ্যা: {activeExamResult.subjects?.length || 0} টি
                  </div>
                </div>

                {/* Overall Percentage */}
                <div className="card" style={{
                  padding: '16px', borderRadius: '12px', borderLeft: '4px solid #10b981',
                  background: 'var(--bg-card)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    সার্বিক শতকরা হার (%)
                  </div>
                  <div style={{ fontSize: '1.45rem', fontWeight: 700, color: '#10b981' }}>
                    {activeExamResult.overallPercentage}%
                  </div>
                  <div style={{
                    width: '100%', height: '6px', background: 'var(--bg-secondary, #e2e8f0)',
                    borderRadius: '4px', marginTop: '8px', overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${Math.min(activeExamResult.overallPercentage, 100)}%`,
                      height: '100%', background: '#10b981', borderRadius: '4px'
                    }}></div>
                  </div>
                </div>

                {/* Overall Grade */}
                <div className="card" style={{
                  padding: '16px', borderRadius: '12px', borderLeft: '4px solid #8b5cf6',
                  background: 'var(--bg-card)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    সার্বিক প্রাপ্ত গ্রেড
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                    <span style={{ fontSize: '1.45rem', fontWeight: 700, color: '#8b5cf6' }}>
                      {activeExamResult.overallGrade}
                    </span>
                    <span className={`badge ${getGradeBadgeClass(activeExamResult.overallGrade)}`} style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                      {activeExamResult.overallGrade === 'F' ? 'উত্তীর্ণ নয়' : 'উত্তীর্ণ (Passed)'}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
                    {CATEGORY_LABELS[activeExamResult.examCategory] || 'মূল্যায়ন'}
                  </div>
                </div>

                {/* Merit Position */}
                <div className="card" style={{
                  padding: '16px', borderRadius: '12px', borderLeft: '4px solid #f59e0b',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(217, 119, 6, 0.08) 100%)'
                }}>
                  <div style={{ fontSize: '0.8rem', color: '#b45309', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                    <Star size={13} /> মেধা স্থান (Rank / Merit)
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#d97706' }}>
                    {getRankBadge(activeExamResult.position, activeExamResult.totalStudents)}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    সমান নম্বরের ক্ষেত্রে যৌথ মেধা স্থান প্রযোজ্য
                  </div>
                </div>
              </div>

              {/* Subject Breakdown Table */}
              <div className="card" style={{ padding: '0', overflow: 'hidden', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
                <div style={{
                  padding: '14px 18px', background: 'var(--bg-secondary, #f8fafc)',
                  borderBottom: '1px solid var(--border-color)', display: 'flex',
                  justifyContent: 'space-between', alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BookOpen size={16} style={{ color: 'var(--primary-500, #10b981)' }} />
                    <span style={{ fontWeight: 700, fontSize: '0.98rem' }}>
                      বিষয়ভিত্তিক প্রাপ্ত নম্বর ও গ্রেড বিবরণী
                    </span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {activeExamResult.examName}
                  </span>
                </div>

                <div className="table-responsive">
                  <table className="table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--bg-secondary, #f1f5f9)', borderBottom: '1px solid var(--border-color)', textAlign: 'left' }}>
                        <th style={{ padding: '10px 14px', width: '45px', textAlign: 'center' }}>নং</th>
                        <th style={{ padding: '10px 14px' }}>বিষয় ও কোড</th>
                        <th style={{ padding: '10px 14px', textAlign: 'center' }}>পূর্ণমান (Full Marks)</th>
                        <th style={{ padding: '10px 14px', textAlign: 'center' }}>প্রাপ্ত নম্বর</th>
                        <th style={{ padding: '10px 14px', textAlign: 'center' }}>শতকরা হার (%)</th>
                        <th style={{ padding: '10px 14px', textAlign: 'center' }}>গ্রেড</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activeExamResult.subjects && activeExamResult.subjects.length > 0 ? (
                        activeExamResult.subjects.map((sub, idx) => (
                          <tr key={sub.markId || idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                            <td style={{ padding: '10px 14px', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                              {idx + 1}
                            </td>
                            <td style={{ padding: '10px 14px' }}>
                              <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{sub.subjectName}</div>
                              {sub.subjectCode && (
                                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                                  কোড: {sub.subjectCode}
                                </div>
                              )}
                            </td>
                            <td style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 600, color: 'var(--text-secondary)' }}>
                              {sub.totalMarks}
                            </td>
                            <td style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 700, color: sub.marksObtained >= (sub.totalMarks * 0.33) ? 'var(--primary-600, #0d9488)' : 'var(--danger, #ef4444)' }}>
                              {sub.marksObtained}
                            </td>
                            <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ fontWeight: 600 }}>{sub.percentage}%</span>
                              </div>
                            </td>
                            <td style={{ padding: '10px 14px', textAlign: 'center' }}>
                              <span className={`badge ${getGradeBadgeClass(sub.grade)}`} style={{ padding: '2px 8px', fontSize: '0.75rem' }}>
                                {sub.grade}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                            এই পরীক্ষার জন্য এখনও বিষয়ভিত্তিক নম্বর এন্ট্রি করা হয়নি
                          </td>
                        </tr>
                      )}
                    </tbody>
                    {activeExamResult.subjects && activeExamResult.subjects.length > 0 && (
                      <tfoot>
                        <tr style={{ background: 'var(--bg-secondary, #f8fafc)', fontWeight: 700, borderTop: '2px solid var(--border-color)' }}>
                          <td colSpan="2" style={{ padding: '12px 14px', textAlign: 'right' }}>
                            সর্বমোট (Grand Total):
                          </td>
                          <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                            {activeExamResult.totalMaxMarks}
                          </td>
                          <td style={{ padding: '12px 14px', textAlign: 'center', color: 'var(--primary-600, #0d9488)', fontSize: '0.98rem' }}>
                            {activeExamResult.totalObtained}
                          </td>
                          <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                            {activeExamResult.overallPercentage}%
                          </td>
                          <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                            <span className={`badge ${getGradeBadgeClass(activeExamResult.overallGrade)}`}>
                              {activeExamResult.overallGrade}
                            </span>
                          </td>
                        </tr>
                      </tfoot>
                    )}
                  </table>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
