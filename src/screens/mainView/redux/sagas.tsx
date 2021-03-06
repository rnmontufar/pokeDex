import { put, call, takeLatest } from 'redux-saga/effects';
import { GET_POKEMONS_START, GET_POKEMONS_ERROR, GET_POKEMONS_COMPLETED } from "./constants";
import { getPokemonsDetails } from "../../../axios/axios";
import { AxiosResponse } from 'axios';

export function* getPokemons() {
  try {
    const results: AxiosResponse<any[]> = yield call(getPokemonsDetails)
    yield put({ type: GET_POKEMONS_COMPLETED, results });
  } catch (error) {
    yield put({ type: GET_POKEMONS_ERROR, error });
  }
}

export default function* mainView() {
  yield takeLatest(GET_POKEMONS_START, getPokemons);
}
