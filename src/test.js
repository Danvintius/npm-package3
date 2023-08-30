import { showHealth } from './index.js';
import { sortCharacters } from './index.js';

test('showHealth test', () => {
	const character1 = {name: 'Маг', health: 90};
	const result = showHealth(character1);
  expect(result).toBe('green');
})

test('showHealth test2', () => {
	const character1 = {name: 'Маг', health: 50};
	const result = showHealth(character1);
  expect(result).toBe('yellow');
})

test('showHealth test3', () => {
	const character1 = {name: 'Маг', health: 10};
	const result = showHealth(character1);
  expect(result).toBe('red');
})
