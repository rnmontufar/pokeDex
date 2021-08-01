import { createStore, applyMiddleware, compose } from "redux";

import rootSaga from './sagas';
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const initialState = {getPokemons:{
  pokemons: [{name:'chara'}],
  isLoaing: true}
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, initialState , composeEnhancers(applyMiddleware(sagaMiddleware )));
sagaMiddleware.run(rootSaga)
