"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/app/store/user";

export default function AuthHydration() {
  const hasHydrated = useAuthStore((s) => s.hasHydrated);

  useEffect(() => {
    useAuthStore.persist.rehydrate();
  }, []);

  if (!hasHydrated) return null; // or loader

  return null;
}
