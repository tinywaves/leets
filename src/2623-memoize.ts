type Fn = (...params: number[]) => number;

export function memoize(fn: Fn): Fn {
  const memoMap = new Map<string, number>();

  return function (...args) {
    const memoKey = args.join(',');
    const result = memoMap.get(memoKey);
    if (result === undefined) {
      const callValue = fn(...args);
      memoMap.set(memoKey, callValue);
      return callValue;
    } else {
      return result;
    }
  };
}
