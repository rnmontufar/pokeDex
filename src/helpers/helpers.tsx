const colors: { [key: string]: string } = {
  fire: 'red',
  grass: 'green',
  electric: 'yellow',
  water: 'blue',
  ground: 'yellow',
  rock: 'gray',
  fairy: 'blue',
  poison: 'gray',
  bug: 'gray',
  dragon: 'red',
  psychic: 'pink',
  flying: 'yellow',
  fighting: 'blue',
  normal: 'pink',
  ice: 'gray'
};

export function  getColor (name: string) {
  return colors[name];
};