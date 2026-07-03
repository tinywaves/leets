import { describe, expect, it } from 'vitest';
import { toLowerCase } from '../src/0709-to-lower-case';

describe('709. To Lower Case', () => {
  it('s = "Hello"', () => {
    expect(toLowerCase('Hello')).toBe('hello');
  });

  it('s = "here"', () => {
    expect(toLowerCase('here')).toBe('here');
  });

  it('s = "LOVELY"', () => {
    expect(toLowerCase('LOVELY')).toBe('lovely');
  });
});
