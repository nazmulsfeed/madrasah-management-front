import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Play, Pause, RotateCcw, RotateCw, Share2, X, Volume2,
  Bell, Sparkles, AlertTriangle, Check, BookOpen, CreditCard
} from 'lucide-react';
import api from '../../api/axios';
import useAuthStore from '../../store/authStore';

function formatAudioTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}

function NasihotAudioPlayer({ item }) {
  const audioRef = useRef(null);
  const blobUrlRef = useRef(null);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [usingSpeechFallback, setUsingSpeechFallback] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [item.id]);

  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 0.75];
    const next = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    setSpeed(next);
    if (audioRef.current) {
      audioRef.current.playbackRate = next;
    }
  };

  const seekBy = (delta) => {
    if (!audioRef.current || usingSpeechFallback) return;
    const nextTime = Math.max(0, Math.min((audioRef.current.duration || 0), (audioRef.current.currentTime || 0) + delta));
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const speakWithWebSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(`${item.title || ''}। ${item.content || ''}`);
    utter.lang = 'bn-BD';
    utter.rate = speed;
    const voices = window.speechSynthesis.getVoices() || [];
    const bnVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('bn'));
    if (bnVoice) utter.voice = bnVoice;
    utter.onend = () => {
      setPlaying(false);
      setUsingSpeechFallback(false);
    };
    utter.onerror = () => {
      setPlaying(false);
      setUsingSpeechFallback(false);
    };
    setUsingSpeechFallback(true);
    setPlaying(true);
    window.speechSynthesis.speak(utter);
    return true;
  };

  const handleTogglePlay = async () => {
    if (usingSpeechFallback) {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      setPlaying(false);
      setUsingSpeechFallback(false);
      return;
    }

    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.playbackRate = speed;
        await audioRef.current.play().catch(() => {});
        setPlaying(true);
      }
      return;
    }

    setLoadingAudio(true);
    try {
      const endpoint = item.hasAudio ? `/popups/${item.id}/audio` : `/popups/${item.id}/tts`;
      const res = await api.get(endpoint, { responseType: 'blob' });
      const url = URL.createObjectURL(res.data);
      blobUrlRef.current = url;

      const audio = new Audio(url);
      audio.playbackRate = speed;
      audio.onloadedmetadata = () => setDuration(audio.duration || 0);
      audio.ontimeupdate = () => setCurrentTime(audio.currentTime || 0);
      audio.onended = () => {
        setPlaying(false);
        setCurrentTime(0);
      };
      audioRef.current = audio;
      await audio.play();
      setPlaying(true);
    } catch {
      speakWithWebSpeech();
    } finally {
      setLoadingAudio(false);
    }
  };

  const progressPct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div
      style={{
        marginTop: '12px',
        padding: '12px 14px',
        borderRadius: '14px',
        background: 'rgba(13, 148, 136, 0.08)',
        border: '1px solid rgba(13, 148, 136, 0.25)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <button
          type="button"
          onClick={handleTogglePlay}
          disabled={loadingAudio}
          title={playing ? 'বিরতি দিন' : 'বাংলায় শুনুন'}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            border: 'none',
            background: '#0d9488',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 6px 16px rgba(13, 148, 136, 0.35)',
          }}
        >
          {loadingAudio ? (
            <Volume2 size={22} className="animate-pulse" />
          ) : playing ? (
            <Pause size={24} fill="#ffffff" />
          ) : (
            <Play size={24} fill="#ffffff" style={{ marginLeft: '2px' }} />
          )}
        </button>
      </div>

      {/* Progress Bar & Timestamps */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
        <span>{usingSpeechFallback ? 'বাংলা ভয়েস চালু...' : formatAudioTime(currentTime)}</span>
        <span>{duration > 0 ? formatAudioTime(duration) : (item.hasAudio ? 'অডিও' : 'বাংলা অডিও')}</span>
      </div>

      <input
        type="range"
        min={0}
        max={duration || 100}
        value={duration ? currentTime : 0}
        disabled={!duration || usingSpeechFallback}
        onChange={(e) => {
          const val = Number(e.target.value);
          if (audioRef.current) {
            audioRef.current.currentTime = val;
            setCurrentTime(val);
          }
        }}
        style={{
          width: '100%',
          accentColor: '#0d9488',
          height: '5px',
          cursor: duration ? 'pointer' : 'default',
          background: `linear-gradient(to right, #0d9488 ${progressPct}%, rgba(148,163,184,0.3) ${progressPct}%)`,
        }}
      />

      {/* Skip & Speed Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginTop: '10px' }}>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => seekBy(-10)}
          disabled={!audioRef.current || usingSpeechFallback}
          title="১০ সেকেন্ড পেছনে"
          style={{ padding: '4px 8px' }}
        >
          <RotateCcw size={16} />
        </button>

        <button
          type="button"
          onClick={cycleSpeed}
          style={{
            padding: '2px 10px',
            borderRadius: '999px',
            border: '1px solid rgba(13, 148, 136, 0.4)',
            background: 'transparent',
            color: '#0d9488',
            fontWeight: 700,
            fontSize: '0.76rem',
            cursor: 'pointer',
          }}
        >
          {speed}x
        </button>

        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => seekBy(10)}
          disabled={!audioRef.current || usingSpeechFallback}
          title="১০ সেকেন্ড সামনে"
          style={{ padding: '4px 8px' }}
        >
          <RotateCw size={16} />
        </button>
      </div>
    </div>
  );
}

export default function GlobalPopupModal() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [popups, setPopups] = useState([]);
  const [visible, setVisible] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);
  const [expandedIds, setExpandedIds] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const userKey = user?._id || user?.id || 'guest';
  const dismissStorageKey = `globalPopupDismissState_${userKey}`;

  useEffect(() => {
    if (!user) return;
    let mounted = true;

    const loadPopups = async () => {
      try {
        const res = await api.get('/popups/active');
        const list = res.data?.data?.popups || [];
        if (!mounted || list.length === 0) return;

        const fingerprint = list.map((p) => `${p.id}:${p.createdAt || ''}`).join('|');
        try {
          const savedRaw = localStorage.getItem(dismissStorageKey);
          if (savedRaw) {
            const saved = JSON.parse(savedRaw);
            if (
              saved?.dismissedUntil &&
              Date.now() < Number(saved.dismissedUntil) &&
              saved.fingerprint === fingerprint
            ) {
              return;
            }
          }
        } catch {
          // Ignore malformed localStorage
        }

        setPopups(list);
        setVisible(true);
      } catch {
        // Ignore popup load failure gracefully
      }
    };

    loadPopups();
    return () => { mounted = false; };
  }, [userKey]);

  const handleClose = () => {
    if (dontShowToday && popups.length > 0) {
      const fingerprint = popups.map((p) => `${p.id}:${p.createdAt || ''}`).join('|');
      localStorage.setItem(
        dismissStorageKey,
        JSON.stringify({
          dismissedUntil: Date.now() + 24 * 60 * 60 * 1000,
          fingerprint,
        })
      );
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setVisible(false);
  };

  const handleShare = async (item) => {
    const shareText = `${item.title}${item.author ? ` — ${item.author}` : ''}\n\n${item.content}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: item.title, text: shareText });
        return;
      } catch {
        // Fallback to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Ignore
    }
  };

  if (!visible || popups.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(2, 6, 23, 0.72)',
        backdropFilter: 'blur(4px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '14px',
      }}
    >
      <div
        className="card"
        style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '18px',
          overflow: 'hidden',
          padding: 0,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(13, 148, 136, 0.3)',
        }}
      >
        {/* Top Modal Header */}
        <div
          style={{
            padding: '14px 18px',
            background: 'linear-gradient(135deg, #065f46, #0d9488)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1rem' }}>
            <Sparkles size={18} />
            <span>জরুরি ঘোষণা ও আজকের নসিহত ({popups.length.toLocaleString('bn-BD')})</span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="বন্ধ করুন"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Stacked Items (একটার নিচে আরেকটা) */}
        <div style={{ overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
          {popups.map((item) => {
            const isAutoDue = item.type === 'auto_due';
            const isNasihot = item.type === 'nasihot';
            const isExpanded = Boolean(expandedIds[item.id]);
            const contentText = item.content || '';
            const needsExpand = contentText.length > 220;

            return (
              <div
                key={item.id}
                style={{
                  borderRadius: '14px',
                  padding: '14px',
                  border: `1.5px solid ${isAutoDue ? 'rgba(220, 38, 38, 0.45)' : isNasihot ? 'rgba(13, 148, 136, 0.35)' : 'var(--border-color)'}`,
                  background: isAutoDue
                    ? 'rgba(220, 38, 38, 0.06)'
                    : isNasihot
                      ? 'rgba(13, 148, 136, 0.04)'
                      : 'var(--bg-secondary, rgba(15, 23, 42, 0.03))',
                }}
              >
                {/* Item Header Badges & Share */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '2px 9px',
                      borderRadius: '999px',
                      background: isAutoDue ? 'rgba(220, 38, 38, 0.14)' : isNasihot ? 'rgba(13, 148, 136, 0.14)' : 'rgba(37, 99, 235, 0.14)',
                      color: isAutoDue ? '#dc2626' : isNasihot ? '#0d9488' : '#2563eb',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    {isAutoDue ? <AlertTriangle size={12} /> : isNasihot ? <BookOpen size={12} /> : <Bell size={12} />}
                    {isAutoDue ? 'বকেয়া বেতন সতর্কতা' : isNasihot ? 'আজকের নসিহত' : 'বিশেষ নোটিশ'}
                  </span>

                  {!isAutoDue && (
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleShare(item)}
                      style={{ padding: '3px 9px', fontSize: '0.74rem', borderRadius: '999px' }}
                    >
                      {copiedId === item.id ? <Check size={12} /> : <Share2 size={12} />}
                      <span>{copiedId === item.id ? 'কপি হয়েছে' : 'শেয়ার করুন'}</span>
                    </button>
                  )}
                </div>

                {/* Title & Author */}
                <div style={{ textAlign: isNasihot ? 'center' : 'left', marginBottom: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  {item.author && (
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: '#0d9488', marginTop: '2px' }}>
                      {item.author}
                    </div>
                  )}
                </div>

                {/* Content */}
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.65, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>
                  {needsExpand && !isExpanded ? `${contentText.slice(0, 220)}...` : contentText}
                </p>

                {needsExpand && (
                  <button
                    type="button"
                    className="btn btn-secondary w-full"
                    onClick={() => setExpandedIds((prev) => ({ ...prev, [item.id]: !prev[item.id] }))}
                    style={{ marginTop: '10px', fontSize: '0.82rem', fontWeight: 700 }}
                  >
                    {isExpanded ? 'সংক্ষিপ্ত করুন' : 'আরও পড়ুন'}
                  </button>
                )}

                {/* Audio Player (নসিহত ও নোটিশ — বাংলায় পড়ে শোনানো বা আপলোড অডিও) */}
                {!isAutoDue && <NasihotAudioPlayer item={item} />}

                {/* Auto Due Payment Action */}
                {isAutoDue && (
                  <button
                    type="button"
                    className="btn btn-primary w-full"
                    style={{ marginTop: '10px', background: '#dc2626', borderColor: '#dc2626' }}
                    onClick={() => {
                      handleClose();
                      navigate('/my-payments');
                    }}
                  >
                    <CreditCard size={15} />
                    <span>আমার পেমেন্ট / বকেয়া দেখুন</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Toggle: আজ আর দেখতে চাই না */}
        <div
          style={{
            padding: '12px 16px',
            borderTop: '1px solid var(--border-color)',
            background: 'var(--bg-secondary, rgba(15, 23, 42, 0.04))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <button
            type="button"
            onClick={() => setDontShowToday((v) => !v)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              flex: 1,
              background: 'transparent',
              border: 'none',
              padding: 0,
              textAlign: 'left',
              color: 'inherit',
            }}
          >
            <span
              style={{
                width: '42px',
                height: '24px',
                borderRadius: '999px',
                background: dontShowToday ? '#0d9488' : '#64748b',
                position: 'relative',
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  position: 'absolute',
                  top: '3px',
                  left: dontShowToday ? '21px' : '3px',
                  transition: 'left 0.2s',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
                }}
              />
            </span>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.86rem' }}>আজ আর দেখতে চাই না</div>
              <div style={{ fontSize: '0.73rem', color: 'var(--text-secondary)' }}>
                অন করে ক্রস (×) চাপলে ২৪ ঘণ্টা আসবে না
              </div>
            </div>
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={handleClose} style={{ background: '#0d9488', borderColor: '#0d9488' }}>
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
