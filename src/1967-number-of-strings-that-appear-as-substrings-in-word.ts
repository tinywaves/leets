export function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter((pattern) => word.includes(pattern)).length;
}
