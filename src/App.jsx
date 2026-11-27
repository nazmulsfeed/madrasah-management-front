import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InstallPrompt from './components/InstallPrompt';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from './components/shared/ProtectedRoute';
import RoleRoute from './components/shared/RoleRoute';
import ErrorBoundary from './components/common/ErrorBoundary';
import RouteLoadingFallback from './components/common/RouteLoadingFallback';

// ── পাবলিক পেজসমূহ (Lazy Loaded) ──
const LoginPage = lazy(() => import('./pages/auth/LoginPage'));
const PublicHomeworkPage = lazy(() => import('./pages/homework/PublicHomeworkPage'));
const PublicTimetablePage = lazy(() => import('./pages/public/PublicTimetablePage'));
const PublicCalendarPage = lazy(() => import('./pages/public/PublicCalendarPage'));

// ── ড্যাশবোর্ড ও কোর পেজসমূহ (Lazy Loaded) ──
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'));
const NoticesPage = lazy(() => import('./pages/notices/NoticesPage'));
const HomeworkPage = lazy(() => import('./pages/homework/HomeworkPage'));
const AttendancePage = lazy(() => import('./pages/attendance/AttendancePage'));
const AssemblyAttendancePage = lazy(() => import('./pages/attendance/AssemblyAttendancePage'));
const ExamPage = lazy(() => import('./pages/exams/ExamPage'));
const HifzPage = lazy(() => import('./pages/hifz/HifzPage'));
const SettingsPage = lazy(() => import('./pages/settings/SettingsPage'));
const MyPaymentsPage = lazy(() => import('./pages/finance/MyPaymentsPage'));
const HostelPage = lazy(() => import('./pages/hostel/HostelPage'));

// ── শিক্ষার্থী ব্যবস্থাপনা পেজসমূহ (Lazy Loaded) ──
const StudentListPage = lazy(() => import('./pages/students/StudentListPage'));
const StudentPromotionPage = lazy(() => import('./pages/students/StudentPromotionPage'));
const StudentCreatePage = lazy(() => import('./pages/students/StudentCreatePage'));
const StudentDetailPage = lazy(() => import('./pages/students/StudentDetailPage'));
const TransferCertificatePage = lazy(() => import('./pages/students/TransferCertificatePage'));

// ── শিক্ষক ও স্টাফ ব্যবস্থাপনা পেজসমূহ (Lazy Loaded) ──
const TeacherListPage = lazy(() => import('./pages/teachers/TeacherListPage'));
const TeacherAttendancePage = lazy(() => import('./pages/teachers/TeacherAttendancePage'));
const GuardianListPage = lazy(() => import('./pages/guardians/GuardianListPage'));

// ── একাডেমিক পেজসমূহ (Lazy Loaded) ──
const AcademicsPage = lazy(() => import('./pages/academics/AcademicsPage'));
const ClassSubjectsPage = lazy(() => import('./pages/academics/ClassSubjectsPage'));

// ── হিসাব ও অর্থ সংক্রান্ত পেজসমূহ (Lazy Loaded) ──
const FeesPage = lazy(() => import('./pages/finance/FeesPage'));
const IncomesPage = lazy(() => import('./pages/finance/IncomesPage'));
const IncomeCategoriesPage = lazy(() => import('./pages/finance/IncomeCategoriesPage'));
const AuditLogsPage = lazy(() => import('./pages/finance/AuditLogsPage'));
const FinanceReportsPage = lazy(() => import('./pages/finance/FinanceReportsPage'));
const BankWalletsPage = lazy(() => import('./pages/finance/BankWalletsPage'));
const ChartOfAccountsPage = lazy(() => import('./pages/finance/ChartOfAccountsPage'));
const ExpenseVouchersPage = lazy(() => import('./pages/finance/ExpenseVouchersPage'));
const JournalLedgerPage = lazy(() => import('./pages/finance/JournalLedgerPage'));
const DailyTransactionsPage = lazy(() => import('./pages/finance/DailyTransactionsPage'));
const AccountingReportsPage = lazy(() => import('./pages/finance/AccountingReportsPage'));
const BudgetManagementPage = lazy(() => import('./pages/finance/BudgetManagementPage'));
const AssetManagementPage = lazy(() => import('./pages/finance/AssetManagementPage'));
const LoanManagementPage = lazy(() => import('./pages/finance/LoanManagementPage'));
const CheckManagementPage = lazy(() => import('./pages/finance/CheckManagementPage'));
const FinancialYearPage = lazy(() => import('./pages/finance/FinancialYearPage'));
const BankReconciliationPage = lazy(() => import('./pages/finance/BankReconciliationPage'));
const AdvanceManagementPage = lazy(() => import('./pages/finance/AdvanceManagementPage'));
const RefundManagementPage = lazy(() => import('./pages/finance/RefundManagementPage'));
const SalaryManagementPage = lazy(() => import('./pages/finance/SalaryManagementPage'));
const CustomReportsPage = lazy(() => import('./pages/finance/CustomReportsPage'));
const BackupRestorePage = lazy(() => import('./pages/finance/BackupRestorePage'));
const MadrasahFundsPage = lazy(() => import('./pages/finance/MadrasahFundsPage'));
const QurbaniSkinsPage = lazy(() => import('./pages/finance/QurbaniSkinsPage'));
const ManualFeeChecklistPage = lazy(() => import('./pages/finance/ManualFeeChecklistPage'));

// ── অন্যান্য অ্যাডমিন ও ব্যবস্থাপনা পেজসমূহ (Lazy Loaded) ──
const MessagingPage = lazy(() => import('./pages/messaging/MessagingPage'));
const LibraryPage = lazy(() => import('./pages/library/LibraryPage'));
const RoleManagementPage = lazy(() => import('./pages/admin/RoleManagementPage'));
const BiometricAttendancePage = lazy(() => import('./pages/attendance/BiometricAttendancePage'));
const ReportsPage = lazy(() => import('./pages/reports/ReportsPage'));

export default function App() {
  return (
    <BrowserRouter>
      <InstallPrompt />
      <ErrorBoundary>
        <Suspense fallback={<RouteLoadingFallback fullScreen />}>
          <Routes>
            {/* পাবলিক */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/public-homework" element={<PublicHomeworkPage />} />

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
              <Route path="/routine" element={<PublicTimetablePage />} />
              <Route path="/timetable" element={<PublicTimetablePage />} />
              <Route path="/calendar" element={<PublicCalendarPage />} />
              <Route path="/academic-calendar" element={<PublicCalendarPage />} />
              <Route path="/notices" element={<NoticesPage />} />
              <Route path="/homework" element={<HomeworkPage />} />
              <Route path="/attendance" element={<AttendancePage />} />
              <Route path="/assembly-attendance" element={<RoleRoute><AssemblyAttendancePage /></RoleRoute>} />
              <Route path="/exams" element={<ExamPage />} />
              <Route path="/exam-routine" element={<ExamPage initialViewMode="routine" />} />
              <Route path="/admit-card" element={<ExamPage initialViewMode="admit_card" />} />
              <Route path="/hifz" element={<HifzPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/my-payments" element={<MyPaymentsPage />} />
              <Route path="/hostel" element={<HostelPage />} />

              {/* অ্যাডমিন, শিক্ষক ও স্টাফদের জন্য সংরক্ষিত রুট (শিক্ষার্থী ও অভিভাবক সম্পূর্ণ নিষিদ্ধ) */}
              <Route path="/students" element={<RoleRoute><StudentListPage /></RoleRoute>} />
              <Route path="/students/promote" element={<RoleRoute><StudentPromotionPage /></RoleRoute>} />
              <Route path="/students/new" element={<RoleRoute><StudentCreatePage /></RoleRoute>} />
              <Route path="/students/:id" element={<StudentDetailPage />} />
              <Route path="/transfer-certificates" element={<RoleRoute><TransferCertificatePage /></RoleRoute>} />
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
              <Route path="/manual-fee-checklist" element={<RoleRoute><ManualFeeChecklistPage /></RoleRoute>} />

              {/* অন্যান্য অ্যাডমিন ও ব্যবস্থাপনা রুটসমূহ */}
              <Route path="/messaging" element={<RoleRoute><MessagingPage /></RoleRoute>} />
              <Route path="/library" element={<RoleRoute><LibraryPage /></RoleRoute>} />
              <Route path="/role-management" element={<RoleRoute allowedRoles={['super_admin', 'co_super_admin', 'admin']}><RoleManagementPage /></RoleRoute>} />
              <Route path="/biometric-attendance" element={<RoleRoute allowedRoles={['super_admin']}><BiometricAttendancePage /></RoleRoute>} />
              <Route path="/reports" element={<RoleRoute><ReportsPage /></RoleRoute>} />
            </Route>

            {/* রিডাইরেক্ট */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
