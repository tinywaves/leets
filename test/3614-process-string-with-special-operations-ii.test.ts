import { expect, it } from 'vitest';
import { processStr } from '../src/3614-process-string-with-special-operations-ii';

it('s = "a#b%*", k = 1', () => expect(processStr('a#b%*', 1)).toBe('a'));

it('s = "cd%#*#", k = 3', () => expect(processStr('cd%#*#', 3)).toBe('d'));

it('s = "z*#", k = 0', () => expect(processStr('z*#', 0)).toBe('.'));
