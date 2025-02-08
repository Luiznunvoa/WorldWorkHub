import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = { 
  accessToken: null,
  authenticated: false,
};

export const useUserStore = create(
  persist(
    (set) => ({
      ...initialState,
      
      reset: () => set(initialState),
      
      setAccessToken: (token) => set({ accessToken: token, authenticated: true }),
    }),
    {
      name: "auth",
      partialize: (state) => ({
        accessToken: state.accessToken,
        authenticated: state.authenticated
      }),
    }
  )
);
