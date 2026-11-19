import axios from 'axios';
import { cancelAndClearQueries } from '../lib/queryClient';

const getBaseURL = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  const pathname = window.location.pathname;
  // If hosted under cPanel temp subdirectory, route to port 5000 directly
  if (pathname.includes('/~annurisl')) {
    return 'http://144.217.68.82:5000/api/v1';
  }
  // Default relative API path for local dev proxy and production domain root
  return '/api/v1';
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor — token যোগ
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — 401 হলে logout ও কোয়েরি ক্যাশ ক্লিয়ারিং
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // AbortSignal দ্বারা ক্যানসেল হওয়া রিকোয়েস্ট কোনো অথ ফেইলিওর নয়, বরং ইচ্ছাকৃত অ্যাবোর্ট
    if (axios.isCancel(error) || error?.name === 'CanceledError') {
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      // সেশন অবৈধ হলে ইন-ফ্লাইট কোয়েরি ক্যানসেল এবং সম্পূর্ণ ক্যাশ ক্লিয়ার করা
      cancelAndClearQueries();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('userPermissions');
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
