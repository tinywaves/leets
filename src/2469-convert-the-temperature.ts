export function convertTemperature(celsius: number): number[] {
  return [
    Number.parseFloat((celsius + 273.15).toFixed(4)),
    Number.parseFloat((celsius * 1.8 + 32).toFixed(4)),
  ];
}
