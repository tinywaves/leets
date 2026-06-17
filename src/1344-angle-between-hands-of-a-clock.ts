export function angleClock(hour: number, minutes: number): number {
  const hourDegree = Number(((hour % 12 + minutes / 60) * 30).toFixed(1));
  const minutesDegree = Number((minutes / 60 * 360).toFixed(1));
  const between = Math.abs(minutesDegree - hourDegree);
  return Math.min(between, 360 - between);
}
