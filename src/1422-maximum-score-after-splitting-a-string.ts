const getLength = (
  str: string,
  target: string,
) => str.split('').filter((item) => item === target).length;

export function maxScore(s: string): number {
  let max = 0;
  for (let i = 1; i <= s.length - 1; i++) {
    const point = getLength(s.slice(0, i), '0') + getLength(s.slice(i), '1');
    max = Math.max(point, max);
  }

  return max;
}
