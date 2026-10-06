import {
  LayoutDashboard,
  GraduationCap,
  Users,
  UserCheck,
  BookOpen,
  BookOpenCheck,
  ClipboardCheck,
  FileText,
  CreditCard,
  Wallet,
  Activity,
  List,
  Book,
  PieChart,
  Target,
  Package,
  HandCoins,
  Undo2,
  Briefcase,
  Calendar,
  Clock,
  BarChart2,
  Filter,
  Database,
  Shield,
  Star,
  Bell,
  MessageSquare,
  Library,
  Home,
  Settings,
  Cpu,
} from 'lucide-react';

export const RAW_MENU_GROUPS = [
  {
    group: 'প্রধান',
    items: [
      { path: '/dashboard', label: 'ড্যাশবোর্ড', icon: LayoutDashboard, color: '#0d9488' },
    ],
  },
  {
    group: 'শিক্ষা ব্যবস্থাপনা',
    items: [
      { path: '/students', label: 'ছাত্র/ছাত্রী', icon: GraduationCap, color: '#0284c7' },
      { path: '/teachers', label: 'শিক্ষকমণ্ডলী ও স্টাফ', icon: Users, color: '#2563eb' },
      { path: '/teacher-attendance', label: 'শিক্ষক হাজিরা', icon: UserCheck, color: '#0891b2' },
      { path: '/guardians', label: 'অভিভাবক', icon: UserCheck, color: '#4f46e5' },
      { path: '/academics', label: 'একাডেমিক', icon: BookOpen, color: '#7c3aed' },
      { path: '/academics/class-subjects', label: 'শ্রেণি বিষয় ম্যাপিং', icon: BookOpenCheck, color: '#9333ea' },
      { path: '/routine', label: 'ক্লাস রুটিন', icon: Clock, color: '#0d9488' },
      { path: '/calendar', label: 'একাডেমিক ক্যালেন্ডার', icon: Calendar, color: '#7c3aed' },
      { path: '/attendance', label: 'ছাত্রছাত্রী উপস্থিতি', icon: ClipboardCheck, color: '#16a34a' },
      { path: '/assembly-attendance', label: 'সমাবেশ উপস্থিতি', icon: Users, color: '#059669' },
      { path: '/homework', label: 'হোমওয়ার্ক', icon: FileText, color: '#ca8a04' },
      { path: '/exams', label: 'পরীক্ষা ও ফলাফল', icon: FileText, color: '#ea580c' },
      { path: '/hifz', label: 'হিফজ অগ্রগতি', icon: BookOpenCheck, color: '#059669' },
    ],
  },
  {
    group: 'আর্থিক',
    items: [
      { path: '/my-payments', label: 'আমার পেমেন্ট', icon: CreditCard, color: '#0284c7' },
      { path: '/fees', label: 'ফি / বেতন', icon: CreditCard, color: '#0d9488' },
      { path: '/bank-wallets', label: 'ব্যাংক ও ওয়ালেট', icon: Wallet, color: '#2563eb' },
      { path: '/daily-transactions', label: 'দৈনিক লেনদেন (Cash Book)', icon: Activity, color: '#16a34a' },
      { path: '/income-categories', label: 'আয়ের খাত', icon: List, color: '#059669' },
      { path: '/incomes', label: 'অন্যান্য আয়', icon: Wallet, color: '#0d9488' },
      { path: '/expense-vouchers', label: 'ব্যয় ও ভাউচার', icon: FileText, color: '#dc2626' },
      { path: '/salary-management', label: 'শিক্ষক-স্টাফ বেতন (Payroll)', icon: CreditCard, color: '#0d9488' },
      { path: '/chart-of-accounts', label: 'Chart of Accounts', icon: BookOpen, color: '#7c3aed' },
      { path: '/journal-ledger', label: 'জার্নাল ও লেজার', icon: Book, color: '#4f46e5' },
      { path: '/accounting-reports', label: 'অ্যাকাউন্টিং রিপোর্টস', icon: PieChart, color: '#ea580c' },
      { path: '/budget-management', label: 'বাজেট ব্যবস্থাপনা', icon: Target, color: '#ca8a04' },
      { path: '/asset-management', label: 'সম্পদ ব্যবস্থাপনা', icon: Package, color: '#d97706' },
      { path: '/loan-management', label: 'ঋণ ও পাওনা-দেনা', icon: CreditCard, color: '#e11d48' },
      { path: '/check-management', label: 'চেক ব্যবস্থাপনা', icon: FileText, color: '#475569' },
      { path: '/advance-management', label: 'অগ্রিম ও সমন্বয়', icon: HandCoins, color: '#0284c7' },
      { path: '/refund-management', label: 'রিফান্ড', icon: Undo2, color: '#9333ea' },
      { path: '/bank-reconciliation', label: 'ব্যাংক Reconciliation', icon: Briefcase, color: '#059669' },
      { path: '/financial-years', label: 'Financial Year', icon: Calendar, color: '#64748b' },
      { path: '/finance/reports', label: 'আর্থিক রিপোর্ট', icon: BarChart2, color: '#2563eb' },
      { path: '/finance/custom-reports', label: 'কাস্টম রিপোর্ট', icon: Filter, color: '#0d9488' },
      { path: '/finance/backup-restore', label: 'ব্যাকআপ ও রিস্টোর', icon: Database, color: '#475569' },
      { path: '/finance/audit-logs', label: 'অডিট লগ', icon: Shield, color: '#64748b' },
    ],
  },
  {
    group: 'মাদ্রাসা বিশেষ',
    items: [
      { path: '/madrasah-funds', label: 'তহবিল ব্যবস্থাপনা', icon: Star, color: '#eab308' },
      { path: '/qurbani-skins', label: 'কুরবানির চামড়া হিসাব', icon: Package, color: '#d97706' },
    ],
  },
  {
    group: 'যোগাযোগ',
    items: [
      { path: '/notices', label: 'নোটিশ', icon: Bell, color: '#e11d48' },
      { path: '/messaging', label: 'মেসেজিং', icon: MessageSquare, color: '#0284c7' },
    ],
  },
  {
    group: 'অন্যান্য',
    items: [
      { path: '/library', label: 'লাইব্রেরি', icon: Library, color: '#7c3aed' },
      { path: '/hostel', label: 'হোস্টেল', icon: Home, color: '#d97706' },
      { path: '/settings', label: 'সেটিংস', icon: Settings, color: '#64748b' },
    ],
  },
];

export function getVisibleNavigation(user, permissions = {}) {
  const isSuperOrAdmin =
    ['super_admin', 'co_super_admin', 'admin', 'principal'].includes(user?.userType) ||
    ['co_super_admin', 'admin', 'principal'].includes(user?.adminRole);

  const isGuardianOrStudent = user?.userType === 'guardian' || user?.userType === 'student';

  const visibleGroups = RAW_MENU_GROUPS.map((group) => {
    let items = group.items.filter((item) => {
      if (item.path === '/students') {
        if (isSuperOrAdmin) return true;
        if (isGuardianOrStudent) return true;
        return Boolean(permissions.can_view_students || permissions['student.view']);
      }

      if (item.path === '/teachers') {
        if (isSuperOrAdmin) return true;
        if (isGuardianOrStudent) return false;
        return Boolean(permissions.can_view_users || permissions['teacher.view'] || permissions['user.view']);
      }

      if (item.path === '/guardians') {
        if (isSuperOrAdmin) return true;
        if (isGuardianOrStudent) return false;
        return permissions.can_view_users || permissions.can_communicate_parents;
      }

      if (item.path === '/academics' || item.path === '/academics/class-subjects') {
        if (isSuperOrAdmin) return true;
        if (isGuardianOrStudent) return false;
        return permissions.can_add_syllabus || permissions.can_view_users;
      }

      if (item.path === '/routine' || item.path === '/calendar') {
        return true; // সবার জন্য উন্মুক্ত (সুপার এডমিন, এডমিন, শিক্ষক, অভিভাবক, শিক্ষার্থী সবাই সাইডবার ও ড্যাশবোর্ডে দেখতে পাবে)
      }

      if (item.path === '/attendance' || item.path === '/assembly-attendance') {
        if (isSuperOrAdmin) return true;
        return permissions.can_view_all_attendance || permissions.can_mark_attendance || permissions.can_view_attendance;
      }

      if (item.path === '/teacher-attendance') {
        if (isSuperOrAdmin) return true;
        return permissions.can_view_teacher_list || permissions.can_manage_teachers;
      }

      if (item.path === '/exams') {
        if (isSuperOrAdmin) return true;
        return permissions.can_view_exams || permissions.can_manage_exams || permissions.can_grade_exams;
      }

      if (item.path === '/messaging') {
        if (isSuperOrAdmin) return true;
        return permissions.can_use_messaging;
      }

      if (item.path === '/hifz') {
        if (isSuperOrAdmin || permissions.can_manage_hifz) return true;
        if (isGuardianOrStudent) return user?.isHifzEligible;
        return false;
      }

      if (item.path === '/homework') {
        if (isSuperOrAdmin) return true;
        return permissions.can_view_homework || permissions.can_view_all_homework;
      }

      if (item.path === '/my-payments') {
        return isGuardianOrStudent;
      }

      const financePaths = [
        '/fees',
        '/bank-wallets',
        '/daily-transactions',
        '/income-categories',
        '/incomes',
        '/expense-vouchers',
        '/salary-management',
        '/chart-of-accounts',
        '/journal-ledger',
        '/accounting-reports',
        '/budget-management',
        '/asset-management',
        '/loan-management',
        '/check-management',
        '/advance-management',
        '/refund-management',
        '/bank-reconciliation',
        '/financial-years',
        '/madrasah-funds',
        '/qurbani-skins',
        '/finance/reports',
        '/finance/custom-reports',
        '/finance/backup-restore',
        '/finance/audit-logs',
      ];

      if (financePaths.includes(item.path)) {
        const hasFinanceAccess =
          isSuperOrAdmin ||
          user?.userType === 'principal' ||
          user?.userType === 'accountant' ||
          (permissions && permissions.finance && permissions.finance.view);
        if (!hasFinanceAccess) return false;
      }

      if (item.path === '/notices') {
        if (isSuperOrAdmin) return true;
        return permissions.can_view_notice;
      }

      if (item.path === '/library') {
        if (isSuperOrAdmin) return true;
        return permissions.can_view_library;
      }

      if (item.path === '/hostel') {
        if (isSuperOrAdmin) return true;
        return permissions.can_view_hostel;
      }

      if (item.path === '/settings') {
        return true;
      }

      return true;
    });

    if (group.group === 'অন্যান্য') {
      const isSuperAdminOnly = user?.userType === 'super_admin';
      if (isSuperAdminOnly) {
        items = [
          ...items,
          { path: '/biometric-attendance', label: 'ZKTeco বায়োমেট্রিক সিস্টেম', icon: Cpu, color: '#10b981' },
        ];
      }
      if (isSuperOrAdmin) {
        items = [
          ...items,
          { path: '/reports', label: 'রিপোর্ট ও বিশ্লেষণ', icon: BarChart2, color: '#0284c7' },
          { path: '/role-management', label: 'রোল ও পারমিশন', icon: Shield, color: '#6366f1' },
        ];
      } else if (permissions.can_view_reports) {
        items = [...items, { path: '/reports', label: 'রিপোর্ট ও বিশ্লেষণ', icon: BarChart2, color: '#0284c7' }];
      }
    }

    // Map labels for student / guardian
    const mappedItems = items.map((item) => {
      if (item.path === '/students' && isGuardianOrStudent) {
        return {
          ...item,
          path: '/student-profile',
          label: user?.userType === 'guardian' ? 'সন্তানের প্রোফাইল' : 'আমার প্রোফাইল',
        };
      }
      return item;
    });

    return {
      group: group.group,
      items: mappedItems,
    };
  }).filter((g) => g.items.length > 0);

  return visibleGroups;
}
