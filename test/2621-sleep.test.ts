import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { sleep } from '../src/2621-sleep';

describe('2621. Sleep', () => {
  beforeEach(() => vi.useFakeTimers());

  afterEach(() => vi.useRealTimers());

  it('millis = 100', async () => {
    const promise = sleep(100);
    await vi.advanceTimersByTimeAsync(100);
    await expect(promise).resolves.toBeUndefined();
  });

  it('millis = 200', async () => {
    const promise = sleep(200);
    await vi.advanceTimersByTimeAsync(200);
    await expect(promise).resolves.toBeUndefined();
  });
});
