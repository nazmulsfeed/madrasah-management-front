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

/**
 * বাংলা সংখ্যাকে ইংরেজি সংখ্যায় রূপান্তর করে (যেমন: '৮৫' ➔ '85')
 * @param {string|number} val - বাংলা বা মিশ্র ডিজিট
 * @returns {string} ইংরেজি ডিজিট স্ট্রিং
 */
export function parseBnToEnNumber(val) {
  if (val === null || val === undefined) return '';
  const bnToEnMap = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
  return String(val).replace(/[০-৯]/g, d => bnToEnMap[d]);
}

/**
 * ইংরেজি সংখ্যাকে বাংলা সংখ্যায় রূপান্তর করে (যেমন: '85' ➔ '৮৫')
 * @param {string|number} val - ইংরেজি বা মিশ্র ডিজিট
 * @returns {string} বাংলা ডিজিট স্ট্রিং
 */
export function toBnNumber(val) {
  if (val === null || val === undefined || val === '') return '';
  const enToBnMap = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
  return String(val).replace(/[0-9]/g, d => enToBnMap[d]);
}

/**
 * রোল নম্বরকে তুলনার উপযোগী সংখ্যায় রূপান্তর করে (বাংলা/ইংরেজি যেকোনো ফরম্যাট সাপোর্ট করে)
 * @param {string|number} roll - রোল নম্বর
 * @returns {number} সংখ্যা মান (না থাকলে ৯৯৯৯৯৯)
 */
export function getNumericRoll(roll) {
  if (roll === null || roll === undefined || roll === '') return 999999;
  const clean = parseBnToEnNumber(String(roll)).replace(/\D/g, '');
  const num = parseInt(clean, 10);
  return isNaN(num) ? 999999 : num;
}


