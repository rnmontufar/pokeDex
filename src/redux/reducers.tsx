import { combineReducers } from 'redux';
import { getPokemons } from "../screens/mainView/redux/reducers";

const rootReducer = combineReducers({
  getPokemons,
});

export default rootReducer;
