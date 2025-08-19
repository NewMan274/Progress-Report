import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useReportStore = create(
  persist(
    (set) => ({
      dailyReports: [],
      loading: false,
      error: null,

      setDailyReports: (reports) => set({ dailyReports: reports }),
      addReport: (report) =>
        set((state) => ({
          dailyReports: [...state.dailyReports, report],
        })),
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: "daily-reports-storage", // Key in localStorage
    }
  )
);