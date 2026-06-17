import { expect, it } from 'vitest';
import { angleClock } from '../src/1344-angle-between-hands-of-a-clock';

it('hour = 12, minutes = 30', () => expect(angleClock(12, 30)).toBe(165));

it('hour = 3, minutes = 30', () => expect(angleClock(3, 30)).toBe(75));

it('hour = 3, minutes = 15', () => expect(angleClock(3, 15)).toBe(7.5));

it('hour = 4, minutes = 50', () => expect(angleClock(4, 50)).toBe(155));

it('hour = 12, minutes = 0', () => expect(angleClock(12, 0)).toBe(0));
