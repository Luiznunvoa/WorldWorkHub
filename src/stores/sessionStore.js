import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
  accessToken: null,
  authenticated: false,
};

export const useSessionStore = create(
  persist(
    (set) => ({
      ...initialState,

      reset: () => set(initialState),

      setState: ({ accessToken }) =>
        set({
          accessToken,
          authenticated: !!accessToken,
        }),
    }),
    {
      name: "auth",
      partialize: (state) => ({
        accessToken: state.accessToken,
        authenticated: state.authenticated,
      }),
    },
  ),
);
