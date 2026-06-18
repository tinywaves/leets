import { it, expect } from 'vitest';
import { createCounter } from '../src/2620-counter';

it('n = 10, ["call","call","call"]', () => {
  const counter = createCounter(10);
  expect(counter()).toBe(10);
  expect(counter()).toBe(11);
  expect(counter()).toBe(12);
});

it('n = -2, ["call","call","call","call","call"]', () => {
  const counter = createCounter(-2);
  expect(counter()).toBe(-2);
  expect(counter()).toBe(-1);
  expect(counter()).toBe(0);
  expect(counter()).toBe(1);
  expect(counter()).toBe(2);
});
