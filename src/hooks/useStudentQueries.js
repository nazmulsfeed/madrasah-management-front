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
  };
};
