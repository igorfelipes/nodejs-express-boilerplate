import { hashSync, compareSync } from "bcryptjs";

export const generatePasswordHash = (password: string): string => {
  return hashSync(password, 10);
};

export const comparePasswordHash = (
  password: string,
  passwordHash: string
): boolean => {
  return compareSync(password, passwordHash);
};
