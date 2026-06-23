const MOD = 10 ** 9 + 7;

export function zigZagArrays(n: number, l: number, r: number): number {
  const dp0 = Array.from({ length: r + 1 }, () => 0);
  const dp1 = Array.from({ length: r + 1 }, () => 0);
  const sum0 = Array.from({ length: r + 2 }, () => 0);
  const sum1 = Array.from({ length: r + 2 }, () => 0);

  for (let i = l; i <= r; i++) {
    dp0[i] = dp1[i] = 1;
    sum0[i] = sum1[i] = i - l + 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = l; j <= r; j++) {
      dp0[j] = (sum1[r] - sum1[j] + MOD) % MOD;
      dp1[j] = sum0[j - 1];
    }

    sum0[l] = dp0[l];
    sum1[l] = dp1[l];
    for (let j = l + 1; j <= r; j++) {
      sum0[j] = (sum0[j - 1] + dp0[j]) % MOD;
      sum1[j] = (sum1[j - 1] + dp1[j]) % MOD;
    }
  }

  return (sum0[r] + sum1[r]) % MOD;
}
