

import { CHANGE_TITLE } from '../../actionTypes/index';

export const changeTitle = (payload) => {
    return ({ type: CHANGE_TITLE, payload })
}