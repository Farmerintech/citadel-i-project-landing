import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// Generic toggle function
export const toggle = (setState: React.Dispatch<React.SetStateAction<boolean>>, currentState: boolean) => {
  setState(!currentState);
};
