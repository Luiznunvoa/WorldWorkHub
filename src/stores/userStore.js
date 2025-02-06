import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = { 
  accessToken: null,
};

export const useUserStore = create(
  persist(
    (set) => ({
      ...initialState,
      
      reset: () => set(initialState),
      
      setAccessToken: (token) => set({ accessToken: token }),
    }),
    {
      name: "auth",
      partialize: (state) => ({
        accessToken: state.accessToken
      }),
    }
  )
);
