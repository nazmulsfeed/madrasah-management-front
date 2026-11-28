/**
 * সিস্টেমের সকল সার্চ বারের জন্য কেন্দ্রীয় Whole Words ও সাধারণ Substring ম্যাচিং হেল্পার।
 * - wholeWords = true (ডিফল্ট): বাংলা ও ইংরেজি অক্ষর/সংখ্যা সীমানা অনুযায়ী পূর্ণ শব্দ ম্যাচ করে।
 * - wholeWords = false: বর্তমানের মতো সাধারণ আংশিক (includes) ম্যাচ করে।
 */
const WORD_CHAR_RE = /[a-zA-Z0-9_\u0980-\u09FF]/;

function escapeRegExp(str) {
  return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function containsWholeWord(text, query) {
  if (!text || !query) return false;
  const hay = String(text).toLowerCase();
  const needle = String(query).trim().toLowerCase();
  if (!needle) return true;

  // ANB2026144 / ANG2026144 ধরনের আইডিতে 144, 2026144, 2026 এবং ANB2026144 Whole-Word হিসেবে ম্যাচ করবে
  const idMatch = hay.trim().match(/^an[bg](\d{4})(\d+)$/i);
  if (idMatch) {
    const year = idMatch[1];
    const serial = idMatch[2];
    const yearAndSerial = `${year}${serial}`;
    if (needle === year || needle === serial || needle === yearAndSerial || needle === hay.trim()) {
      return true;
    }
  }

  const tokens = needle.split(/\s+/).filter(Boolean);
  return tokens.every((token) => {
    const re = new RegExp(escapeRegExp(token), 'gi');
    let m;
    while ((m = re.exec(hay)) !== null) {
      const before = m.index > 0 ? hay[m.index - 1] : '';
      const afterIdx = m.index + m[0].length;
      const after = afterIdx < hay.length ? hay[afterIdx] : '';
      const beforeOk = !before || !WORD_CHAR_RE.test(before);
      const afterOk = !after || !WORD_CHAR_RE.test(after);
      if (beforeOk && afterOk) return true;
      if (re.lastIndex === m.index) re.lastIndex++;
    }
    return false;
  });
}

export function matchesSearchQuery(fields, query, wholeWordsOrOptions = true) {
  const q = String(query || '').trim();
  if (!q) return true;
  const list = Array.isArray(fields) ? fields : [fields];
  const validTexts = list
    .filter((v) => v !== null && v !== undefined && String(v).trim() !== '')
    .map((v) => String(v));
  if (validTexts.length === 0) return false;

  const isWholeWord = typeof wholeWordsOrOptions === 'object' && wholeWordsOrOptions !== null
    ? wholeWordsOrOptions.wholeWords !== false
    : wholeWordsOrOptions !== false;

  if (!isWholeWord) {
    const qLower = q.toLowerCase();
    return validTexts.some((t) => t.toLowerCase().includes(qLower));
  }

  return validTexts.some((t) => containsWholeWord(t, q));
}
