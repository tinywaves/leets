export function isPowerOfTwo(n: number): boolean {
  let num = n;
  while (num % 2 === 0) {
    num = num / 2;
  }
  return num === 1 || num === -1;
}

export function isPowerOfTwoBitwise(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}
