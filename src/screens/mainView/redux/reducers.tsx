import { GET_POKEMONS_START, GET_POKEMONS_ERROR, GET_POKEMONS_COMPLETED, GET_POKEMONS_RESET } from "./constants";

const initialState = {};

export function getPokemons(state = initialState, action:any) {
  switch (action.type) {
    case GET_POKEMONS_START:
      return { ...state, isLoading: true };
    case GET_POKEMONS_ERROR:
      return { ...state, isLoading: false, getPokemonsResult: null };
    case GET_POKEMONS_COMPLETED:
      return { ...state, isLoading: false, getPokemonsResult: action.results };
    case GET_POKEMONS_RESET:
      return { ...state, isLoading: false, getPokemonsResult: null };
    default:
      return { ...state };
  }
}
