export function getRandomNumber(max: number = 1, min: number = 0): number {
  return Math.floor(Math.random() * (max + 1)) + min;
}
