export function isPowerOfTwo(n: number): boolean {
  if (n <= 0) {
    return false;
  }
  let num = n;
  while (num % 2 === 0) {
    num = num / 2;
  }
  return num === 1;
}

export function isPowerOfTwoBitwise(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
