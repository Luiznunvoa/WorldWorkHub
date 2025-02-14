import { create } from "zustand";

export const initialState = {
  firstname: null,
  lastname: null,
  email: null,
  password: null,
  role: null,
  occupation: null,
  phone: null,
  education: null,
  region: null,
  city: null,
  zipcode: null,
};

export const useFormStore = create((set) => ({
  form: initialState,
  reset: () => set(initialState),
  setState: (newState) => set({ form: newState }),
}));
