

import { CHANGE_TITLE } from '../../actions/actionTypes';

export const changeTitle = (payload) => {
    return ({ type: CHANGE_TITLE, payload })
}