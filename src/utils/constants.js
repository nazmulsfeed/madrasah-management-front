export const MAKTAB_SUB_BRANCHES = ['আমপারা', 'কায়দা'];
export const MAKTAB_SUB_SECTIONS = MAKTAB_SUB_BRANCHES;
export const HIFZ_SUB_SECTIONS = ['ক', 'খ', 'গ', 'ঘ'];
export const SECTION_OPTIONS = ['ক', 'খ', 'গ', 'ঘ', 'ঙ', 'চ', 'কোন সেকশন নাই'];

export function isMaktabName(name = '') {
  return String(name || '').trim().includes('মক্তব');
}

export function getSectionOrSubBranchOptions(isMaktab = false) {
  return isMaktab ? MAKTAB_SUB_BRANCHES : SECTION_OPTIONS;
}
