import { expect, it } from 'vitest';
import { last } from '../src/2619-array-prototype-last';

it('nums = [null, {}, 3]', () => expect(last([null, {}, 3])).toBe(3));

it('nums = []', () => expect(last([])).toBe(-1));
