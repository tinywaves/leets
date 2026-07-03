const getDigitsSum = (num: number) => {
  let sum = 0;
  let last = num;

  while (last > 0) {
    sum += last % 10;
    last = Math.trunc(last / 10);
  }

  return sum;
};

export function addDigits(num: number): number {
  let last = num;
  while (last >= 10) {
    last = getDigitsSum(last);
  }
  return last;
}
