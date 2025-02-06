import { create } from "zustand";
import { persist } from "zustand/middleware";

const preferencesInitialState = {
  language: "en",
  // theme: "Light"
};

export const usePreferencesStore = create(
  persist(
    (set) => ({
      ...preferencesInitialState,
      toggleLanguage: () => {
        set((state) => ({
          language: state.language === "en" ? "pt" : "en",
        }));
      },
      // setTheme: (theme) => {
      //   if (["Light", "Dark"].includes(theme)) set({ theme })
      // },
      resetPreferences: () => set(preferencesInitialState),
    }),
    {
      name: "preferences",
      partialize: (state) => ({
        language: state.language,
        // theme: state.theme
      }),
    },
  ),
);
