export function findMaxAverage(nums: number[], k: number): number {
  let total = nums.slice(0, k).reduce((prev, cur) => prev + cur, 0);
  let maxTotal = total;
  for (let left = 1, right = k; right < nums.length; left++, right++) {
    total = total + nums[right] - nums[left - 1];
    maxTotal = Math.max(maxTotal, total);
  }
  return Number((maxTotal / k).toFixed(5));
}
