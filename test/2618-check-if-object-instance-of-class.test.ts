import { expect, it } from 'vitest';
import { checkIfInstanceOf } from '../src/2618-check-if-object-instance-of-class';

it('func = () => checkIfInstanceOf(new Date(), Date)', () => expect(checkIfInstanceOf(new Date(), Date)).toBe(true));

it('func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstance(new Dog(), Animal); }', () => {
  class Animal {}
  class Dog extends Animal {}
  expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true);
});

it('func = () => checkIfInstance(Date, Date)', () => expect(checkIfInstanceOf(Date, Date)).toBe(false));

it('func = () => checkIfInstance(5, Number)', () => expect(checkIfInstanceOf(5, Number)).toBe(true));

it('func = () => checkIfInstanceOf(5n, Object)', () => expect(checkIfInstanceOf(5n, Object)).toBe(true));
