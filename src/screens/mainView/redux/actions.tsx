import { GET_POKEMONS_RESET, GET_POKEMONS_START } from './constants';

export const getPokemons = (payload: any) => ({
  type: GET_POKEMONS_START,
  payload
});

export const getPokemonsReset = (payload: any) => ({
  type: GET_POKEMONS_RESET,
  payload
});