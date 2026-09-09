import { Printer, X } from 'lucide-react';

const formatDate = (dateString) => {
  if (!dateString) return '—';
  const d = new Date(dateString);
  return d.toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const formatTaka = (amount) => {
  return new Intl.NumberFormat('bn-BD', { style: 'currency', currency: 'BDT' }).format(amount || 0);
};

export default function PaymentReceipt({ invoice, payment, onClose }) {
  const handlePrint = () => {
    window.print();
  };

  if (!invoice || !payment) return null;

  const studentName = invoice.student?.user ? `${invoice.student.user.firstName || ''} ${invoice.student.user.lastName || ''}`.trim() : '—';
  const studentId = invoice.student?.studentId || '—';
  const classLevel = invoice.student?.currentEnrollment?.classLevel?.name || '—';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 print:p-0 print:bg-white">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto print:shadow-none print:w-full print:max-w-none print:max-h-none print:overflow-visible">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 print:hidden">
          <h2 className="text-xl font-bold text-slate-800">পেমেন্ট রশিদ</h2>
          <div className="flex items-center gap-3">
            <button onClick={handlePrint} className="btn btn-outline flex-center gap-2">
              <Printer size={18} /> প্রিন্ট করুন
            </button>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="p-8 print:p-4" id="printable-receipt">
          {/* Header */}
          <div className="text-center mb-8 border-b-2 border-slate-800 pb-6">
            <h1 className="text-2xl font-bold text-slate-900 mb-1">আন-নুর ইসলামিক একাডেমি</h1>
            <p className="text-slate-600">পেমেন্ট রশিদ (Payment Receipt)</p>
          </div>

          {/* Details Row 1 */}
          <div className="flex justify-between mb-6">
            <div>
              <p className="text-sm text-slate-500 mb-1">রশিদ নং</p>
              <p className="font-semibold text-slate-900">{payment.paymentNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500 mb-1">তারিখ</p>
              <p className="font-semibold text-slate-900">
                {formatDate(payment.createdAt || payment.paymentDate)}
              </p>
            </div>
          </div>

          {/* Student Info Box */}
          <div className="bg-slate-50 p-4 rounded-lg mb-8 border border-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">ছাত্রের নাম</p>
                <p className="font-medium text-slate-900">{studentName}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">স্টুডেন্ট আইডি</p>
                <p className="font-medium text-slate-900">{studentId}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">শ্রেণি/বিভাগ</p>
                <p className="font-medium text-slate-900">{classLevel}</p>
              </div>
            </div>
          </div>

          {/* Invoice Table */}
          <table className="w-full mb-8">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-3 text-left font-semibold text-slate-800">বিবরণ</th>
                <th className="py-3 text-right font-semibold text-slate-800">পরিমাণ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 text-slate-600">
                  {invoice.title} <span className="text-sm text-slate-400">({payment.feeMonth})</span>
                </td>
                <td className="py-3 text-right font-medium text-slate-900">{formatTaka(invoice.subtotal + (invoice.fineTotal || 0))}</td>
              </tr>
              {invoice.discountTotal > 0 && (
                <tr>
                  <td className="py-3 text-slate-600">ছাড় (Discount)</td>
                  <td className="py-3 text-right font-medium text-red-600">-{formatTaka(invoice.discountTotal)}</td>
                </tr>
              )}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-800">
                <td className="py-4 text-right font-bold text-slate-900">মোট প্রদেয়</td>
                <td className="py-4 text-right font-bold text-slate-900">{formatTaka(invoice.payableTotal)}</td>
              </tr>
              <tr>
                <td className="py-2 text-right font-medium text-slate-600">এই রশিদে জমা</td>
                <td className="py-2 text-right font-bold text-emerald-600">{formatTaka(payment.amount)}</td>
              </tr>
              {invoice.balance > 0 && (
                <tr>
                  <td className="py-2 text-right font-medium text-slate-600">বর্তমান বকেয়া</td>
                  <td className="py-2 text-right font-medium text-rose-600">{formatTaka(invoice.balance)}</td>
                </tr>
              )}
            </tfoot>
          </table>

          {/* Payment Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 border-t border-slate-100 pt-6">
            <div>
              <span className="block mb-1">পেমেন্ট পদ্ধতি: <strong className="text-slate-900 uppercase">{payment.method}</strong></span>
              {payment.transactionReference && (
                <span className="block">ট্রানজেকশন আইডি: <strong className="text-slate-900">{payment.transactionReference}</strong></span>
              )}
            </div>
            <div className="text-right">
              <span className="block mb-1">স্ট্যাটাস: 
                <strong className={payment.status === 'success' ? 'text-emerald-600 ml-1' : 'text-amber-500 ml-1'}>
                  {payment.status === 'success' ? 'পরিশোধিত' : 'অপেক্ষাধীন'}
                </strong>
              </span>
              <span className="block">গ্রহণকারী: <strong className="text-slate-900">{payment.receivedBy?.firstName || 'সিস্টেম'}</strong></span>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-400 print:block">
            এটি একটি কম্পিউটার জেনারেটেড রশিদ, কোনো স্বাক্ষরের প্রয়োজন নেই।
          </div>
        </div>
      </div>
      
      {/* Print styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * { visibility: hidden; }
          #printable-receipt, #printable-receipt * { visibility: visible; }
          #printable-receipt { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}} />
    </div>
  );
}
