import { useState, useEffect } from 'react';
import { CreditCard, Receipt, FileText, CheckCircle, AlertCircle, Printer, Loader } from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';
import PaymentReceipt from '../../components/finance/PaymentReceipt';

export default function MyPaymentsPage() {
  const { user } = useAuthStore();
  const [summary, setSummary] = useState({ totalDue: 0, totalPaid: 0, dueInvoices: 0 });
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);
  const [receiptData, setReceiptData] = useState({ invoice: null, payment: null });
  
  const [paymentForm, setPaymentForm] = useState({
    method: 'bkash',
    transactionReference: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
  }, [user]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [summaryRes, invoicesRes] = await Promise.all([
        api.get('/finance/my-student-summary'),
        api.get('/finance/invoices')
      ]);
      
      if (summaryRes.data.success) {
        setSummary(summaryRes.data.data);
      }
      if (invoicesRes.data.success) {
        setInvoices(invoicesRes.data.data.invoices || []);
      }
    } catch (error) {
      console.error('Error fetching student finance data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectInvoice = (invoiceId) => {
    setSelectedInvoices(prev => 
      prev.includes(invoiceId) ? prev.filter(id => id !== invoiceId) : [...prev, invoiceId]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedInvoices(invoices.filter(i => i.balance > 0).map(i => i._id));
    } else {
      setSelectedInvoices([]);
    }
  };

  const getTotalSelectedDue = () => {
    return invoices
      .filter(inv => selectedInvoices.includes(inv._id))
      .reduce((sum, inv) => sum + inv.balance, 0);
  };

  const handleSubmitPayment = async (e) => {
    e.preventDefault();
    if (selectedInvoices.length === 0) return alert('কোনো ইনভয়েস নির্বাচন করা হয়নি');
    if (['bkash', 'rocket', 'nagad'].includes(paymentForm.method) && !paymentForm.transactionReference) {
      return alert('ট্রানজেকশন আইডি আবশ্যক');
    }

    try {
      setSubmitting(true);
      const res = await api.post('/finance/payments/bulk', {
        invoiceIds: selectedInvoices,
        totalAmount: getTotalSelectedDue(),
        method: paymentForm.method,
        transactionReference: paymentForm.transactionReference
      });
      if (res.data.success) {
        alert(res.data.message);
        setIsPaymentModalOpen(false);
        setPaymentForm({ method: 'bkash', transactionReference: '' });
        setSelectedInvoices([]);
        fetchData();
      }
    } catch (error) {
      alert(error.response?.data?.message || 'পেমেন্ট সাবমিট করতে ব্যর্থ হয়েছে');
    } finally {
      setSubmitting(false);
    }
  };

  const viewReceipt = (invoice, payment) => {
    setReceiptData({ invoice, payment });
    setIsReceiptModalOpen(true);
  };

  if (loading) {
    return (
      <div className="flex-center h-64">
        <Loader className="animate-spin text-primary" size={32} />
      </div>
    );
  }

  const unpaidInvoices = invoices.filter(inv => inv.balance > 0);
  const paidInvoices = invoices.filter(inv => inv.paidTotal > 0);

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-8 fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
          <CreditCard className="text-primary" size={28} />
          আমার পেমেন্ট
        </h1>
        <p className="text-slate-500 mt-1">পেমেন্ট স্ট্যাটাস এবং নতুন পেমেন্ট করুন</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6 border-t-4 border-rose-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">মোট বকেয়া</p>
              <h3 className="text-3xl font-bold text-slate-800">৳ {summary.totalDue?.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-rose-50 text-rose-600 rounded-full">
              <AlertCircle size={24} />
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">{summary.dueInvoices} টি ইনভয়েস বকেয়া রয়েছে</p>
        </div>

        <div className="card p-6 border-t-4 border-emerald-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">মোট পরিশোধিত</p>
              <h3 className="text-3xl font-bold text-slate-800">৳ {summary.totalPaid?.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full">
              <CheckCircle size={24} />
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">সকল পরিশোধিত পেমেন্ট</p>
        </div>
        
        <div className="card p-6 bg-gradient-to-br from-primary/90 to-primary text-white border-0">
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="text-primary-50 text-sm mb-1">পরবর্তী পেমেন্টের তারিখ</p>
              <h3 className="text-2xl font-bold">
                {summary.upcomingDueDate ? new Date(summary.upcomingDueDate).toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' }) : 'কোনো বকেয়া নেই'}
              </h3>
            </div>
            {summary.totalDue > 0 && (
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="mt-4 bg-white text-primary font-semibold py-2 px-4 rounded-lg hover:bg-slate-50 transition-colors w-full"
              >
                এখনই পে করুন
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Unpaid Invoices */}
      {unpaidInvoices.length > 0 && (
        <div className="card">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-800">বকেয়া ইনভয়েস সমূহ</h2>
            {selectedInvoices.length > 0 && (
              <button 
                onClick={() => setIsPaymentModalOpen(true)}
                className="btn btn-primary"
              >
                নির্বাচিত {selectedInvoices.length}টি পে করুন (৳ {getTotalSelectedDue()})
              </button>
            )}
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 text-primary focus:ring-primary"
                      checked={selectedInvoices.length === unpaidInvoices.length && unpaidInvoices.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>বিবরণ</th>
                  <th>ছাত্রের নাম</th>
                  <th>শেষ তারিখ</th>
                  <th>মোট বিল</th>
                  <th>বকেয়া</th>
                  <th>স্ট্যাটাস</th>
                </tr>
              </thead>
              <tbody>
                {unpaidInvoices.map(inv => (
                  <tr key={inv._id}>
                    <td>
                      <input 
                        type="checkbox"
                        className="rounded border-slate-300 text-primary focus:ring-primary"
                        checked={selectedInvoices.includes(inv._id)}
                        onChange={() => handleSelectInvoice(inv._id)}
                      />
                    </td>
                    <td>
                      <div className="font-medium text-slate-800">{inv.title}</div>
                      <div className="text-xs text-slate-500">{inv.invoiceNumber}</div>
                    </td>
                    <td>{inv.student?.user?.firstName} {inv.student?.user?.lastName}</td>
                    <td>{new Date(inv.dueDate).toLocaleDateString('bn-BD')}</td>
                    <td>৳ {inv.payableTotal}</td>
                    <td className="font-semibold text-rose-600">৳ {inv.balance}</td>
                    <td>
                      <span className="px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-full font-medium border border-rose-100">
                        বকেয়া
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Payment History / Receipts */}
      <div className="card">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-800">পেমেন্ট হিস্ট্রি ও রশিদ</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>বিবরণ</th>
                <th>তারিখ</th>
                <th>ট্রানজেকশন</th>
                <th>জমা দেওয়া হয়েছে</th>
                <th>স্ট্যাটাস</th>
                <th className="text-right">রশিদ</th>
              </tr>
            </thead>
            <tbody>
              {invoices.filter(inv => inv.payments && inv.payments.length > 0).flatMap(inv => 
                inv.payments.map(payment => (
                  <tr key={payment._id}>
                    <td>
                      <div className="font-medium text-slate-800">{inv.title}</div>
                      <div className="text-xs text-slate-500">ইনভয়েস: {inv.invoiceNumber}</div>
                    </td>
                    <td>{new Date(payment.createdAt).toLocaleDateString('bn-BD')}</td>
                    <td>
                      <span className="text-sm font-medium uppercase">{payment.method}</span>
                      {payment.transactionReference && (
                        <span className="block text-xs text-slate-500">{payment.transactionReference}</span>
                      )}
                    </td>
                    <td className="font-semibold text-emerald-600">৳ {payment.amount}</td>
                    <td>
                      {payment.status === 'success' ? (
                        <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-full font-medium border border-emerald-100">
                          পরিশোধিত
                        </span>
                      ) : payment.status === 'pending' ? (
                        <span className="px-2 py-1 bg-amber-50 text-amber-600 text-xs rounded-full font-medium border border-amber-100">
                          অপেক্ষাধীন
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-full font-medium border border-rose-100">
                          বাতিল
                        </span>
                      )}
                    </td>
                    <td className="text-right">
                      {payment.status === 'success' && (
                        <button 
                          onClick={() => viewReceipt(inv, payment)}
                          className="p-2 text-primary hover:bg-primary-50 rounded-lg transition-colors"
                          title="রশিদ দেখুন"
                        >
                          <Receipt size={18} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
              {invoices.filter(inv => inv.payments && inv.payments.length > 0).length === 0 && (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-slate-500">
                    কোনো পেমেন্ট রেকর্ড পাওয়া যায়নি
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bulk Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100">
              <h2 className="text-xl font-bold text-slate-800">পেমেন্ট করুন</h2>
              <p className="text-sm text-slate-500 mt-1">নির্বাচিত {selectedInvoices.length}টি ইনভয়েসের জন্য</p>
            </div>
            
            <form onSubmit={handleSubmitPayment} className="p-6 space-y-5">
              <div className="bg-slate-50 p-4 rounded-lg flex justify-between items-center mb-6 border border-slate-100">
                <span className="text-slate-600 font-medium">মোট প্রদেয়:</span>
                <span className="text-2xl font-bold text-primary">৳ {getTotalSelectedDue().toLocaleString()}</span>
              </div>
              
              <div className="form-group">
                <label className="form-label">পেমেন্ট পদ্ধতি</label>
                <select 
                  className="form-control"
                  value={paymentForm.method}
                  onChange={(e) => setPaymentForm({...paymentForm, method: e.target.value})}
                  required
                >
                  <option value="bkash">bKash</option>
                  <option value="nagad">Nagad</option>
                  <option value="rocket">Rocket</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">ট্রানজেকশন আইডি (TxnID)</label>
                <input 
                  type="text"
                  className="form-control"
                  placeholder="যেমন: 8N7A6D5E"
                  value={paymentForm.transactionReference}
                  onChange={(e) => setPaymentForm({...paymentForm, transactionReference: e.target.value})}
                  required
                />
                <p className="text-xs text-slate-500 mt-1">
                  দয়া করে সঠিক ট্রানজেকশন আইডি প্রদান করুন। অ্যাডমিন যাচাই করার পর আপনার পেমেন্ট নিশ্চিত হবে।
                </p>
              </div>
              
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="btn btn-outline"
                >
                  বাতিল
                </button>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn btn-primary min-w-[120px]"
                >
                  {submitting ? 'সাবমিট হচ্ছে...' : 'সাবমিট করুন'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Receipt Modal */}
      {isReceiptModalOpen && receiptData.invoice && receiptData.payment && (
        <PaymentReceipt 
          invoice={receiptData.invoice}
          payment={receiptData.payment}
          onClose={() => setIsReceiptModalOpen(false)}
        />
      )}
    </div>
  );
}
