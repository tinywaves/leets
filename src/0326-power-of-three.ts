export function isPowerOfThree(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  let num = n;
  while (num % 3 === 0) {
    num = num / 3;
  }
  return num === 1;
}
