export function xorOperation(n: number, start: number): number {
  return Array
    .from({ length: n - 1 }, (_, k) => start + 2 * (k + 1))
    .reduce((prev, cur) => prev ^ cur, start);
}
