import { create } from 'zustand';
import api from '../api/axios';
import useMetadataStore from './metadataStore';

const getSafeInitialUser = () => {
  try {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } catch (e) {
    localStorage.removeItem('user');
    return null;
  }
};

const getSafeInitialPermissions = () => {
  try {
    const perms = localStorage.getItem('userPermissions');
    return perms ? JSON.parse(perms) : {};
  } catch (e) {
    return {};
  }
};

let inFlightPermissionsPromise = null;

const useAuthStore = create((set, get) => ({
  user: getSafeInitialUser(),
  token: localStorage.getItem('token') || null,
  permissions: getSafeInitialPermissions(),
  permissionsLoaded: false,
  permissionsLoading: false,
  isLoading: false,
  error: null,

  fetchPermissions: async (force = false) => {
    // If already loaded in current session and not forced, return cached state
    if (get().permissionsLoaded && !force) {
      return get().permissions;
    }

    // Deduplicate in-flight requests (simultaneous mounts share the same promise)
    if (inFlightPermissionsPromise && !force) {
      return inFlightPermissionsPromise;
    }

    set({ permissionsLoading: true });

    inFlightPermissionsPromise = (async () => {
      try {
        const res = await api.get('/permissions/me');
        if (res.data?.success) {
          const perms = res.data.data || {};
          try {
            localStorage.setItem('userPermissions', JSON.stringify(perms));
          } catch (_) {}
          set({ permissions: perms, permissionsLoaded: true, permissionsLoading: false });
          return perms;
        }
      } catch (err) {
        console.warn('fetchPermissions error:', err);
      } finally {
        inFlightPermissionsPromise = null;
        set({ permissionsLoading: false });
      }
      return get().permissions;
    })();

    return inFlightPermissionsPromise;
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const res = await api.post('/auth/login', { email, password });
      const { token, user } = res.data.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.removeItem('userPermissions');
      if (user.permissions) {
        localStorage.setItem('userPermissions', JSON.stringify(user.permissions));
      }

      set({
        user,
        token,
        permissions: user.permissions || {},
        permissionsLoaded: Boolean(user.permissions),
        permissionsLoading: false,
        isLoading: false,
        error: null
      });
      useMetadataStore.getState().clearMetadata();
      return true;
    } catch (err) {
      const message = err.response?.data?.message || 'লগ ইন ব্যর্থ হয়েছে';
      set({ isLoading: false, error: message });
      return false;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userPermissions');
    inFlightPermissionsPromise = null;
    useMetadataStore.getState().clearMetadata();
    set({
      user: null,
      token: null,
      permissions: {},
      permissionsLoaded: false,
      permissionsLoading: false,
      error: null
    });
  },

  fetchMe: async () => {
    try {
      const res = await api.get('/auth/me');
      const user = res.data.data.user;
      localStorage.setItem('user', JSON.stringify(user));
      set({ user });
    } catch (err) {
      if (err.response?.status === 401) {
        get().logout();
      } else {
        console.warn('fetchMe non-auth error:', err);
      }
    }
  },

  clearError: () => set({ error: null }),

  isAuthenticated: () => !!get().token,

  getUserTypeLabel: () => {
    const user = get().user;
    if (!user) return '';

    const labels = {
      super_admin: 'সুপার অ্যাডমিন',
      co_super_admin: 'কো-সুপার অ্যাডমিন',
      admin: 'অ্যাডমিন',
      principal: 'প্রিন্সিপাল',
      vice_principal: 'ভাইস প্রিন্সিপাল',
      teacher: 'শিক্ষক',
      hifz_teacher: 'হিফজ শিক্ষক',
      accountant: 'হিসাবরক্ষক',
      admission_officer: 'ভর্তি কর্মকর্তা',
      hostel_manager: 'হোস্টেল ম্যানেজার',
      library_manager: 'লাইব্রেরি ম্যানেজার',
      student: 'ছাত্র/ছাত্রী',
      guardian: 'অভিভাবক',
    };

    const primaryType = user.userType;
    const adminRole = user.adminRole;

    const primaryLabel = labels[primaryType] || primaryType || '';

    // If primary role is super_admin, directly return it
    if (primaryType === 'super_admin') {
      return labels.super_admin;
    }

    // If has an extra adminRole and it's different from the primary role
    if (adminRole && adminRole !== primaryType) {
      const adminRoleLabel = labels[adminRole] || adminRole;
      if (primaryLabel) {
        return `${primaryLabel} + ${adminRoleLabel}`;
      }
      return adminRoleLabel;
    }

    return primaryLabel;
  },

  getMadrasahInfo: () => {
    const user = get().user;
    const inst = user?.institution && typeof user.institution === 'object' ? user.institution : null;
    const madrasahName = inst?.name || 'আন্-নূর ইসলামিক একাডেমি';
    let branchName = inst?.branchName || (user?.branch && typeof user.branch === 'object' ? user.branch.name : (user?.branch || ''));
    if (!branchName || branchName.trim() === '') {
      branchName = 'প্রধান শাখা';
    }

    return {
      madrasahName,
      branchName,
      phone: inst?.phone || '',
      email: inst?.email || '',
      address: inst?.address || '',
      logo: inst?.logo || '',
      registrationNumber: inst?.registrationNumber || '',
      website: inst?.website || '',
    };
  },

  updateProfile: async (profileData) => {
    set({ isLoading: true, error: null });
    try {
      const res = await api.patch('/auth/me', profileData);
      // Wait, we need to populate/keep the permissions and other things that local state needs.
      // Let's merge the updated properties into the existing user object so permissions are not lost!
      const currentUser = get().user || {};
      const updatedUser = { ...currentUser, ...res.data.data.user };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      set({ user: updatedUser, isLoading: false, error: null });
      return { success: true, message: 'প্রোফাইল সফলভাবে আপডেট করা হয়েছে' };
    } catch (err) {
      const message = err.response?.data?.message || 'প্রোফাইল আপডেট ব্যর্থ হয়েছে';
      set({ isLoading: false, error: message });
      return { success: false, message };
    }
  },

  updatePassword: async (passwordData) => {
    set({ isLoading: true, error: null });
    try {
      await api.put('/auth/password', passwordData);
      set({ isLoading: false, error: null });
      return { success: true, message: 'পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে' };
    } catch (err) {
      const message = err.response?.data?.message || 'পাসওয়ার্ড পরিবর্তন ব্যর্থ হয়েছে';
      set({ isLoading: false, error: message });
      return { success: false, message };
    }
  },
}));

export default useAuthStore;
