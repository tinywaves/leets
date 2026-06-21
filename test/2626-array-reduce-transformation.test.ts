import { describe, it, expect } from 'vitest';
import { reduce, reduceWithoutArrayReduce } from '../src/2626-array-reduce-transformation';

describe('2626. Array Reduce Transformation', () => {
  it('reduce: fn = function sum(accum, curr) { return accum + curr; }', () => {
    expect(reduce(
      [1, 2, 3, 4],
      (accum: number, curr: number) => accum + curr,
      0,
    )).toBe(10);
  });

  it('reduce: fn = function sum(accum, curr) { return accum + curr * curr; }', () => {
    expect(reduce(
      [1, 2, 3, 4],
      (accum: number, curr: number) => accum + curr * curr,
      100,
    )).toBe(130);
  });

  it('reduce: fn = function sum(accum, curr) { return 0; }', () => {
    expect(reduce(
      [],
      (_accum: number, _curr: number) => 0,
      25,
    )).toBe(25);
  });

  it('reduceWithoutArrayReduce: fn = function sum(accum, curr) { return accum + curr; }', () => {
    expect(reduceWithoutArrayReduce(
      [1, 2, 3, 4],
      (accum: number, curr: number) => accum + curr,
      0,
    )).toBe(10);
  });

  it('reduceWithoutArrayReduce: fn = function sum(accum, curr) { return accum + curr * curr; }', () => {
    expect(reduceWithoutArrayReduce(
      [1, 2, 3, 4],
      (accum: number, curr: number) => accum + curr * curr,
      100,
    )).toBe(130);
  });

  it('reduceWithoutArrayReduce: fn = function sum(accum, curr) { return 0; }', () => {
    expect(reduceWithoutArrayReduce(
      [],
      (_accum: number, _curr: number) => 0,
      25,
    )).toBe(25);
  });
});
