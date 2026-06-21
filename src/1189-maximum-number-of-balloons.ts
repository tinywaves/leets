export function maxNumberOfBalloons(text: string): number {
  const map = new Map<string, number>();

  for (const ch of text) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
  }

  return Math.floor(
    Math.min(
      map.get('b') ?? 0,
      map.get('a') ?? 0,
      (map.get('l') ?? 0) / 2,
      (map.get('o') ?? 0) / 2,
      map.get('n') ?? 0,
    ),
  );
}
