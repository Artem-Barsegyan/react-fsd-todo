import { customAlphabet } from 'nanoid';

export const generateId = (): string => {
  const id = customAlphabet('23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz', 8);
  return id();
};
