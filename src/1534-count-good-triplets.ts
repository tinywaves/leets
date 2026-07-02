export function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
  let count = 0;
  for (let x = 0; x < arr.length - 2; x++) {
    for (let y = x + 1; y < arr.length - 1; y++) {
      for (let z = y + 1; z < arr.length; z++) {
        count += (
          Math.abs(arr[x] - arr[y]) <= a
          && Math.abs(arr[y] - arr[z]) <= b
          && Math.abs(arr[x] - arr[z]) <= c
        )
          ? 1
          : 0;
      }
    }
  }
  return count;
}
