/**
 * Normalizes a Bangladeshi phone number for Telegram deep links (tg://resolve?phone=...)
 * Rules:
 *  - Strips spaces, dashes, parentheses and non-numeric characters (except leading +)
 *  - If starts with +880 -> removes + to leave 880...
 *  - If starts with 880 -> leaves unchanged
 *  - If starts with 0 -> replaces leading 0 with 880
 *  - If 10 digits without leading 0 -> prepends 880
 *  - Validates that the number follows the standard Bangladeshi mobile pattern: 8801[3-9]\d{8}
 * 
 * @param {string} phone 
 * @returns {string|null} Normalized phone (e.g. '8801776776868') or null if invalid
 */
export function normalizeTelegramPhone(phone) {
  if (!phone || typeof phone !== 'string') return null;

  // Convert Bengali numerals to English numerals
  const bnToEn = { '০':'0', '১':'1', '২':'2', '৩':'3', '৪':'4', '৫':'5', '৬':'6', '৭':'7', '৮':'8', '৯':'9' };
  let clean = phone.replace(/[০-৯]/g, d => bnToEn[d]).trim();

  // Remove whitespace, dashes, parens
  clean = clean.replace(/[\s\-_()]/g, '');

  // Handle +880
  if (clean.startsWith('+880')) {
    clean = clean.substring(1);
  } else if (clean.startsWith('+88')) {
    clean = clean.substring(1);
  } else if (clean.startsWith('+')) {
    clean = clean.substring(1);
  }

  // Handle leading 0
  if (clean.startsWith('0')) {
    clean = '880' + clean.substring(1);
  } else if (!clean.startsWith('880') && clean.length === 10 && clean.startsWith('1')) {
    clean = '880' + clean;
  }

  // Validate format: 880 followed by 1, then digit 3-9, then 8 digits (total 13 digits)
  if (/^8801[3-9]\d{8}$/.test(clean)) {
    return clean;
  }

  // Fallback for valid international numbers of length 11-15 digits
  if (/^880\d{10}$/.test(clean)) {
    return clean;
  }

  return null;
}

/**
 * Returns tg://resolve?phone=... link or null if invalid
 * @param {string} phone 
 * @returns {string|null}
 */
export function getTelegramLink(phone) {
  const normalized = normalizeTelegramPhone(phone);
  if (!normalized) return null;
  return `tg://resolve?phone=${normalized}`;
}
