export function processStr(s: string, k: number): string {
  let result: string[] = [];
  const specials = new Map([
    ['*', (s: string[]) => s.slice(0, -1)],
    ['#', (s: string[]) => [...s, ...s]],
    ['%', (s: string[]) => s.toReversed()],
  ]);
  for (const si of s) {
    const fn = specials.get(si);
    if (fn) {
      result = fn(result);
    } else {
      result.push(si);
    }
  }
  return k > result.length - 1 ? '.' : result[k];
}

export function processStrPass(s: string, k: number): string {
  let index = k;
  let length = 0;

  for (const si of s) {
    switch (si) {
      case '*': {
        length -= 1;
        if (length < 0) {
          length = 0;
        }
        break;
      }
      case '#': {
        length *= 2;
        break;
      }
      case '%': {
        break;
      }
      default: {
        length += 1;
        break;
      }
    }
  }

  if (index > length - 1) {
    return '.';
  }

  for (let i = s.length - 1; i >= 0; i--) {
    const si = s[i];
    switch (si) {
      case '*': {
        length += 1;
        break;
      }
      case '#': {
        if (index > Math.floor(length / 2) - 1) {
          index -= length / 2;
        }
        length /= 2;
        break;
      }
      case '%': {
        index = length - index - 1;
        break;
      }
      default: {
        if (index === length - 1) {
          return si;
        } else {
          length -= 1;
        }
      }
    }
  }

  return '.';
}
