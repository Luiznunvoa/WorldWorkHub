
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const initialState = { 
  accessToken: null,
  authenticated: false,
  user: {
    id: null,
    firstname: null,
    lastname: null,
    email: null,
    role: null,
    occupation: null,
    phone: null,
    education: null,
    region: null,
    city: null,
    zipcode: null,
    services: [],
    languages: []
  } 
};

export const useUserStore = create(
  persist(
    (set) => ({
      ...initialState,
      
      reset: () => set(initialState),
      
      setState: ({ accessToken, user }) => set({
        accessToken,
        authenticated: !!accessToken, 
        user: user,
      }),
    }),
    {
      name: "auth",
      partialize: (state) => ({
        accessToken: state.accessToken,
        authenticated: state.authenticated,
        user: state.user,
      }),
    }
  )
);
;
