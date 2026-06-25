export function countMajoritySubarrays(nums: number[], target: number): number {
  const n = nums.length;
  // counts of occurrences where the prefix sum is -n, -(n-1), ..., 0, 1, ..., n, with an index offset of n.
  const pre = Array.from({ length: n * 2 + 1 }, () => 0);
  pre[n] = 1;
  let cnt = n;
  let ans = 0;
  let presum = 0;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === target) {
      presum += pre[cnt];
      ++cnt;
      ++pre[cnt];
    } else {
      --cnt;
      presum -= pre[cnt];
      ++pre[cnt];
    }
    ans += presum;
  }
  return ans;
}
