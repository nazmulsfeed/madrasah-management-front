/**
 * তারিখ ফরম্যাট ইউটিলিটি — DD-MM-YYYY ফরম্যাটে বাংলায় তারিখ রিটার্ন করে
 * @param {string|Date} dateStr - তারিখ স্ট্রিং বা Date অবজেক্ট
 * @returns {string} DD-MM-YYYY ফরম্যাটে তারিখ (বাংলা ডিজিট)
 */
export function formatDateDDMMYYYY(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '—';
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const formatted = `${day}-${month}-${year}`;
  // Convert to Bengali digits
  return formatted.replace(/\d/g, (digit) => '০১২৩৪৫৬৭৮৯'[digit]);
}

/**
 * তারিখ ফরম্যাট — DD-MM-YYYY ফরম্যাটে ইংরেজি ডিজিটে
 */
export function formatDateDDMMYYYYEn(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '—';
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

/**
 * তারিখ ফরম্যাট — বাংলায় দিন, মাস, বছর (যেমন: ২০ সেপ্টেম্বর ২০২৬)
 */
export function formatDateLongBn(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });
}

/**
 * হোমওয়ার্কের জন্য পরবর্তী কর্মদিবস (শুক্রবার স্কিপ করে)
 * @returns {string} YYYY-MM-DD ফরম্যাটে তারিখ
 */
export function getNextWorkingDay() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  // শুক্রবার = 5, শুক্রবার হলে শনিবারে (6) যাবে
  if (tomorrow.getDay() === 5) {
    tomorrow.setDate(tomorrow.getDate() + 1);
  }
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * মাদ্রাসার কেন্দ্রীয় তথ্য (নাম, শাখা ইত্যাদি) পাওয়ার হেল্পার
 * @param {Object} [customUser] - অপশনাল ইউজার অবজেক্ট
 * @returns {{ madrasahName: string, branchName: string, address: string, phone: string, email: string, website: string, registrationNumber: string, logo: string }}
 */
export function getMadrasahInfo(customUser) {
  let user = customUser;
  if (!user) {
    try {
      const stored = localStorage.getItem('user');
      user = stored ? JSON.parse(stored) : null;
    } catch (e) {
      user = null;
    }
  }

  const inst = user?.institution && typeof user.institution === 'object' ? user.institution : null;
  const madrasahName = inst?.name || 'আন্-নূর ইসলামিক একাডেমি';
  let branchName = inst?.branchName || (user?.branch && typeof user.branch === 'object' ? user.branch.name : (user?.branch || ''));
  if (!branchName || branchName.trim() === '' || branchName === 'বালক শাখা' || branchName === 'বালিকা শাখা') {
    branchName = 'প্রধান শাখা';
  }

  return {
    madrasahName,
    branchName,
    address: inst?.address || '',
    phone: inst?.phone || '',
    email: inst?.email || '',
    website: inst?.website || '',
    registrationNumber: inst?.registrationNumber || '',
    logo: inst?.logo || '',
  };
}
