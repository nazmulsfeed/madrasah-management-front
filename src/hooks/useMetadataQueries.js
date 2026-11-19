import { useQuery, useQueryClient } from '@tanstack/react-query';
import api from '../api/axios';
import useAuthStore from '../store/authStore';
import { queryKeys } from '../lib/queryClient';

/**
 * Helper to safely resolve current tenant & user identity from authStore.
 * Guarantees that unauthenticated sessions or missing tenant IDs never fall back
 * to a shared 'global' key.
 */
export const useTenantContext = () => {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const institutionId = user?.institutionId || user?.institution?._id || user?.institution || 'unassigned';
  const userId = user?._id || user?.id || 'unassigned';
  const isAuthenticated = Boolean(token && user && (user._id || user.id));

  return {
    institutionId: String(institutionId),
    userId: String(userId),
    isAuthenticated,
    user,
  };
};

/**
 * Filter sections by classLevelId in-memory.
 * Preserves exact 1:1 backward-compatibility with metadataStore.getSectionsByClass():
 * - Supports object classLevel ({ _id, id, name, code }) and string classLevel.
 * - Handles null, undefined, '', and 'all'.
 * - Performs pure in-memory transformation without network overhead.
 */
export const filterSectionsByClass = (sections = [], classLevelId) => {
  if (!Array.isArray(sections)) return [];
  if (!classLevelId || classLevelId === 'all') {
    return sections;
  }
  const target = String(classLevelId).trim();
  return sections.filter((s) => {
    const cVal = s?.classLevel;
    if (!cVal) return false;
    if (typeof cVal === 'object') {
      const cId = cVal._id || cVal.id;
      const cName = cVal.name;
      const cCode = cVal.code;
      return (
        (cId && String(cId).trim() === target) ||
        (cName && String(cName).trim() === target) ||
        (cCode && String(cCode).trim() === target)
      );
    }
    return String(cVal).trim() === target;
  });
};

/**
 * Hook: useClasses
 * Fetches all academic classes for the current tenant.
 */
export const useClasses = (options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  return useQuery({
    queryKey: queryKeys.metadata.classes(institutionId, userId),
    queryFn: async ({ signal }) => {
      const res = await api.get('/students/classes', { signal });
      return res.data?.data?.classes || [];
    },
    enabled: isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 5 * 60 * 1000,
    gcTime: options.gcTime ?? 30 * 60 * 1000,
    ...options,
  });
};

/**
 * Hook: useSections
 * Fetches all sections for the current tenant.
 */
export const useSections = (options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  return useQuery({
    queryKey: queryKeys.metadata.sections(institutionId, userId),
    queryFn: async ({ signal }) => {
      const res = await api.get('/students/sections', { signal });
      return res.data?.data?.sections || [];
    },
    enabled: isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 5 * 60 * 1000,
    gcTime: options.gcTime ?? 30 * 60 * 1000,
    ...options,
  });
};

/**
 * Hook: useSectionsByClass
 * Dependent query for sections matching a given classLevelId.
 * Leverages TanStack Query's `select` option to filter from the cached sections
 * array in-memory without making an extra network request.
 */
export const useSectionsByClass = (classLevelId, options = {}) => {
  const customSelect = options.select;

  return useSections({
    ...options,
    select: (sections) => {
      const filtered = filterSectionsByClass(sections, classLevelId);
      return customSelect ? customSelect(filtered) : filtered;
    },
  });
};

/**
 * Hook: useBranches
 * Fetches all branches for the current tenant.
 */
export const useBranches = (options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  return useQuery({
    queryKey: queryKeys.metadata.branches(institutionId, userId),
    queryFn: async ({ signal }) => {
      const res = await api.get('/students/branches', { signal });
      return res.data?.data?.branches || [];
    },
    enabled: isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 5 * 60 * 1000,
    gcTime: options.gcTime ?? 30 * 60 * 1000,
    ...options,
  });
};

/**
 * Hook: useAcademicYears
 * Fetches all academic years for the current tenant.
 */
export const useAcademicYears = (options = {}) => {
  const { institutionId, userId, isAuthenticated } = useTenantContext();

  return useQuery({
    queryKey: queryKeys.metadata.academicYears(institutionId, userId),
    queryFn: async ({ signal }) => {
      const res = await api.get('/students/academic-years', { signal });
      return res.data?.data?.academicYears || [];
    },
    enabled: isAuthenticated && (options.enabled ?? true),
    staleTime: options.staleTime ?? 5 * 60 * 1000,
    gcTime: options.gcTime ?? 30 * 60 * 1000,
    ...options,
  });
};

/**
 * Hook: useInvalidateMetadata
 * Invalidation helpers for refreshing cached metadata when changes are made.
 */
export const useInvalidateMetadata = () => {
  const queryClient = useQueryClient();
  const { institutionId, userId } = useTenantContext();

  return {
    invalidateAll: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.metadata.all(institutionId, userId),
      }),
    invalidateClasses: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.metadata.classes(institutionId, userId),
      }),
    invalidateSections: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.metadata.sections(institutionId, userId),
      }),
    invalidateBranches: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.metadata.branches(institutionId, userId),
      }),
    invalidateAcademicYears: () =>
      queryClient.invalidateQueries({
        queryKey: queryKeys.metadata.academicYears(institutionId, userId),
      }),
  };
};
