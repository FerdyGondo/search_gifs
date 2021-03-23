import { all, fork, call, put, take, takeEvery, takeLatest, cancel, getContext, delay } from 'redux-saga/effects';
import { ActionType } from "../action-types";
import { input, inputSuccess, inputFailed }  from '../action-creators';
import callAPI from './callAPI'; 

function* inputSaga (input) {
      try {
          console.log('inputSaga input.payload.gif', input.payload.gif);
          const API_KEY = "LV69YxLmFF9AvD5NU5upirrhfmRNFS83";
          const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
          const result = yield  callAPI(input.payload.gif);
          yield put({ 
            type : ActionType.INPUT_SUCCESS,
            payload: result,
          });
      } catch (err) {
            yield put({ 
                type : ActionType.INPUT_FAILED,
                payload: err,
              });
      }
};

function* watchInputSaga() {
    yield takeEvery (ActionType.INPUT, inputSaga);
}

export default function* sagas() {
    yield all([
      fork(watchInputSaga)
    ]);
}
