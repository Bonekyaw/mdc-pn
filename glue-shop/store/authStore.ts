import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";

type State = {
  isLoggedIn: boolean;
  _hasHydrated: boolean;
};

type Actions = {
  login: () => void;
  logout: () => void;
  setHasHydrated: (value: boolean) => void;
};

const initialState: State = {
  isLoggedIn: false,
  _hasHydrated: false,
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      login: () => set((state) => ({ ...state, isLoggedIn: true })),
      logout: () => set((state) => ({ ...state, isLoggedIn: false })),
      setHasHydrated: (value) =>
        set((state) => ({ ...state, _hasHydrated: value })),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => ({
        getItem,
        setItem,
        removeItem: deleteItemAsync,
      })),
      onRehydrateStorage: (state) => {
        return () => state.setHasHydrated(true);
      },
    },
  ),
);
