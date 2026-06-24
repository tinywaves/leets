export function countMajoritySubarrays(nums: number[], target: number): number {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let targetCount = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === target) {
        targetCount++;
      }
      if (targetCount > (j - i + 1) / 2) {
        count++;
      }
    }
  }
  return count;
}
