export function processStr(s: string, k: number): string {
  let result: string[] = [];
  const specials = new Map([
    ['*', (s: string[]) => s.slice(0, -1)],
    ['#', (s: string[]) => [...s, ...s]],
    ['%', (s: string[]) => s.toReversed()],
  ]);
  for (const si of s) {
    const fn = specials.get(si);
    if (fn) {
      result = fn(result);
    } else {
      result.push(si);
    }
  }
  return k > result.length - 1 ? '.' : result[k];
}
