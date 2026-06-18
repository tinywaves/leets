export class TimeLimitedCache {
  configMap: Map<number, { value: number; duration: number; setTime: number }>;

  static defaultValue = -1;

  constructor() {
    this.configMap = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const config = this.configMap.get(key);
    this.configMap.set(key, {
      value,
      duration,
      setTime: Date.now(),
    });
    if (config) {
      return true;
    }
    return false;
  }

  get(key: number): number {
    const config = this.configMap.get(key);
    return config && (Date.now() - config.setTime) <= config.duration
      ? config.value
      : TimeLimitedCache.defaultValue;
  }

  count(): number {
    let count = 0;
    for (const [key] of this.configMap) {
      if (this.get(key) !== TimeLimitedCache.defaultValue) {
        count++;
      }
    }
    return count;
  }
}
