import { it, vi } from 'vitest';
import { sleep } from '../src/2621-sleep';

it('millis = 100', async () => {
  vi.useFakeTimers();
  const promise = sleep(100);
  vi.advanceTimersByTime(100);
  await promise;
  vi.useRealTimers();
});

it('millis = 200', async () => {
  vi.useFakeTimers();
  const promise = sleep(200);
  vi.advanceTimersByTime(200);
  await promise;
  vi.useRealTimers();
});
