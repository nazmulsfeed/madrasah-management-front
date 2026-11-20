import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';
import { queryKeys } from '../lib/queryClient';
import { useTenantContext } from './useMetadataQueries';

/**
 * Custom Hook: useStudents
 * Fetches paginated student list with comprehensive filtering support.
 *
 * @param {Object} params - Query parameters (page, limit, search, classLevel, section, sections, branch, department, residentialStatus, status, sortBy, sortOrder)
 * @param {Object} options - TanStack Query options (enabled, staleTime, select, etc.)
 */
export const useStudents = (params = {}, options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  // Normalize parameters to guarantee deterministic query key serializability
  const cleanParams = Object.entries(params).reduce((acc, [key, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      acc[key] = typeof val === 'string' ? val.trim() : val;
    }
    return acc;
  }, {});

  return useQuery({
    queryKey: queryKeys.students.list(institutionId, userId, cleanParams),
    queryFn: async ({ signal }) => {
      const res = await api.get('/students', {
        params: cleanParams,
        signal,
      });

      return {
        students: res.data?.data || [],
        pagination: res.data?.pagination || { total: 0, pages: 1, page: cleanParams.page || 1, limit: cleanParams.limit || 25 },
        raw: res.data,
      };
    },
    enabled: isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 2 * 60 * 1000, // 2 minutes freshness window
    gcTime: options.gcTime ?? 15 * 60 * 1000,
    ...options,
  });
};

/**
 * Custom Hook: useDeleteStudent
 * Deletes a single student record and invalidates student list & stats caches.
 */
export const useDeleteStudent = (options = {}) => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return useMutation({
    mutationFn: async (studentId) => {
      if (!studentId) throw new Error('Student ID is required for deletion');
      const res = await api.delete(`/students/${studentId}`);
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.lists(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.stats(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.summary(institutionId, userId),
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};

/**
 * Custom Hook: useBulkDeleteStudents
 * Deletes multiple students concurrently with settled outcome handling
 * and invalidates affected list queries.
 */
export const useBulkDeleteStudents = (options = {}) => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return useMutation({
    mutationFn: async (studentIds) => {
      if (!Array.isArray(studentIds) || studentIds.length === 0) {
        return { succeeded: [], failed: [], total: 0 };
      }

      const results = await Promise.allSettled(
        studentIds.map((id) => api.delete(`/students/${id}`))
      );

      const succeeded = [];
      const failed = [];

      results.forEach((res, index) => {
        const id = studentIds[index];
        if (res.status === 'fulfilled') {
          succeeded.push(id);
        } else {
          failed.push({
            id,
            error: res.reason?.response?.data?.message || res.reason?.message || 'মুছে ফেলা ব্যর্থ হয়েছে',
          });
        }
      });

      if (failed.length > 0 && succeeded.length === 0) {
        const firstError = failed[0].error;
        throw new Error(firstError);
      }

      return { succeeded, failed, total: studentIds.length };
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.lists(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.stats(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.summary(institutionId, userId),
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};

/**
 * Custom Hook: useStudent
 * Fetches single student record with full profile details.
 *
 * @param {string} studentId - Student MongoDB ID / Identifier
 * @param {Object} options - TanStack Query options
 */
export const useStudent = (studentId, options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  return useQuery({
    queryKey: queryKeys.students.detail(institutionId, userId, studentId),
    queryFn: async ({ signal }) => {
      if (!studentId) return null;
      const res = await api.get(`/students/${studentId}`, { signal });
      return res.data?.data?.student || null;
    },
    enabled: Boolean(studentId) && isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 2 * 60 * 1000,
    gcTime: options.gcTime ?? 15 * 60 * 1000,
    ...options,
  });
};

/**
 * Custom Hook: useUpdateStudent
 * Updates student profile details and invalidates affected caches.
 */
export const useUpdateStudent = (options = {}) => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return useMutation({
    mutationFn: async ({ id, data }) => {
      if (!id) throw new Error('Student ID is required for update');
      const res = await api.patch(`/students/${id}`, data);
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      const studentId = variables?.id;
      if (studentId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.students.detail(institutionId, userId, studentId),
        });
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.lists(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.stats(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.summary(institutionId, userId),
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};

/**
 * Custom Hook: useUpdateStudentPhoto
 * Updates or removes student profile photo.
 */
export const useUpdateStudentPhoto = (options = {}) => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return useMutation({
    mutationFn: async ({ id, photo }) => {
      if (!id) throw new Error('Student ID is required for photo update');
      const res = await api.patch(`/students/${id}/photo`, { photo });
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      const studentId = variables?.id;
      if (studentId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.students.detail(institutionId, userId, studentId),
        });
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.lists(institutionId, userId),
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};

/**
 * Custom Hook: useUpdateStudentFeeConfig
 * Updates custom monthly fee and discount notes for a student.
 */
export const useUpdateStudentFeeConfig = (options = {}) => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return useMutation({
    mutationFn: async ({ id, customMonthlyFee, feeDiscountNote }) => {
      if (!id) throw new Error('Student ID is required');
      const payload = {
        customMonthlyFee: customMonthlyFee === '' ? null : (customMonthlyFee === null ? null : Number(customMonthlyFee)),
        feeDiscountNote: typeof feeDiscountNote === 'string' ? feeDiscountNote.trim() : (feeDiscountNote || ''),
      };
      const res = await api.patch(`/students/${id}`, payload);
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      const studentId = variables?.id;
      if (studentId) {
        queryClient.invalidateQueries({
          queryKey: queryKeys.students.detail(institutionId, userId, studentId),
        });
        queryClient.invalidateQueries({
          queryKey: queryKeys.fees.invoices(institutionId, userId, { student: String(studentId) }),
        });
      }
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.lists(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.fees.all(institutionId, userId),
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};

/**
 * Custom Hook: useStudentAttendance
 * Fetches attendance records for a specific student.
 */
export const useStudentAttendance = (studentId, params = {}, options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();
  const limit = params?.limit || 100;

  return useQuery({
    queryKey: queryKeys.attendance.student(institutionId, userId, studentId, { limit }),
    queryFn: async ({ signal }) => {
      if (!studentId) return { records: [] };
      const res = await api.get('/attendance', {
        params: { student: studentId, limit },
        signal,
      });
      return {
        records: res.data?.data?.records || [],
        raw: res.data,
      };
    },
    enabled: Boolean(studentId) && isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 60 * 1000,
    gcTime: options.gcTime ?? 10 * 60 * 1000,
    ...options,
  });
};

/**
 * Custom Hook: useStudentFees
 * Fetches invoices and fee records for a specific student.
 */
export const useStudentFees = (studentId, options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  return useQuery({
    queryKey: queryKeys.fees.invoices(institutionId, userId, { student: String(studentId) }),
    queryFn: async ({ signal }) => {
      if (!studentId) return { invoices: [] };
      const res = await api.get('/finance/invoices', {
        params: { student: studentId },
        signal,
      });
      return {
        invoices: res.data?.data?.invoices || [],
        raw: res.data,
      };
    },
    enabled: Boolean(studentId) && isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 60 * 1000,
    gcTime: options.gcTime ?? 10 * 60 * 1000,
    ...options,
  });
};

/**
 * Custom Hook: useStudentPassword
 * On-demand password revelation mutation for privileged admins.
 * Intentionally avoids storing plaintext credentials in the global query cache.
 */
export const useStudentPassword = (options = {}) => {
  return useMutation({
    mutationFn: async (studentId) => {
      if (!studentId) throw new Error('Student ID is required');
      const res = await api.get(`/students/${studentId}/show-password`);
      return res.data?.data?.plainPassword || '(সেট হয়নি)';
    },
    ...options,
  });
};

/**
 * Custom Hook: useNextStudentId
 * Fetches the next available student ID and admission number based on gender.
 *
 * @param {string} gender - 'male' | 'female'
 * @param {Object} options - TanStack Query options
 */
export const useNextStudentId = (gender = 'male', options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();
  const normalizedGender = gender ? String(gender).toLowerCase() : 'male';

  return useQuery({
    queryKey: queryKeys.students.nextId(institutionId, userId, normalizedGender),
    queryFn: async ({ signal }) => {
      const res = await api.get('/students/next-student-id', {
        params: { gender: normalizedGender },
        signal,
      });
      return res.data?.data || null;
    },
    enabled: isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 30 * 1000,
    gcTime: options.gcTime ?? 5 * 60 * 1000,
    ...options,
  });
};

/**
 * Custom Hook: useNextRollNumber
 * Dynamically computes next roll number for a given class, section, and academic year.
 *
 * @param {Object} params - { classLevelId, sectionId, academicYearId }
 * @param {Object} options - TanStack Query options
 */
export const useNextRollNumber = (params = {}, options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  const isComplete = Boolean(params?.classLevelId && params?.sectionId && params?.academicYearId);

  const cleanParams = {
    classLevelId: params?.classLevelId || '',
    sectionId: params?.sectionId || '',
    academicYearId: params?.academicYearId || '',
  };

  return useQuery({
    queryKey: queryKeys.students.nextRoll(institutionId, userId, cleanParams),
    queryFn: async ({ signal }) => {
      if (!isComplete) return null;
      const res = await api.get('/students/next-roll', {
        params: cleanParams,
        signal,
      });
      return res.data?.data?.nextRollNumber ?? null;
    },
    enabled: isComplete && isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 30 * 1000,
    gcTime: options.gcTime ?? 5 * 60 * 1000,
    ...options,
  });
};

/**
 * Custom Hook: useCreateStudent
 * Creates a new student record and enrollment, then invalidates affected caches.
 */
export const useCreateStudent = (options = {}) => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return useMutation({
    mutationFn: async (submitData) => {
      const res = await api.post('/students', submitData);
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.lists(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.stats(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.summary(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.all(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.fees.all(institutionId, userId),
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};

/**
 * Custom Hook: usePromotionCandidates
 * Fetches eligible promotion candidates based on source academic year, class, and optional filters.
 *
 * @param {Object} params - { academicYear, classLevel, section, branch, department, residentialStatus, examId }
 * @param {Object} options - TanStack Query options
 */
export const usePromotionCandidates = (params = {}, options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  const isEnabled = Boolean(params?.academicYear && params?.classLevel);

  const cleanParams = Object.entries(params || {}).reduce((acc, [key, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      acc[key] = typeof val === 'string' ? val.trim() : val;
    }
    return acc;
  }, {});

  return useQuery({
    queryKey: queryKeys.students.promotionCandidates(institutionId, userId, cleanParams),
    queryFn: async ({ signal }) => {
      if (!isEnabled) return [];
      const res = await api.get('/students/promotion-candidates', {
        params: cleanParams,
        signal,
      });
      return res.data?.data?.candidates || [];
    },
    enabled: isEnabled && isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 60 * 1000,
    gcTime: options.gcTime ?? 10 * 60 * 1000,
    ...options,
  });
};

/**
 * Custom Hook: usePromoteStudents
 * Promotes or graduates a batch of students and synchronizes related caches.
 */
export const usePromoteStudents = (options = {}) => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return useMutation({
    mutationFn: async (payload) => {
      const res = await api.post('/students/promote', payload);
      return res.data;
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.all(institutionId, userId),
      });
      queryClient.invalidateQueries({
        queryKey: queryKeys.dashboard.summary(institutionId, userId),
      });
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: (error, variables, context) => {
      if (options.onError) {
        options.onError(error, variables, context);
      }
    },
    ...options,
  });
};

/**
 * Custom Hook: useInvalidateStudents
 * Helper for manual cache invalidation of student queries.
 */
export const useInvalidateStudents = () => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return {
    invalidateAll: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.all(institutionId, userId),
      }),
    invalidateLists: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.lists(institutionId, userId),
      }),
    invalidateDetail: (studentId) =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.detail(institutionId, userId, studentId),
      }),
    invalidateStats: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.students.stats(institutionId, userId),
      }),
    invalidateAttendance: (studentId) =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.attendance.student(institutionId, userId, studentId),
      }),
    invalidateFees: (studentId) =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.fees.invoices(institutionId, userId, { student: String(studentId) }),
      }),
    invalidateNextId: () =>
      queryClient.invalidateQueries({
        queryKey: [...queryKeys.students.all(institutionId, userId), 'next-id'],
      }),
    invalidateNextRoll: () =>
      queryClient.invalidateQueries({
        queryKey: [...queryKeys.students.all(institutionId, userId), 'next-roll'],
      }),
    invalidatePromotionCandidates: () =>
      queryClient.invalidateQueries({
        queryKey: [...queryKeys.students.all(institutionId, userId), 'promotion-candidates'],
      }),
  };
};
