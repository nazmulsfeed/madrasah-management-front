import { useEffect, useCallback } from 'react';
import useAuthStore from '../store/authStore';

/**
 * usePermissions — Centralized permission management hook.
 * Deduplicates in-flight calls and eliminates redundant /permissions/me requests
 * across DashboardLayout, DashboardPage, StudentListPage, TeacherListPage, SettingsPage, etc.
 */
export default function usePermissions() {
  const user = useAuthStore(state => state.user);
  const permissions = useAuthStore(state => state.permissions);
  const permissionsLoaded = useAuthStore(state => state.permissionsLoaded);
  const permissionsLoading = useAuthStore(state => state.permissionsLoading);
  const fetchPermissions = useAuthStore(state => state.fetchPermissions);

  useEffect(() => {
    if (user && !permissionsLoaded && !permissionsLoading) {
      fetchPermissions();
    }
  }, [user, permissionsLoaded, permissionsLoading, fetchPermissions]);

  const hasPermission = useCallback((key) => {
    return Boolean(permissions?.[key]);
  }, [permissions]);

  return {
    permissions,
    myPermissions: permissions, // backward-compatible alias
    hasPermission,
    isLoading: permissionsLoading,
    fetchPermissions
  };
}
