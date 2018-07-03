
// import { call, put, all } from 'redux-saga/effects';
// // import { musicData } from '../services/services';
// // import { getInterfaceData } from './interfaceData.action';


import { put, call, take, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga'



export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {
    // 延迟 1s 在执行 + 1操作
    yield call(delay, 1000);
    console.log(11111);
    yield put({
        type: 'RENDER_DATA',
        payload: {
            aa: 1,
        }
    });
}


export default function* rootSaga() {

    yield* takeEvery("GET_INTERFACE_DATA", incrementAsync)
    // yield all([
    //     incrementAsync(),
    // ])
}