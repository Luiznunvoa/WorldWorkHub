import { create } from 'zustand';

export const STATE = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export const useRequestStore = create(set => ({
  state: STATE.IDLE, 
  setState: (newState) => set({ state: newState })
}));

