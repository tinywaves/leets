const getDigitsOperation = (num: number, operation: '+' | '*') => {
  let result = operation === '*' ? 1 : 0;
  let last = num;

  while (last > 0) {
    const remainder = last % 10;
    if (operation === '*') {
      result *= remainder;
    } else {
      result += remainder;
    }
    last = Math.trunc(last / 10);
  }

  return result;
};

export function subtractProductAndSum(n: number): number {
  return getDigitsOperation(n, '*') - getDigitsOperation(n, '+');
}
