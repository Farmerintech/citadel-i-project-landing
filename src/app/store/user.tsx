"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Role = "student" | "teacher" | "admin";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  role: Role;
  subjects?: string[];
  students?: string[];
  isLoggedIn: boolean;
  profileImage?: any;
  id?: any;
}

interface AuthState {
  user: User | null;
  hasHydrated: boolean;

  login: (user: Omit<User, "isLoggedIn">) => void;
  logout: () => void;
  updateUser: (data: Partial<Omit<User, "isLoggedIn">>) => void;

  isStudent: () => boolean;
  isTeacher: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      hasHydrated: false,

      login: (user) =>
        set({
          user: { ...user, isLoggedIn: true },
        }),

      logout: () => set({ user: null }),

      updateUser: (data) =>
        set((state) =>
          state.user
            ? { user: { ...state.user, ...data } }
            : state
        ),

      isStudent: () => get().user?.role === "student",
      isTeacher: () => get().user?.role === "teacher",
    }),
    {
      name: "auth-storage",
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.hasHydrated && console.log("hydrated");
        if (state) state.hasHydrated = true;
      },
    }
  )
);
