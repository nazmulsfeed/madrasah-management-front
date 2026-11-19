import { QueryClient } from '@tanstack/react-query';

/**
 * Central TanStack Query v5 Client Configuration
 *
 * Configured according to the Madrasah Management System cache architecture:
 * - staleTime: 5 minutes (display cached data immediately)
 * - gcTime: 30 minutes (replaces cacheTime in v5, manages in-memory lifetime)
 * - retry: 1 (fast failover, avoids cascading retries)
 * - refetchOnWindowFocus: false (avoids noisy background refetches during office workflows)
 * - refetchOnReconnect: true (ensures freshness when internet is restored)
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 30 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

/**
 * cancelAndClearQueries — Coordinated asynchronous teardown
 * 1. Cancels all in-flight queries and signals DOM AbortControllers
 * 2. Immediately clears the queryCache, mutationCache, and query observers synchronously
 * 3. Awaits complete settlement of pending cancellation promises
 */
export const cancelAndClearQueries = async () => {
  try {
    const cancelPromise = queryClient.cancelQueries();
    queryClient.clear();
    await cancelPromise;
  } catch (err) {
    console.warn('TanStack cancelQueries warning:', err);
  } finally {
    queryClient.clear();
  }
};

/**
 * cancelAndClearQueriesSync — Immediate synchronous teardown
 * Cancels active observers and wipes the query cache in a single synchronous tick.
 */
export const cancelAndClearQueriesSync = () => {
  try {
    queryClient.cancelQueries();
  } catch (err) {
    console.warn('TanStack cancelQueries warning:', err);
  }
  queryClient.clear();
};

/**
 * Scoped Query Key Factory
 *
 * Strictly isolates multi-tenant institution data and user-specific data.
 * Rule: Authenticated queries never fall back to a shared 'global' key.
 * If institutionId or userId is missing, 'unassigned' is used, which never collides with valid tenant IDs.
 */
export const queryKeys = {
  institution: (instId) => ['institution', instId ? String(instId) : 'unassigned'],
  user: (userId) => ['user', userId ? String(userId) : 'unassigned'],

  // Public unauthenticated endpoints
  public: {
    all: () => ['public'],
    timetable: (code) => ['public', 'timetable', code ? String(code) : 'all'],
    calendar: () => ['public', 'calendar'],
    homework: () => ['public', 'homework'],
  },

  // Institution-wide metadata (classes, sections, branches, academic years)
  metadata: {
    all: (instId) => [...queryKeys.institution(instId), 'metadata'],
    classes: (instId) => [...queryKeys.metadata.all(instId), 'classes'],
    sections: (instId) => [...queryKeys.metadata.all(instId), 'sections'],
    branches: (instId) => [...queryKeys.metadata.all(instId), 'branches'],
    academicYears: (instId) => [...queryKeys.metadata.all(instId), 'academicYears'],
  },

  // User & Institution scoped entities (role-restricted views)
  dashboard: {
    all: (instId, userId) => [...queryKeys.institution(instId), ...queryKeys.user(userId), 'dashboard'],
    summary: (instId, userId) => [...queryKeys.dashboard.all(instId, userId), 'summary'],
  },

  students: {
    all: (instId, userId) => [...queryKeys.institution(instId), ...queryKeys.user(userId), 'students'],
    list: (instId, userId, params) => [...queryKeys.students.all(instId, userId), 'list', params || {}],
    detail: (instId, userId, studentId) => [...queryKeys.students.all(instId, userId), 'detail', String(studentId)],
  },

  attendance: {
    all: (instId, userId) => [...queryKeys.institution(instId), ...queryKeys.user(userId), 'attendance'],
    daily: (instId, userId, params) => [...queryKeys.attendance.all(instId, userId), 'daily', params || {}],
    matrix: (instId, userId, params) => [...queryKeys.attendance.all(instId, userId), 'matrix', params || {}],
  },

  fees: {
    all: (instId, userId) => [...queryKeys.institution(instId), ...queryKeys.user(userId), 'fees'],
    invoices: (instId, userId, params) => [...queryKeys.fees.all(instId, userId), 'invoices', params || {}],
    pending: (instId, userId, params) => [...queryKeys.fees.all(instId, userId), 'pending', params || {}],
  },
};

export default queryClient;
