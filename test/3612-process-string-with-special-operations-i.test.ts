import { expect, it } from 'vitest';
import { processStr } from '../src/3612-process-string-with-special-operations-i';

it('s = "a#b%*"', () => expect(processStr('a#b%*')).toBe('ba'));

it('s = "z*#"', () => expect(processStr('z*#')).toBe(''));
