import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InstallPrompt from './components/InstallPrompt';
import LoginPage from './pages/auth/LoginPage';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import StudentListPage from './pages/students/StudentListPage';
import StudentDetailPage from './pages/students/StudentDetailPage';
import StudentPromotionPage from './pages/students/StudentPromotionPage';
import StudentCreatePage from './pages/students/StudentCreatePage';


import HomeworkPage from './pages/homework/HomeworkPage';
import PublicHomeworkPage from './pages/homework/PublicHomeworkPage';
import TeacherListPage from './pages/teachers/TeacherListPage';
import TeacherAttendancePage from './pages/teachers/TeacherAttendancePage';
import GuardianListPage from './pages/guardians/GuardianListPage';
import AttendancePage from './pages/attendance/AttendancePage';
import AssemblyAttendancePage from './pages/attendance/AssemblyAttendancePage';
import BiometricAttendancePage from './pages/attendance/BiometricAttendancePage';
import ExamPage from './pages/exams/ExamPage';
import HifzPage from './pages/hifz/HifzPage';
import FeesPage from './pages/finance/FeesPage';
import FinanceReportsPage from './pages/finance/FinanceReportsPage';
import IncomeCategoriesPage from './pages/finance/IncomeCategoriesPage';
import AuditLogsPage from './pages/finance/AuditLogsPage';
import BankWalletsPage from './pages/finance/BankWalletsPage';
import IncomesPage from './pages/finance/IncomesPage';
import ChartOfAccountsPage from './pages/finance/ChartOfAccountsPage';
import ExpenseVouchersPage from './pages/finance/ExpenseVouchersPage';
import JournalLedgerPage from './pages/finance/JournalLedgerPage';
import DailyTransactionsPage from './pages/finance/DailyTransactionsPage';
import AccountingReportsPage from './pages/finance/AccountingReportsPage';
import BudgetManagementPage from './pages/finance/BudgetManagementPage';
import AssetManagementPage from './pages/finance/AssetManagementPage';
import LoanManagementPage from './pages/finance/LoanManagementPage';
import CheckManagementPage from './pages/finance/CheckManagementPage';
import FinancialYearPage from './pages/finance/FinancialYearPage';
import BankReconciliationPage from './pages/finance/BankReconciliationPage';
import AdvanceManagementPage from './pages/finance/AdvanceManagementPage';
import RefundManagementPage from './pages/finance/RefundManagementPage';
import SalaryManagementPage from './pages/finance/SalaryManagementPage';
import CustomReportsPage from './pages/finance/CustomReportsPage';
import BackupRestorePage from './pages/finance/BackupRestorePage';
import MadrasahFundsPage from './pages/finance/MadrasahFundsPage';
import QurbaniSkinsPage from './pages/finance/QurbaniSkinsPage';
import NoticesPage from './pages/notices/NoticesPage';
import AcademicsPage from './pages/academics/AcademicsPage';
import ClassSubjectsPage from './pages/academics/ClassSubjectsPage';
import MessagingPage from './pages/messaging/MessagingPage';
import LibraryPage from './pages/library/LibraryPage';
import HostelPage from './pages/hostel/HostelPage';
import SettingsPage from './pages/settings/SettingsPage';
import ProtectedRoute from './components/shared/ProtectedRoute';
import RoleRoute from './components/shared/RoleRoute';
import RoleManagementPage from './pages/admin/RoleManagementPage';
import ReportsPage from './pages/reports/ReportsPage';
import MyPaymentsPage from './pages/finance/MyPaymentsPage';
import PublicTimetablePage from './pages/public/PublicTimetablePage';
import PublicCalendarPage from './pages/public/PublicCalendarPage';

export default function App() {
  return (
    <BrowserRouter>
      <InstallPrompt />
      <Routes>
        {/* পাবলিক */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/public-homework" element={<PublicHomeworkPage />} />
        <Route path="/routine" element={<PublicTimetablePage />} />
        <Route path="/timetable" element={<PublicTimetablePage />} />
        <Route path="/calendar" element={<PublicCalendarPage />} />
        <Route path="/academic-calendar" element={<PublicCalendarPage />} />

        {/* ড্যাশবোর্ড (প্রোটেক্টেড) */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* সবার জন্য উন্মুক্ত রুট (রোল অনুযায়ী ফিল্টার করা তথ্য দেখায়) */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/homework" element={<HomeworkPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/assembly-attendance" element={<RoleRoute><AssemblyAttendancePage /></RoleRoute>} />
          <Route path="/exams" element={<ExamPage />} />
          <Route path="/hifz" element={<HifzPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/my-payments" element={<MyPaymentsPage />} />

          {/* অ্যাডমিন, শিক্ষক ও স্টাফদের জন্য সংরক্ষিত রুট (শিক্ষার্থী ও অভিভাবক সম্পূর্ণ নিষিদ্ধ) */}
          <Route path="/students" element={<RoleRoute><StudentListPage /></RoleRoute>} />
          <Route path="/students/promote" element={<RoleRoute><StudentPromotionPage /></RoleRoute>} />
          <Route path="/students/new" element={<RoleRoute><StudentCreatePage /></RoleRoute>} />
          <Route path="/students/:id" element={<StudentDetailPage />} />
          <Route path="/student-profile" element={<StudentDetailPage />} />

          <Route path="/teachers" element={<RoleRoute><TeacherListPage /></RoleRoute>} />
          <Route path="/teacher-attendance" element={<RoleRoute><TeacherAttendancePage /></RoleRoute>} />
          <Route path="/guardians" element={<RoleRoute><GuardianListPage /></RoleRoute>} />
          <Route path="/academics" element={<RoleRoute><AcademicsPage /></RoleRoute>} />
          <Route path="/academics/class-subjects" element={<RoleRoute><ClassSubjectsPage /></RoleRoute>} />

          {/* হিসাব ও অর্থ সংক্রান্ত রুটসমূহ */}
          <Route path="/fees" element={<RoleRoute><FeesPage /></RoleRoute>} />
          <Route path="/incomes" element={<RoleRoute><IncomesPage /></RoleRoute>} />
          <Route path="/finance/incomes" element={<RoleRoute><IncomesPage /></RoleRoute>} />
          <Route path="finance/incomes" element={<RoleRoute><IncomesPage /></RoleRoute>} />
          <Route path="/income-categories" element={<RoleRoute><IncomeCategoriesPage /></RoleRoute>} />
          <Route path="/finance/income-categories" element={<RoleRoute><IncomeCategoriesPage /></RoleRoute>} />
          <Route path="finance/income-categories" element={<RoleRoute><IncomeCategoriesPage /></RoleRoute>} />
          <Route path="/finance/audit-logs" element={<RoleRoute><AuditLogsPage /></RoleRoute>} />
          <Route path="finance/audit-logs" element={<RoleRoute><AuditLogsPage /></RoleRoute>} />
          <Route path="/finance/reports" element={<RoleRoute><FinanceReportsPage /></RoleRoute>} />
          <Route path="finance/reports" element={<RoleRoute><FinanceReportsPage /></RoleRoute>} />
          <Route path="/bank-wallets" element={<RoleRoute><BankWalletsPage /></RoleRoute>} />
          <Route path="/chart-of-accounts" element={<RoleRoute><ChartOfAccountsPage /></RoleRoute>} />
          <Route path="/expense-vouchers" element={<RoleRoute><ExpenseVouchersPage /></RoleRoute>} />
          <Route path="/journal-ledger" element={<RoleRoute><JournalLedgerPage /></RoleRoute>} />
          <Route path="/daily-transactions" element={<RoleRoute><DailyTransactionsPage /></RoleRoute>} />
          <Route path="/accounting-reports" element={<RoleRoute><AccountingReportsPage /></RoleRoute>} />
          <Route path="/budget-management" element={<RoleRoute><BudgetManagementPage /></RoleRoute>} />
          <Route path="/asset-management" element={<RoleRoute><AssetManagementPage /></RoleRoute>} />
          <Route path="/loan-management" element={<RoleRoute><LoanManagementPage /></RoleRoute>} />
          <Route path="/check-management" element={<RoleRoute><CheckManagementPage /></RoleRoute>} />
          <Route path="/financial-years" element={<RoleRoute><FinancialYearPage /></RoleRoute>} />
          <Route path="/bank-reconciliation" element={<RoleRoute><BankReconciliationPage /></RoleRoute>} />
          <Route path="/advance-management" element={<RoleRoute><AdvanceManagementPage /></RoleRoute>} />
          <Route path="/refund-management" element={<RoleRoute><RefundManagementPage /></RoleRoute>} />
          <Route path="/salary-management" element={<RoleRoute><SalaryManagementPage /></RoleRoute>} />
          <Route path="/salary" element={<RoleRoute><SalaryManagementPage /></RoleRoute>} />
          <Route path="/payroll" element={<RoleRoute><SalaryManagementPage /></RoleRoute>} />
          <Route path="/finance/custom-reports" element={<RoleRoute><CustomReportsPage /></RoleRoute>} />
          <Route path="/finance/backup-restore" element={<RoleRoute><BackupRestorePage /></RoleRoute>} />
          <Route path="/madrasah-funds" element={<RoleRoute><MadrasahFundsPage /></RoleRoute>} />
          <Route path="/qurbani-skins" element={<RoleRoute><QurbaniSkinsPage /></RoleRoute>} />

          {/* অন্যান্য অ্যাডমিন ও ব্যবস্থাপনা রুটসমূহ */}
          <Route path="/messaging" element={<RoleRoute><MessagingPage /></RoleRoute>} />
          <Route path="/library" element={<RoleRoute><LibraryPage /></RoleRoute>} />
          <Route path="/hostel" element={<RoleRoute><HostelPage /></RoleRoute>} />
          <Route path="/role-management" element={<RoleRoute allowedRoles={['super_admin', 'co_super_admin', 'admin']}><RoleManagementPage /></RoleRoute>} />
          <Route path="/biometric-attendance" element={<RoleRoute allowedRoles={['super_admin']}><BiometricAttendancePage /></RoleRoute>} />
          <Route path="/reports" element={<RoleRoute><ReportsPage /></RoleRoute>} />
        </Route>

        {/* রিডাইরেক্ট */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
