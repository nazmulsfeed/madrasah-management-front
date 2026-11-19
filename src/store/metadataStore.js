import { create } from 'zustand';
import api from '../api/axios';

let inFlightClassesPromise = null;
let inFlightSectionsPromise = null;
let inFlightBranchesPromise = null;
let inFlightAcademicYearsPromise = null;

let classesReqId = 0;
let sectionsReqId = 0;
let branchesReqId = 0;
let academicYearsReqId = 0;

const initialState = {
  classes: [],
  sections: [],
  branches: [],
  academicYears: [],

  classesLoaded: false,
  sectionsLoaded: false,
  branchesLoaded: false,
  academicYearsLoaded: false,

  classesLoading: false,
  sectionsLoading: false,
  branchesLoading: false,
  academicYearsLoading: false,

  error: null,
};

const useMetadataStore = create((set, get) => ({
  ...initialState,

  /**
   * Fetch all class levels with request deduplication & in-memory caching
   */
  fetchClasses: async (force = false) => {
    if (get().classesLoaded && !force) {
      return get().classes;
    }
    if (inFlightClassesPromise && !force) {
      return inFlightClassesPromise;
    }

    const reqId = ++classesReqId;
    set({ classesLoading: true, error: null });

    let currentPromise;
    currentPromise = (async () => {
      try {
        const res = await api.get('/students/classes');
        const classes = res.data?.data?.classes || [];
        if (reqId === classesReqId) {
          if (res.data?.success) {
            set({ classes, classesLoaded: true, classesLoading: false });
            return classes;
          }
          set({ classesLoading: false });
          return get().classes;
        }
        return res.data?.success ? classes : get().classes;
      } catch (err) {
        if (reqId === classesReqId) {
          console.warn('fetchClasses metadata error:', err);
          set({ classesLoading: false, error: err.message || 'ক্লাস তালিকা লোড করতে ব্যর্থ' });
        }
        return get().classes;
      } finally {
        if (inFlightClassesPromise === currentPromise) {
          inFlightClassesPromise = null;
        }
      }
    })();

    inFlightClassesPromise = currentPromise;
    return currentPromise;
  },

  /**
   * Fetch all sections with request deduplication & in-memory caching
   */
  fetchSections: async (force = false) => {
    if (get().sectionsLoaded && !force) {
      return get().sections;
    }
    if (inFlightSectionsPromise && !force) {
      return inFlightSectionsPromise;
    }

    const reqId = ++sectionsReqId;
    set({ sectionsLoading: true, error: null });

    let currentPromise;
    currentPromise = (async () => {
      try {
        const res = await api.get('/students/sections');
        const sections = res.data?.data?.sections || [];
        if (reqId === sectionsReqId) {
          if (res.data?.success) {
            set({ sections, sectionsLoaded: true, sectionsLoading: false });
            return sections;
          }
          set({ sectionsLoading: false });
          return get().sections;
        }
        return res.data?.success ? sections : get().sections;
      } catch (err) {
        if (reqId === sectionsReqId) {
          console.warn('fetchSections metadata error:', err);
          set({ sectionsLoading: false, error: err.message || 'সেকশন তালিকা লোড করতে ব্যর্থ' });
        }
        return get().sections;
      } finally {
        if (inFlightSectionsPromise === currentPromise) {
          inFlightSectionsPromise = null;
        }
      }
    })();

    inFlightSectionsPromise = currentPromise;
    return currentPromise;
  },

  /**
   * Fetch all branches with request deduplication & in-memory caching
   */
  fetchBranches: async (force = false) => {
    if (get().branchesLoaded && !force) {
      return get().branches;
    }
    if (inFlightBranchesPromise && !force) {
      return inFlightBranchesPromise;
    }

    const reqId = ++branchesReqId;
    set({ branchesLoading: true, error: null });

    let currentPromise;
    currentPromise = (async () => {
      try {
        const res = await api.get('/students/branches');
        const branches = res.data?.data?.branches || [];
        if (reqId === branchesReqId) {
          if (res.data?.success) {
            set({ branches, branchesLoaded: true, branchesLoading: false });
            return branches;
          }
          set({ branchesLoading: false });
          return get().branches;
        }
        return res.data?.success ? branches : get().branches;
      } catch (err) {
        if (reqId === branchesReqId) {
          console.warn('fetchBranches metadata error:', err);
          set({ branchesLoading: false, error: err.message || 'শাখা তালিকা লোড করতে ব্যর্থ' });
        }
        return get().branches;
      } finally {
        if (inFlightBranchesPromise === currentPromise) {
          inFlightBranchesPromise = null;
        }
      }
    })();

    inFlightBranchesPromise = currentPromise;
    return currentPromise;
  },

  /**
   * Fetch all academic years with request deduplication & in-memory caching
   */
  fetchAcademicYears: async (force = false) => {
    if (get().academicYearsLoaded && !force) {
      return get().academicYears;
    }
    if (inFlightAcademicYearsPromise && !force) {
      return inFlightAcademicYearsPromise;
    }

    const reqId = ++academicYearsReqId;
    set({ academicYearsLoading: true, error: null });

    let currentPromise;
    currentPromise = (async () => {
      try {
        const res = await api.get('/students/academic-years');
        const academicYears = res.data?.data?.academicYears || [];
        if (reqId === academicYearsReqId) {
          if (res.data?.success) {
            set({ academicYears, academicYearsLoaded: true, academicYearsLoading: false });
            return academicYears;
          }
          set({ academicYearsLoading: false });
          return get().academicYears;
        }
        return res.data?.success ? academicYears : get().academicYears;
      } catch (err) {
        if (reqId === academicYearsReqId) {
          console.warn('fetchAcademicYears metadata error:', err);
          set({ academicYearsLoading: false, error: err.message || 'শিক্ষাবর্ষ তালিকা লোড করতে ব্যর্থ' });
        }
        return get().academicYears;
      } finally {
        if (inFlightAcademicYearsPromise === currentPromise) {
          inFlightAcademicYearsPromise = null;
        }
      }
    })();

    inFlightAcademicYearsPromise = currentPromise;
    return currentPromise;
  },

  /**
   * Parallel helper to fetch all metadata at once
   */
  fetchAllMetadata: async (force = false) => {
    const [classes, sections, branches, academicYears] = await Promise.all([
      get().fetchClasses(force),
      get().fetchSections(force),
      get().fetchBranches(force),
      get().fetchAcademicYears(force),
    ]);
    return { classes, sections, branches, academicYears };
  },

  /**
   * In-memory helper to get sections filtered by class level
   * Supports populated { _id, name, code } objects and direct ID strings
   */
  getSectionsByClass: (classLevelId) => {
    const { sections } = get();
    if (!classLevelId || classLevelId === 'all') {
      return sections;
    }
    const target = String(classLevelId).trim();
    return sections.filter((s) => {
      const cVal = s.classLevel;
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
  },

  /**
   * Reset all cached metadata (used on logout, institution/user switch)
   */
  clearMetadata: () => {
    classesReqId++;
    sectionsReqId++;
    branchesReqId++;
    academicYearsReqId++;
    inFlightClassesPromise = null;
    inFlightSectionsPromise = null;
    inFlightBranchesPromise = null;
    inFlightAcademicYearsPromise = null;
    set({ ...initialState });
  },
}));

export default useMetadataStore;
