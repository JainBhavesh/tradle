import { create } from 'zustand';

const useStore = create(set => ({
  isAggreed: false,
  setAgreeToggle: (value: any) => set({ isAggreed: value }),
}));

export default useStore;
