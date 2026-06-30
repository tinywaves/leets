import { describe, expect, it } from 'vitest';
import { convertTemperature } from '../src/2469-convert-the-temperature';

describe('2469. Convert the Temperature', () => {
  it('celsius = 36.50', () => {
    expect(convertTemperature(36.5)).toEqual([309.65, 97.7]);
  });

  it('celsius = 122.11', () => {
    expect(convertTemperature(122.11)).toEqual([395.26, 251.798]);
  });
});
