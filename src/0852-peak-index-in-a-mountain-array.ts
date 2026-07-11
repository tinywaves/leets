export function peakIndexInMountainArray(arr: number[]): number {
  let i = 0;
  let j = arr.length - 1;
  let k = 0;
  let flag = false;
  while (i <= j && !flag) {
    k = Math.floor((i + j) / 2);
    const left = arr[k - 1];
    const target = arr[k];
    const right = arr[k + 1];
    if (left < target && target > right) {
      flag = true;
    }
    if (left < target && target < right) {
      i = k;
    }
    if (left > target && target > right) {
      j = k;
    }
  }
  return k;
}
