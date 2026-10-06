import { useState } from 'react';
import { Filter, Download, FileText, Table as TableIcon, Loader, AlertCircle, Printer } from 'lucide-react';
import * as XLSX from 'xlsx';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import { getMadrasahInfo } from '../../utils/helpers';
import MadrasahLetterhead from '../../components/common/MadrasahLetterhead';
import PrintSignatureRoleSelector, { DEFAULT_SIGNATURE_ROLES } from '../../components/common/PrintSignatureRoleSelector';
import PrintFooterSignatures from '../../components/common/PrintFooterSignatures';

export default function CustomReportsPage() {
  const { user } = useAuthStore();
  const { madrasahName, branchName } = getMadrasahInfo(user);
  const [reportData, setReportData] = useState([]);
  const [reportType, setReportType] = useState('journal');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedSignatureRoles, setSelectedSignatureRoles] = useState(() => {
    try {
      const saved = localStorage.getItem('annur_footer_roles__custom_reports');
      return saved ? JSON.parse(saved) : DEFAULT_SIGNATURE_ROLES;
    } catch {
      return DEFAULT_SIGNATURE_ROLES;
    }
  });
  
  const [filterData, setFilterData] = useState({
    startDate: '',
    endDate: '',
    type: 'journal'
  });

  const handleFilter = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      const res = await api.get('/finance/reports/custom', { params: filterData });
      if (res.data.success) {
        setReportData(res.data.data.data);
        setReportType(res.data.data.type);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'রিপোর্ট জেনারেট করতে সমস্যা হয়েছে');
    } finally {
      setLoading(false);
    }
  };

  const getReportTitle = (type) => {
    switch (type) {
      case 'journal': return 'জার্নাল এন্ট্রি রিপোর্ট (Journal Entries)';
      case 'invoices': return 'ইনভয়েস রিপোর্ট (Invoices Report)';
      case 'payments': return 'পেমেন্ট ও কালেকশন রিপোর্ট (Payments Report)';
      case 'expenses': return 'খরচ ও ব্যয় বিবরণী (Expenses Report)';
      default: return 'কাস্টম রিপোর্ট (Custom Report)';
    }
  };


  const exportToExcel = () => {
    let wsData = [];
    
    if (reportType === 'journal') {
      wsData = [['Date', 'Reference', 'Description']];
      reportData.forEach(item => wsData.push([
        new Date(item.date).toLocaleDateString(), 
        item.reference || '-', 
        item.description || '-'
      ]));
    } else if (reportType === 'invoices') {
      wsData = [['Date', 'Invoice No', 'Student', 'Payable', 'Status']];
      reportData.forEach(item => wsData.push([
        new Date(item.createdAt).toLocaleDateString(), 
        item.invoiceNumber || '-', 
        item.student?.studentId || '-', 
        item.payableTotal || 0,
        item.status || '-'
      ]));
    } else if (reportType === 'payments') {
      wsData = [['Date', 'Payment No', 'Amount', 'Method', 'Status']];
      reportData.forEach(item => wsData.push([
        new Date(item.createdAt).toLocaleDateString(), 
        item.paymentNumber || '-', 
        item.amount || 0,
        item.method || '-',
        item.status || '-'
      ]));
    } else if (reportType === 'expenses') {
      wsData = [['Date', 'Voucher No', 'Category', 'Amount', 'Status']];
      reportData.forEach(item => wsData.push([
        new Date(item.date).toLocaleDateString(), 
        item.voucherNumber || '-', 
        item.category?.name || '-', 
        item.amount || 0,
        item.status || '-'
      ]));
    }

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, `custom_report_${reportType}.xlsx`);
  };

  return (
    <div className="page-container animate-fade-in custom-reports-page">
      {/* Print-only Letterhead and Watermark */}
      <div className="print-only" style={{ position: 'relative', marginBottom: '20px' }}>
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '380px',
          height: '380px',
          opacity: 0.05,
          zIndex: 0,
          pointerEvents: 'none',
          backgroundImage: 'url(/favicon.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain'
        }} />
        <MadrasahLetterhead
          documentTitle={getReportTitle(reportType)}
          subTitle={`শাখা: ${branchName} | সময়কাল: ${filterData.startDate || 'শুরু'} হতে ${filterData.endDate || 'বর্তমান'} | মোট রেকর্ড: ${reportData.length} টি`}
        />
      </div>

      <div className="page-header no-print">
        <div>
          <h1 className="page-title flex-center gap-8">
            <Filter className="text-primary" size={28} />
            কাস্টম রিপোর্ট (Custom Reports)
          </h1>
          <p className="page-subtitle">শাখা: {branchName} • ফিল্টার প্রয়োগ করে ডাইনামিক রিপোর্ট তৈরি করুন</p>
        </div>
        <div className="flex gap-8">
          <button className="btn btn-secondary flex-center gap-8" onClick={() => window.print()} disabled={reportData.length === 0} title="রিপোর্ট প্রিন্ট করুন অথবা পিডিএফ হিসেবে সংরক্ষণ করুন">
            <Printer size={18} /> প্রিন্ট / সেভ পিডিএফ
          </button>
          <button className="btn btn-primary flex-center gap-8" onClick={exportToExcel} disabled={reportData.length === 0}>
            <TableIcon size={18} /> এক্সেল
          </button>
        </div>
      </div>

      {/* Signature Role Selector for Printing */}
      <PrintSignatureRoleSelector
        selectedRoles={selectedSignatureRoles}
        onChange={(roles) => {
          setSelectedSignatureRoles(roles);
          try {
            localStorage.setItem('annur_footer_roles__custom_reports', JSON.stringify(roles));
          } catch (_) {}
        }}
        style={{ marginBottom: '16px' }}
      />

      <div className="card mb-24">
        <form onSubmit={handleFilter} className="grid grid-4" style={{ gap: '16px', alignItems: 'end' }}>
          <div className="form-group">
            <label>রিপোর্টের ধরন</label>
            <select className="input" value={filterData.type} onChange={e => setFilterData({...filterData, type: e.target.value})}>
              <option value="journal">জার্নাল এন্ট্রি (Journal)</option>
              <option value="invoices">ইনভয়েস (Invoices)</option>
              <option value="payments">পেমেন্ট (Payments)</option>
              <option value="expenses">খরচ/ভাউচার (Expenses)</option>
            </select>
          </div>
          <div className="form-group">
            <label>শুরুর তারিখ</label>
            <input type="date" className="input" value={filterData.startDate} onChange={e => setFilterData({...filterData, startDate: e.target.value})} />
          </div>
          <div className="form-group">
            <label>শেষ তারিখ</label>
            <input type="date" className="input" value={filterData.endDate} onChange={e => setFilterData({...filterData, endDate: e.target.value})} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-full flex-center gap-8">
              <FileText size={18} /> রিপোর্ট দেখুন
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div className="alert alert-danger mb-24 flex-center gap-8">
          <AlertCircle size={20} />
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex-center" style={{ height: '300px' }}>
          <Loader className="spin text-primary" size={40} />
        </div>
      ) : (
        <div className="card table-responsive">
          <table className="table">
            <thead>
              {reportType === 'journal' && (
                <tr>
                  <th>তারিখ</th>
                  <th>রেফারেন্স</th>
                  <th>বিবরণ</th>
                </tr>
              )}
              {reportType === 'invoices' && (
                <tr>
                  <th>তারিখ</th>
                  <th>ইনভয়েস নং</th>
                  <th>শিক্ষার্থী আইডি</th>
                  <th className="text-right">মোট (৳)</th>
                  <th className="text-center">স্ট্যাটাস</th>
                </tr>
              )}
              {reportType === 'payments' && (
                <tr>
                  <th>তারিখ</th>
                  <th>পেমেন্ট নং</th>
                  <th className="text-right">পরিমাণ (৳)</th>
                  <th>মাধ্যম</th>
                  <th className="text-center">স্ট্যাটাস</th>
                </tr>
              )}
              {reportType === 'expenses' && (
                <tr>
                  <th>তারিখ</th>
                  <th>ভাউচার নং</th>
                  <th>খাত</th>
                  <th className="text-right">পরিমাণ (৳)</th>
                  <th className="text-center">স্ট্যাটাস</th>
                </tr>
              )}
            </thead>
            <tbody>
              {reportData.length > 0 ? (
                reportData.map((item, idx) => (
                  <tr key={idx}>
                    {reportType === 'journal' && (
                      <>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td>{item.reference}</td>
                        <td>{item.description}</td>
                      </>
                    )}
                    {reportType === 'invoices' && (
                      <>
                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                        <td className="font-mono">{item.invoiceNumber}</td>
                        <td>{item.student?.studentId || '—'}</td>
                        <td className="text-right font-mono font-bold">৳{item.payableTotal?.toLocaleString()}</td>
                        <td className="text-center">
                          <span className={`badge badge-${item.status === 'paid' ? 'success' : 'warning'}`}>{item.status}</span>
                        </td>
                      </>
                    )}
                    {reportType === 'payments' && (
                      <>
                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                        <td className="font-mono">{item.paymentNumber}</td>
                        <td className="text-right font-mono font-bold">৳{item.amount?.toLocaleString()}</td>
                        <td>{item.method}</td>
                        <td className="text-center">
                          <span className={`badge badge-${item.status === 'success' ? 'success' : 'primary'}`}>{item.status}</span>
                        </td>
                      </>
                    )}
                    {reportType === 'expenses' && (
                      <>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td className="font-mono">{item.voucherNumber}</td>
                        <td>{item.category?.name || '—'}</td>
                        <td className="text-right font-mono font-bold">৳{item.amount?.toLocaleString()}</td>
                        <td className="text-center">
                          <span className={`badge badge-${item.status === 'approved' ? 'success' : 'warning'}`}>{item.status}</span>
                        </td>
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-24 text-muted">কোনো ডেটা পাওয়া যায়নি</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Official Footer Signatures */}
          <div className="print-only">
            <PrintFooterSignatures roles={selectedSignatureRoles} style={{ marginTop: '50px' }} />
            <div style={{ marginTop: '16px', fontSize: '10px', color: '#94a3b8', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '6px' }}>
              <span>প্রিন্ট তারিখ: {new Date().toLocaleString('bn-BD', { timeZone: 'Asia/Dhaka' })}</span>
              <span>আন্-নূর ইসলামিক একাডেমি ডিজিটাল ম্যানেজমেন্ট সিস্টেম</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 6mm 10mm;
          }
          .no-print { display: none !important; }
          .print-only { display: block !important; }
          body { background: white !important; color: black !important; }
          .sidebar, .topbar { display: none !important; }
          .main-content { margin: 0 !important; padding: 0 !important; }
          .custom-reports-page { padding: 0 !important; max-width: 100% !important; }
          .card { background: white !important; border: none !important; box-shadow: none !important; padding: 0 !important; }
          .table { width: 100% !important; border-collapse: collapse !important; font-size: 11px !important; }
          .table th, .table td { border: 1px solid #cbd5e1 !important; padding: 6px 8px !important; color: black !important; }
          .table th { background: #f8fafc !important; font-weight: 700 !important; }
          .badge { border: 1px solid #cbd5e1 !important; color: black !important; background: transparent !important; }
        }
        .print-only { display: none; }
      `}</style>
    </div>
  );
}
