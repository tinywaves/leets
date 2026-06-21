type Fn = (accum: number, curr: number) => number;

export function reduce(nums: number[], fn: Fn, init: number): number {
  // eslint-disable-next-line unicorn/no-array-reduce
  return nums.reduce((calculated, current) => fn(calculated, current), init);
}

export function reduceWithoutArrayReduce(nums: number[], fn: Fn, init: number): number {
  let final = init;
  for (const item of nums) {
    final = fn(final, item);
  }
  return final;
}
