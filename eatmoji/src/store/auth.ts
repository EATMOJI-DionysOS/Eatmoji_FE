import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  login: (accessToken: string, refreshToken: string) => set({ accessToken, refreshToken, isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
