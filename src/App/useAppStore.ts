import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type TUseAppStoreState = {
  count: number;
  increment: () => void;
  reset: () => void;
};

const useAppStore = create<TUseAppStoreState>()(
  devtools(
    persist(
      (set, get) => ({
        count: 0,
        increment: () => set({ count: get().count + 1 }),
        reset: () => set({ count: 0 }),
      }),
      {
        name: 'app-store',
      },
    ),
  ),
);

export default useAppStore;
