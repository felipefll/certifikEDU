export const aleatoryId = (length: number) => {
  return Math.random().toString(16).substring(length);
};
