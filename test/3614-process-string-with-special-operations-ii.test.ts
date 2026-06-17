import { expect, it } from 'vitest';
import { processStr, processStrPass } from '../src/3614-process-string-with-special-operations-ii';

it('processStr: s = "a#b%*", k = 1', () => expect(processStr('a#b%*', 1)).toBe('a'));

it('processStr: s = "cd%#*#", k = 3', () => expect(processStr('cd%#*#', 3)).toBe('d'));

it('processStr: s = "z*#", k = 0', () => expect(processStr('z*#', 0)).toBe('.'));

it('processStr: s = "%#*gm#xib", k = 2', () => expect(processStr('%#*gm#xib', 2)).toBe('g'));

it('processStrPass: s = "a#b%*", k = 1', () => expect(processStrPass('a#b%*', 1)).toBe('a'));

it('processStrPass: s = "cd%#*#", k = 3', () => expect(processStrPass('cd%#*#', 3)).toBe('d'));

it('processStrPass: s = "z*#", k = 0', () => expect(processStrPass('z*#', 0)).toBe('.'));

it('processStrPass: s = "%#*gm#xib", k = 2', () => expect(processStrPass('%#*gm#xib', 2)).toBe('g'));
