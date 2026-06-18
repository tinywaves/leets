import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';
import { TimeLimitedCache } from '../src/2622-cache-with-time-limit';

describe('2622. Cache With Time Limit', () => {
  beforeEach(() => vi.useFakeTimers());

  afterEach(() => vi.useRealTimers());

  /*
  Input:
  actions = ["TimeLimitedCache", "set", "get", "count", "get"]
  values = [[], [1, 42, 100], [1], [], [1]]
  timeDelays = [0, 0, 50, 50, 150]
  Output: [null, false, 42, 1, -1]
  Explanation:
  At t=0, the cache is constructed.
  At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
  At t=50, key=1 is requested and the value of 42 is returned.
  At t=50, count() is called and there is one active key in the cache.
  At t=100, key=1 expires.
  At t=150, get(1) is called but -1 is returned because the cache is empty.
  */
  it('example 1', () => {
    // t = 0
    const cache = new TimeLimitedCache();
    // t = 0
    expect(cache.set(1, 42, 100)).toBe(false);
    // t = 50
    vi.advanceTimersByTime(50);
    expect(cache.get(1)).toBe(42);
    expect(cache.count()).toBe(1);
    // t = 150
    vi.advanceTimersByTime(100);
    expect(cache.get(1)).toBe(-1);
  });

  /*
  Input:
  actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
  values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
  timeDelays = [0, 0, 40, 50, 120, 200, 250]
  Output: [null, false, true, 50, 50, -1, 0]
  Explanation:
  At t=0, the cache is constructed.
  At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
  At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
  At t=50, get(1) is called which returned 50.
  At t=120, get(1) is called which returned 50.
  At t=140, key=1 expires.
  At t=200, get(1) is called but the cache is empty so -1 is returned.
  At t=250, count() returns 0 because the cache is empty.
  */
  it('example 2', () => {
    // t = 0
    const cache = new TimeLimitedCache();
    // t = 0
    expect(cache.set(1, 42, 50)).toBe(false);
    // t = 40
    vi.advanceTimersByTime(40);
    expect(cache.set(1, 50, 100)).toBe(true);
    // t = 50
    vi.advanceTimersByTime(10);
    expect(cache.get(1)).toBe(50);
    // t = 120
    vi.advanceTimersByTime(70);
    expect(cache.get(1)).toBe(50);
    // t = 200
    vi.advanceTimersByTime(80);
    expect(cache.get(1)).toBe(-1);
    // t = 250
    vi.advanceTimersByTime(50);
    expect(cache.count()).toBe(0);
  });
});
