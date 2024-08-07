import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const censorEmail = (email: string) => {
  if (!email) return;
  const emailPattern = /^([^@]+)@(.+)$/;
  const match = email.match(emailPattern);
  if (!match) return email;

  const [, local, domain] = match;

  if (local.length <= 2) {
    return local.length === 2
      ? `${local.substring(0, local.length - 1)}*@${domain}`
      : local;
  }

  // Mask the local part
  const firstChar = local.charAt(0);
  const lastChar = local.charAt(local.length - 1);
  const maskedPart = "*".repeat(local.length - 2);

  const censoredLocal = `${firstChar}${maskedPart}${lastChar}`;
  return `${censoredLocal}@${domain}`;
};
