import api from '../api/axios';

const FALLBACK_VAPID_PUBLIC_KEY = 'BNVHR4Au94AbinB-C_b6GsIIWmEbYUY8j6C3GLICK6E32vct-L25B3riXMtwWDiv83CfvYykPCh3ObiobSeE0uk';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * ম্যানুয়ালি পারমিশন চেয়ে ইউজারের ডিভাইসে পুশ নোটিফিকেশন চালু করা
 */
export async function requestAndRegisterPushNotification(user) {
  if (typeof window === 'undefined') return { success: false, message: 'Window not defined' };
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    return { success: false, message: 'ব্রাউজার পুশ নোটিফিকেশন সাপোর্ট করে না।' };
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      return { success: false, message: 'নোটিফিকেশনের অনুমতি দেওয়া হয়নি (Permission Denied)। ব্রাউজার সেটিংস থেকে Allow করুন।' };
    }

    let reg;
    try {
      reg = await navigator.serviceWorker.ready;
    } catch {
      reg = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;
    }

    let sub = await reg.pushManager.getSubscription();

    let publicKey = FALLBACK_VAPID_PUBLIC_KEY;
    try {
      const keyRes = await api.get('/push/vapid-key');
      if (keyRes.data?.publicKey) {
        publicKey = keyRes.data.publicKey;
      }
    } catch {
      // fallback
    }

    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });
    }

    const subJSON = sub.toJSON();
    const userId = user?._id || user?.id;
    const studentId = user?.studentId || user?.student || user?.username;

    await api.post('/push/subscribe', {
      endpoint: subJSON.endpoint,
      keys: subJSON.keys,
      userId: userId ? String(userId) : undefined,
      studentId: studentId ? String(studentId) : undefined,
    });

    return { success: true, message: 'এই ফোনে নোটিফিকেশন সফলভাবে চালু ও সিঙ্ক হয়েছে! 🔔' };
  } catch (err) {
    console.error('Request push error:', err);
    return { success: false, message: err.message || 'পুশ চালু করতে সমস্যা হয়েছে।' };
  }
}

/**
 * লগইন করা ইউজার বা অভিভাবকের ডিভাইসে পুশ সাবস্ক্রিপশন অটোমেটিক সিঙ্ক করে
 * @param {object} user - 当前用户信息
 */
export async function autoRegisterPushNotification(user) {
  if (typeof window === 'undefined') return;
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) return;
  if (!user) return;

  try {
    // শুধুমাত্র পারমিশন 'granted' থাকলে স্বয়ংক্রিয়ভাবে সিঙ্ক করবে (ব্রাউজারে ব্লক থাকলে পপআপ জোর করবে না)
    if (Notification.permission !== 'granted') {
      return;
    }

    let reg;
    try {
      reg = await navigator.serviceWorker.ready;
    } catch {
      reg = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;
    }

    let sub = await reg.pushManager.getSubscription();

    let publicKey = FALLBACK_VAPID_PUBLIC_KEY;
    try {
      const keyRes = await api.get('/push/vapid-key');
      if (keyRes.data?.publicKey) {
        publicKey = keyRes.data.publicKey;
      }
    } catch {
      // fallback
    }

    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });
    }

    const subJSON = sub.toJSON();
    const userId = user._id || user.id;
    const studentId = user?.studentId || user?.student || user?.username;

    await api.post('/push/subscribe', {
      endpoint: subJSON.endpoint,
      keys: subJSON.keys,
      userId: userId ? String(userId) : undefined,
      studentId: studentId ? String(studentId) : undefined,
    });

    console.log('[Push Auto-Register] ✅ Synced push subscription for user:', userId);
  } catch (err) {
    console.warn('[Push Auto-Register] Sync notice:', err.message);
  }
}

/**
 * ডিভাইসে পুশ নোটিফিকেশন বন্ধ (আনসাবস্ক্রাইব) করা
 */
export async function unsubscribePushNotification() {
  if (typeof window === 'undefined') return { success: false, message: 'Window not defined' };
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    return { success: false, message: 'ব্রাউজার পুশ নোটিফিকেশন সাপোর্ট করে না।' };
  }
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      await sub.unsubscribe();
      try {
        await api.post('/push/unsubscribe', { endpoint: sub.endpoint });
      } catch (e) {
        console.error('[Push] Unsubscribe server call error:', e);
      }
    }
    return { success: true, message: 'নোটিফিকেশন বন্ধ করা হয়েছে।' };
  } catch (err) {
    console.error('Unsubscribe error:', err);
    return { success: false, message: err.message || 'নোটিফিকেশন বন্ধ করতে সমস্যা হয়েছে।' };
  }
}

/**
 * ব্রাউজারে বর্তমান পুশ নোটিফিকেশন স্ট্যাটাস চেক করা
 */
export async function checkPushSubscriptionStatus() {
  if (typeof window === 'undefined') return 'unsupported';
  if (!('Notification' in window) || !('serviceWorker' in navigator) || !('PushManager' in window)) {
    return 'unsupported';
  }
  if (Notification.permission === 'denied') return 'denied';
  if (Notification.permission === 'default') return 'default';
  try {
    const reg = await navigator.serviceWorker.ready;
    const sub = await reg.pushManager.getSubscription();
    return sub ? 'subscribed' : 'granted';
  } catch {
    return Notification.permission === 'granted' ? 'granted' : 'default';
  }
}
