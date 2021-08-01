import { all } from 'redux-saga/effects'; 
import MainView from '../screens/mainView/redux/sagas';

export default function* rootSaga() {
  yield all([
    MainView(),
  ]);
}
