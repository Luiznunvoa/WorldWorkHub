import { create } from "zustand";

export const initialState = {
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
  languages: [],
};

export const useUserStore = create((set) => ({
  user: initialState,
  reset: () => set(initialState),
  setState: (newState) => set({ user: newState }),
}));
