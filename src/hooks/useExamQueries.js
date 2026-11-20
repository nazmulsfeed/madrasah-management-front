import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';
import { queryKeys } from '../lib/queryClient';
import { useTenantContext } from './useMetadataQueries';

/**
 * Custom Hook: useExams
 * Fetches exams list with institution and user scoping.
 *
 * @param {Object} params - Query parameters (academicYear, classLevel, examCategory, etc.)
 * @param {Object} options - TanStack Query options
 */
export const useExams = (params = {}, options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  const cleanParams = Object.entries(params).reduce((acc, [key, val]) => {
    if (val !== undefined && val !== null && val !== '') {
      acc[key] = typeof val === 'string' ? val.trim() : val;
    }
    return acc;
  }, {});

  return useQuery({
    queryKey: queryKeys.exams.list(institutionId, userId, cleanParams),
    queryFn: async ({ signal }) => {
      const res = await api.get('/exams', {
        params: cleanParams,
        signal,
      });
      return {
        exams: res.data?.data?.exams || [],
        raw: res.data,
      };
    },
    enabled: isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 5 * 60 * 1000,
    gcTime: options.gcTime ?? 30 * 60 * 1000,
    ...options,
  });
};
