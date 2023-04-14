import { create } from 'zustand'

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set(() => ({ bears:  1 })),
  removeAllBears: () => set({ bears: 0 }),
}))