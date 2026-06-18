export function createCounter(n: number): () => number {
  let initialValue = n - 1;
  return function () {
    initialValue++;
    return initialValue;
  };
}
