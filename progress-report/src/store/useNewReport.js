import { create } from 'zustand';

export const useUserStore = create((set, get) => ({
  dailyReports: [],
  loading: false,
  error: null,

  setDailyReports: (reports) => set({ dailyReports: reports }),

  setLoading: (loading) => set({ loading }),

  setError: (error) => set({ error }),

  addDailyReport: (report) =>
    set({
      dailyReports: [...get().dailyReports, report], 
    }),

  updateDailyReport: (id, updatedReport) =>
    set({
      dailyReports: get().dailyReports.map((report) =>
        report.id === id ? { ...report, ...updatedReport } : report
      ),
    }),

}));
