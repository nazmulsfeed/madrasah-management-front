export const permissionCategories = [
  {
    category: 'Student Management',
    permissions: [
      { key: 'student.view', label: 'View Students (ছাত্র/ছাত্রী দেখুন)' },
      { key: 'student.create', label: 'Create Student (নতুন ছাত্র/ছাত্রী)' },
      { key: 'student.update', label: 'Update Student (আপডেট করুন)' },
      { key: 'student.delete', label: 'Delete Student (ডিলিট করুন)' },
      { key: 'student.restore', label: 'Restore Student (রিস্টোর করুন)' },
      { key: 'student.approve', label: 'Approve Student (অনুমোদন করুন)' },
      { key: 'student.export', label: 'Export Students (এক্সপোর্ট করুন)' },
      { key: 'student.import', label: 'Import Students (ইমপোর্ট করুন)' },
      { key: 'student.transfer', label: 'Transfer Student (ট্রান্সফার করুন)' },
      { key: 'student.promote', label: 'Promote Student (প্রমোশন দিন)' },
      { key: 'student.archive', label: 'Archive Student (আর্কাইভ করুন)' },
      { key: 'student.documents.view', label: 'View Documents (ডকুমেন্ট দেখুন)' },
      { key: 'student.documents.manage', label: 'Manage Documents (ডকুমেন্ট পরিচালনা)' }
    ]
  },
  {
    category: 'Teacher Management',
    permissions: [
      { key: 'teacher.view', label: 'View Teachers (শিক্ষক দেখুন)' },
      { key: 'teacher.create', label: 'Create Teacher (নতুন শিক্ষক)' },
      { key: 'teacher.update', label: 'Update Teacher (আপডেট করুন)' },
      { key: 'teacher.delete', label: 'Delete Teacher (ডিলিট করুন)' },
      { key: 'teacher.assign_class', label: 'Assign Class (ক্লাস অ্যাসাইন)' },
      { key: 'teacher.assign_subject', label: 'Assign Subject (বিষয় অ্যাসাইন)' },
      { key: 'teacher.promote', label: 'Promote Teacher (প্রমোশন)' },
      { key: 'teacher.demote', label: 'Demote Teacher (ডিমোশন)' },
      { key: 'teacher.export', label: 'Export Teachers (এক্সপোর্ট করুন)' },
      { key: 'teacher.documents.view', label: 'View Documents (ডকুমেন্ট দেখুন)' },
      { key: 'teacher.documents.manage', label: 'Manage Documents (ডকুমেন্ট পরিচালনা)' }
    ]
  },
  {
    category: 'Admission',
    permissions: [
      { key: 'admission.view', label: 'View Admissions (ভর্তি দেখুন)' },
      { key: 'admission.create', label: 'Create Admission (নতুন ভর্তি)' },
      { key: 'admission.update', label: 'Update Admission (আপডেট করুন)' },
      { key: 'admission.delete', label: 'Delete Admission (ডিলিট করুন)' },
      { key: 'admission.approve', label: 'Approve Admission (অনুমোদন করুন)' },
      { key: 'admission.reject', label: 'Reject Admission (বাতিল করুন)' },
      { key: 'admission.export', label: 'Export Admissions (এক্সপোর্ট করুন)' },
      { key: 'admission.manage_documents', label: 'Manage Documents (ডকুমেন্ট পরিচালনা)' }
    ]
  },
  {
    category: 'Attendance',
    permissions: [
      { key: 'attendance.view', label: 'View Attendance (উপস্থিতি দেখুন)' },
      { key: 'attendance.create', label: 'Mark/Create Attendance (উপস্থিতি দিন)' },
      { key: 'attendance.update', label: 'Update Attendance (আপডেট করুন)' },
      { key: 'attendance.delete', label: 'Delete Attendance (ডিলিট করুন)' },
      { key: 'attendance.approve', label: 'Approve Attendance (অনুমোদন করুন)' },
      { key: 'attendance.export', label: 'Export Attendance (এক্সপোর্ট করুন)' },
      { key: 'attendance.report', label: 'View Reports (রিপোর্ট দেখুন)' }
    ]
  },
  {
    category: 'Academic & Class',
    permissions: [
      { key: 'class.view', label: 'View Classes (ক্লাস দেখুন)' },
      { key: 'class.create', label: 'Create Class (নতুন ক্লাস)' },
      { key: 'class.update', label: 'Update Class (আপডেট করুন)' },
      { key: 'class.delete', label: 'Delete Class (ডিলিট করুন)' },
      { key: 'subject.view', label: 'View Subjects (বিষয় দেখুন)' },
      { key: 'subject.create', label: 'Create Subject (নতুন বিষয়)' },
      { key: 'subject.update', label: 'Update Subject (আপডেট করুন)' },
      { key: 'subject.delete', label: 'Delete Subject (ডিলিট করুন)' },
      { key: 'class.assign_teacher', label: 'Assign Teacher (শিক্ষক অ্যাসাইন)' },
      { key: 'class.assign_student', label: 'Assign Student (ছাত্র অ্যাসাইন)' },
      { key: 'routine.view', label: 'View Routine (রুটিন দেখুন)' },
      { key: 'routine.create', label: 'Create Routine (নতুন রুটিন)' },
      { key: 'routine.update', label: 'Update Routine (আপডেট করুন)' },
      { key: 'routine.delete', label: 'Delete Routine (ডিলিট করুন)' }
    ]
  },
  {
    category: 'Fee Management',
    permissions: [
      { key: 'fee.view', label: 'View Fees (ফি দেখুন)' },
      { key: 'fee.create', label: 'Create Fee Type (নতুন ফি টাইপ)' },
      { key: 'fee.update', label: 'Update Fee Type (আপডেট করুন)' },
      { key: 'fee.delete', label: 'Delete Fee Type (ডিলিট করুন)' },
      { key: 'fee.assign', label: 'Assign Fees (ফি নির্ধারণ)' },
      { key: 'fee.approve', label: 'Approve Fees (অনুমোদন করুন)' },
      { key: 'fee.export', label: 'Export Fees (এক্সপোর্ট করুন)' },
      { key: 'fee.report', label: 'Fee Reports (রিপোর্ট)' }
    ]
  },
  {
    category: 'Student Fee / Assignment',
    permissions: [
      { key: 'student_fee.view', label: 'View Student Fees (ছাত্রের ফি দেখুন)' },
      { key: 'student_fee.create', label: 'Assign Fee to Student (ছাত্রকে ফি দিন)' },
      { key: 'student_fee.update', label: 'Update Student Fee (আপডেট করুন)' },
      { key: 'student_fee.delete', label: 'Delete Student Fee (ডিলিট করুন)' },
      { key: 'student_fee.adjust', label: 'Adjust Student Fee (অ্যাডজাস্ট করুন)' },
      { key: 'student_fee.discount', label: 'Apply Discount (ডিসকাউন্ট দিন)' },
      { key: 'student_fee.waiver', label: 'Apply Waiver (মওকুফ করুন)' },
      { key: 'student_fee.export', label: 'Export Student Fees (এক্সপোর্ট করুন)' }
    ]
  },
  {
    category: 'Payment Collection',
    permissions: [
      { key: 'payment.view', label: 'View Payments (পেমেন্ট দেখুন)' },
      { key: 'payment.create', label: 'Create Payment (নতুন পেমেন্ট)' },
      { key: 'payment.update', label: 'Update Payment (আপডেট করুন)' },
      { key: 'payment.delete', label: 'Delete Payment (ডিলিট করুন)' },
      { key: 'payment.collect', label: 'Collect Payment (পেমেন্ট গ্রহণ করুন)' },
      { key: 'payment.confirm', label: 'Confirm Payment (নিশ্চিত করুন)' },
      { key: 'payment.cancel', label: 'Cancel Payment (বাতিল করুন)' },
      { key: 'payment.approve', label: 'Approve Payment (অনুমোদন করুন)' },
      { key: 'payment.export', label: 'Export Payments (এক্সপোর্ট করুন)' },
      { key: 'payment.print_receipt', label: 'Print Receipt (রশিদ প্রিন্ট)' }
    ]
  },
  {
    category: 'Payment Transaction',
    permissions: [
      { key: 'transaction.view', label: 'View Transactions (লেনদেন দেখুন)' },
      { key: 'transaction.create', label: 'Create Transaction (নতুন লেনদেন)' },
      { key: 'transaction.update', label: 'Update Transaction (আপডেট করুন)' },
      { key: 'transaction.delete', label: 'Delete Transaction (ডিলিট করুন)' },
      { key: 'transaction.approve', label: 'Approve Transaction (অনুমোদন করুন)' },
      { key: 'transaction.cancel', label: 'Cancel Transaction (বাতিল করুন)' },
      { key: 'transaction.reverse', label: 'Reverse Transaction (রিভার্স করুন)' },
      { key: 'transaction.export', label: 'Export Transactions (এক্সপোর্ট করুন)' },
      { key: 'transaction.report', label: 'Transaction Reports (রিপোর্ট)' }
    ]
  },
  {
    category: 'Due Management',
    permissions: [
      { key: 'payment_due.view', label: 'View Dues (বকেয়া দেখুন)' },
      { key: 'payment_due.create', label: 'Create Due (নতুন বকেয়া)' },
      { key: 'payment_due.update', label: 'Update Due (আপডেট করুন)' },
      { key: 'payment_due.adjust', label: 'Adjust Due (অ্যাডজাস্ট করুন)' },
      { key: 'payment_due.waive', label: 'Waive Due (মওকুফ করুন)' },
      { key: 'payment_due.discount', label: 'Discount Due (ডিসকাউন্ট দিন)' },
      { key: 'payment_due.collect', label: 'Collect Due (বকেয়া গ্রহণ করুন)' },
      { key: 'payment_due.export', label: 'Export Dues (এক্সপোর্ট করুন)' },
      { key: 'payment_due.report', label: 'Due Reports (রিপোর্ট)' }
    ]
  },
  {
    category: 'Discount / Scholarship / Waiver',
    permissions: [
      { key: 'discount.view', label: 'View Discounts (ডিসকাউন্ট দেখুন)' },
      { key: 'discount.create', label: 'Create Discount (নতুন ডিসকাউন্ট)' },
      { key: 'discount.update', label: 'Update Discount (আপডেট করুন)' },
      { key: 'discount.delete', label: 'Delete Discount (ডিলিট করুন)' },
      { key: 'discount.approve', label: 'Approve Discount (অনুমোদন করুন)' },
      { key: 'scholarship.view', label: 'View Scholarships (বৃত্তি দেখুন)' },
      { key: 'scholarship.create', label: 'Create Scholarship (নতুন বৃত্তি)' },
      { key: 'scholarship.update', label: 'Update Scholarship (আপডেট করুন)' },
      { key: 'scholarship.delete', label: 'Delete Scholarship (ডিলিট করুন)' },
      { key: 'scholarship.approve', label: 'Approve Scholarship (অনুমোদন করুন)' },
      { key: 'waiver.view', label: 'View Waivers (মওকুফ দেখুন)' },
      { key: 'waiver.create', label: 'Create Waiver (নতুন মওকুফ)' },
      { key: 'waiver.update', label: 'Update Waiver (আপডেট করুন)' },
      { key: 'waiver.delete', label: 'Delete Waiver (ডিলিট করুন)' },
      { key: 'waiver.approve', label: 'Approve Waiver (অনুমোদন করুন)' }
    ]
  },
  {
    category: 'Refund',
    permissions: [
      { key: 'refund.view', label: 'View Refunds (রিফান্ড দেখুন)' },
      { key: 'refund.create', label: 'Create Refund (নতুন রিফান্ড)' },
      { key: 'refund.request', label: 'Request Refund (রিফান্ড রিকোয়েস্ট)' },
      { key: 'refund.approve', label: 'Approve Refund (অনুমোদন করুন)' },
      { key: 'refund.reject', label: 'Reject Refund (বাতিল করুন)' },
      { key: 'refund.process', label: 'Process Refund (প্রসেস করুন)' },
      { key: 'refund.cancel', label: 'Cancel Refund (ক্যান্সেল করুন)' },
      { key: 'refund.export', label: 'Export Refunds (এক্সপোর্ট করুন)' }
    ]
  },
  {
    category: 'Invoice & Receipt',
    permissions: [
      { key: 'invoice.view', label: 'View Invoices (ইনভয়েস দেখুন)' },
      { key: 'invoice.create', label: 'Create Invoice (নতুন ইনভয়েস)' },
      { key: 'invoice.update', label: 'Update Invoice (আপডেট করুন)' },
      { key: 'invoice.delete', label: 'Delete Invoice (ডিলিট করুন)' },
      { key: 'invoice.cancel', label: 'Cancel Invoice (বাতিল করুন)' },
      { key: 'invoice.generate', label: 'Generate Invoice (তৈরি করুন)' },
      { key: 'invoice.download', label: 'Download Invoice (ডাউনলোড করুন)' },
      { key: 'invoice.print', label: 'Print Invoice (প্রিন্ট করুন)' },
      { key: 'invoice.export', label: 'Export Invoices (এক্সপোর্ট করুন)' },
      { key: 'receipt.view', label: 'View Receipts (রশিদ দেখুন)' },
      { key: 'receipt.create', label: 'Create Receipt (নতুন রশিদ)' },
      { key: 'receipt.update', label: 'Update Receipt (আপডেট করুন)' },
      { key: 'receipt.delete', label: 'Delete Receipt (ডিলিট করুন)' },
      { key: 'receipt.generate', label: 'Generate Receipt (তৈরি করুন)' },
      { key: 'receipt.print', label: 'Print Receipt (প্রিন্ট করুন)' },
      { key: 'receipt.download', label: 'Download Receipt (ডাউনলোড করুন)' },
      { key: 'receipt.reprint', label: 'Reprint Receipt (রিপ্রিন্ট করুন)' }
    ]
  },
  {
    category: 'Payment Method & Gateway',
    permissions: [
      { key: 'payment_method.view', label: 'View Payment Methods (পেমেন্ট মেথড দেখুন)' },
      { key: 'payment_method.create', label: 'Create Payment Method (নতুন মেথড)' },
      { key: 'payment_method.update', label: 'Update Payment Method (আপডেট করুন)' },
      { key: 'payment_method.delete', label: 'Delete Payment Method (ডিলিট করুন)' },
      { key: 'payment_method.activate', label: 'Activate Payment Method (অ্যাক্টিভেট করুন)' },
      { key: 'payment_method.deactivate', label: 'Deactivate Payment Method (ডিঅ্যাক্টিভেট করুন)' },
      { key: 'gateway.view', label: 'View Gateway Settings (গেটওয়ে সেটিংস দেখুন)' },
      { key: 'gateway.create', label: 'Create Gateway (নতুন গেটওয়ে)' },
      { key: 'gateway.update', label: 'Update Gateway (আপডেট করুন)' },
      { key: 'gateway.delete', label: 'Delete Gateway (ডিলিট করুন)' },
      { key: 'gateway.configure', label: 'Configure Gateway (কনফিগার করুন)' },
      { key: 'gateway.activate', label: 'Activate Gateway (অ্যাক্টিভেট করুন)' },
      { key: 'gateway.deactivate', label: 'Deactivate Gateway (ডিঅ্যাক্টিভেট করুন)' },
      { key: 'gateway.test', label: 'Test Gateway (টেস্ট করুন)' }
    ]
  },
  {
    category: 'Financial Reports',
    permissions: [
      { key: 'financial_report.view', label: 'View Financial Reports (আর্থিক রিপোর্ট দেখুন)' },
      { key: 'financial_report.generate', label: 'Generate Financial Reports (রিপোর্ট তৈরি করুন)' },
      { key: 'financial_report.export', label: 'Export Financial Reports (এক্সপোর্ট করুন)' },
      { key: 'financial_report.print', label: 'Print Financial Reports (প্রিন্ট করুন)' }
    ]
  },
  {
    category: 'Role & User Management',
    permissions: [
      { key: 'role.view', label: 'View Roles (রোল দেখুন)' },
      { key: 'role.create', label: 'Create Role (নতুন রোল)' },
      { key: 'role.update', label: 'Update Role (আপডেট করুন)' },
      { key: 'role.delete', label: 'Delete Role (ডিলিট করুন)' },
      { key: 'role.assign', label: 'Assign Roles (রোল অ্যাসাইন করুন)' },
      { key: 'permission.view', label: 'View Permissions (পারমিশন দেখুন)' },
      { key: 'permission.update', label: 'Update Permissions (আপডেট করুন)' },
      { key: 'user.view', label: 'View Users (ব্যবহারকারী দেখুন)' },
      { key: 'user.create', label: 'Create User (নতুন ব্যবহারকারী)' },
      { key: 'user.update', label: 'Update User (আপডেট করুন)' },
      { key: 'user.delete', label: 'Delete User (ডিলিট করুন)' },
      { key: 'user.role.update', label: 'Update User Role (রোল পরিবর্তন করুন)' }
    ]
  },
  {
    category: 'Other Modules (Legacy/General)',
    permissions: [
      { key: 'notice.view', label: 'View Notices (নোটিশ দেখুন)' },
      { key: 'notice.create', label: 'Create Notice (নতুন নোটিশ)' },
      { key: 'notice.update', label: 'Update Notice (আপডেট করুন)' },
      { key: 'notice.delete', label: 'Delete Notice (ডিলিট করুন)' },
      { key: 'homework.view', label: 'View Homework (হোমওয়ার্ক দেখুন)' },
      { key: 'homework.create', label: 'Create Homework (নতুন হোমওয়ার্ক)' },
      { key: 'homework.update', label: 'Update Homework (আপডেট করুন)' },
      { key: 'homework.delete', label: 'Delete Homework (ডিলিট করুন)' },
      { key: 'homework.view_all', label: 'View All Homework (সকলের হোমওয়ার্ক দেখুন)' },
      { key: 'exam.view', label: 'View Exams (পরীক্ষা দেখুন)' },
      { key: 'exam.manage', label: 'Manage Exams (পরীক্ষা পরিচালনা)' },
      { key: 'exam.grade', label: 'Grade Exams (মার্কস দিন)' },
      { key: 'hifz.view', label: 'View Hifz (হিফজ দেখুন)' },
      { key: 'hifz.manage', label: 'Manage Hifz (হিফজ পরিচালনা)' },
      { key: 'hostel.view', label: 'View Hostel (হোস্টেল দেখুন)' },
      { key: 'hostel.manage', label: 'Manage Hostel (হোস্টেল পরিচালনা)' },
      { key: 'library.view', label: 'View Library (লাইব্রেরি দেখুন)' },
      { key: 'library.manage', label: 'Manage Library (লাইব্রেরি পরিচালনা)' },
      { key: 'system.settings.view', label: 'View Settings (সেটিংস দেখুন)' },
      { key: 'system.settings.update', label: 'Update Settings (আপডেট করুন)' },
      { key: 'messaging.use', label: 'Use Messaging (মেসেজিং ব্যবহার)' }
    ]
  }
];

export const allPermissionKeys = permissionCategories.flatMap(cat => cat.permissions.map(p => p.key));
