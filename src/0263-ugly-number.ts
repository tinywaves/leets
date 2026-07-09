export function isUgly(n: number): boolean {
  if (n === 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }

  let number = n;
  while (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
    if (number % 2 === 0) {
      number /= 2;
    }
    if (number % 3 === 0) {
      number /= 3;
    }
    if (number % 5 === 0) {
      number /= 5;
    }
  }

  return number === 1;
}
