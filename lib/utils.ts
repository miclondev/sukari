import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitialsFromEmail(email?: string) {
  if (email) {
    const name = email?.split("@")[0]; // Get the part before the '@'
    const nameParts = name?.split("."); // Split by '.' if the name has multiple parts
    const initials = nameParts?.map((part) => part?.charAt(0)?.toUpperCase())?.join(""); // Get the first letter of each part
    return initials || "NN"; // Return initials or 'NN' if no initials found
  }
  return "NN";
}
