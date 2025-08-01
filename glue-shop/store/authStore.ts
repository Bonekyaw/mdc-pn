import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { getItem, setItem, deleteItemAsync } from "expo-secure-store";

type State = {
  isLoggedIn: boolean;
  isOtpScreen: boolean;
  isPasswordScreen: boolean;
  _hasHydrated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  randomToken: string | null;
  phone: string | null;
  token: string | null;
};

type Actions = {
  setOtpScreen: (phone: string, token: string) => void;
  setPasswordScreen: (token: string) => void;
  login: (tokens: {
    accessToken: string;
    refreshToken: string;
    randomToken: string;
  }) => void;
  logout: () => void;
  setHasHydrated: (value: boolean) => void;
};

const initialState: State = {
  isLoggedIn: false,
  isPasswordScreen: false,
  isOtpScreen: false,
  _hasHydrated: false,
  accessToken: null,
  refreshToken: null,
  randomToken: null,
  phone: null,
  token: null,
};

export const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setOtpScreen: (phone, token) =>
        set((state) => ({ ...state, isOtpScreen: true, phone, token })),
      setPasswordScreen: (token) =>
        set((state) => ({ ...state, isPasswordScreen: true, token })),
      login: ({ accessToken, refreshToken, randomToken }) =>
        set((state) => ({
          ...state,
          isLoggedIn: true,
          isPasswordScreen: false,
          isOtpScreen: false,
          accessToken,
          refreshToken,
          randomToken,
        })),
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
