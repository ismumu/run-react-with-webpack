
// import { call, put, all } from 'redux-saga/effects';
// // import { musicData } from '../services/services';
// // import { getInterfaceData } from './interfaceData.action';


import { put, call, take, fork } from 'redux-saga/effects';
import { takeEvery, takeLatest } from 'redux-saga';
import { RENDER_INTERFACE_DATA } from '../actionTypes/index';



// export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function* incrementAsync() {

    // yield call(delay, 1000);

    yield put({
        type: RENDER_INTERFACE_DATA,
        payload: {
            data: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号'
                  }, {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号'
                  }
            ],
        }
    });
}


export default function* rootSaga() {

    yield* takeEvery("GET_INTERFACE_DATA", incrementAsync);
    // yield all([
    //     incrementAsync(),
    // ])
}