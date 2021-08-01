export const colors400: { [key: string]: string } = {
  fire: 'bg-red-400',
  grass: 'bg-green-400',
  electric: 'bg-yellow-400',
  water: 'bg-blue-400',
  ground: 'bg-yellow-400',
  rock: 'bg-gray-400',
  fairy: 'bg-blue-400',
  poison: 'bg-gray-400',
  bug: 'bg-green-400',
  dragon: 'bg-red-400',
  psychic: 'bg-pink-400',
  flying: 'bg-yellow-400',
  fighting: 'bg-blue-400',
  normal: 'bg-pink-400',
  ice: 'bg-gray-400'
};

export const colors200: { [key: string]: string } = {
  fire: 'bg-red-300',
  grass: 'bg-green-200',
  electric: 'bg-yellow-200',
  water: 'bg-blue-300',
  ground: 'bg-yellow-200',
  rock: 'bg-gray-200',
  fairy: 'bg-blue-200',
  poison: 'bg-gray-200',
  bug: 'bg-green-200',
  dragon: 'bg-red-200',
  psychic: 'bg-pink-200',
  flying: 'bg-yellow-200',
  fighting: 'bg-blue-200',
  normal: 'bg-pink-200',
  ice: 'bg-gray-200'
};


export function  getColor (name: string, number: number) {
  return 'bg-' + colors400[name] + '-' + number;
};