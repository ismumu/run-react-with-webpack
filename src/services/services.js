

import request from '../utils/request';

// get data 
export async function musicData(params) {
    return request('https://www.sojson.com/api/qqmusic/985609000', {
        method: 'post',
        body: params
    })
}

