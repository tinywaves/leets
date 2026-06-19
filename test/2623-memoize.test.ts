import { describe, it, expect } from 'vitest';
import { memoize } from '../src/2623-memoize';

describe('2623. Memoize', () => {
  it('sum [[2,2],[2,2],[],[1,2],[]]', () => {
    let callCount = 0;

    const sum = (a: number, b: number) => {
      callCount += 1;
      return a + b;
    };

    const memoizedSum = memoize(sum);

    expect(memoizedSum(2, 2)).toBe(4);
    expect(memoizedSum(2, 2)).toBe(4);
    expect(callCount).toBe(1);
    expect(memoizedSum(1, 2)).toBe(3);
    expect(callCount).toBe(2);
  });

  it('sum [[101,1],[10,11],[]]', () => {
    let callCount = 0;

    const sum = (a: number, b: number) => {
      callCount += 1;
      return a + b;
    };

    const memoizedSum = memoize(sum);

    expect(memoizedSum(101, 1)).toBe(102);
    expect(memoizedSum(10, 11)).toBe(21);
    expect(callCount).toBe(2);
  });

  it('factorial', () => {
    let callCount = 0;

    const factorial = (n: number): number => {
      callCount += 1;

      if (n <= 1) {
        return 1;
      }

      return n * factorial(n - 1);
    };

    const memoizedFactorial = memoize(factorial);
    expect(memoizedFactorial(2)).toBe(2);
    expect(memoizedFactorial(3)).toBe(6);
    const afterFirstCalls = callCount;
    expect(memoizedFactorial(2)).toBe(2);
    expect(memoizedFactorial(3)).toBe(6);
    expect(callCount).toBe(afterFirstCalls);
  });

  it('fib', () => {
    let callCount = 0;

    const fib = (n: number): number => {
      callCount += 1;

      if (n <= 1) {
        return 1;
      }

      return fib(n - 1) + fib(n - 2);
    };

    const memoizedFib = memoize(fib);

    expect(memoizedFib(5)).toBe(8);
    const afterFirstCall = callCount;
    expect(memoizedFib(5)).toBe(8);
    expect(callCount).toBe(afterFirstCall);
  });
});
