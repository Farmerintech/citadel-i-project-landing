"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CBTState {
  examMode: string;
  answers: Record<string, string>;
  timeLeft: number;

  setExamMode: (mode: string) => void;
  answerQuestion: (questionId: string, answer: string) => void;
  setTimeLeft: (time: number) => void;
  resetCBT: () => void;
}

export const useCBTStore = create<CBTState>()(
  persist(
    (set) => ({
      examMode: "",
      answers: {},
      timeLeft: 0,

      setExamMode: (mode) => set({ examMode: mode }),

      answerQuestion: (questionId, answer) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: answer,
          },
        })),

      setTimeLeft: (time) => set({ timeLeft: time }),

      resetCBT: () =>
        set({
          examMode: "",
          answers: {},
          timeLeft: 0,
        }),
    }),
    {
      name: "cbt-storage",
    }
  )
);
