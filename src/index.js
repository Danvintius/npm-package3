export function showHealth(character) {
  if (character.health > 50) {
    return 'green';
  } else if (character.health >= 15 && character.health <= 50) {
    return 'yellow';
  } else if (character.health < 15) {
    return 'red';
  }
}

export function sortCharacters(arr) {
  arr.sort();
  return arr;
}