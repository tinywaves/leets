export function numberOfSubstrings(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      const subS = s.slice(i, j + 1);
      count += subS.includes('a') && subS.includes('b') && subS.includes('c') ? 1 : 0;
    }
  }
  return count;
}

export function numberOfSubstringsPass(s: string): number {
  const n = s.length;
  let ans = 0;
  const pre: number[][] = Array.from(
    { length: 3 },
    () => Array.from({ length: n + 1 }, () => 0),
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      pre[j][i + 1] = pre[j][i];
    }
    pre[s.codePointAt(i)! - 97][i + 1]++;
  }

  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n;
    let pos = -1;
    while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (pre[0][mid] - pre[0][i] > 0
        && pre[1][mid] - pre[1][i] > 0
        && pre[2][mid] - pre[2][i] > 0) {
        right = mid - 1;
        pos = mid;
      } else {
        left = mid + 1;
      }
    }

    if (pos !== -1) {
      ans += n - pos + 1;
    }
  }

  return ans;
}
