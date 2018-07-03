
import { GET_INTERFACE_DATA } from '../../actionTypes/index';

export const getInterfaceData = (payload) => {
    return ({ type: GET_INTERFACE_DATA, payload })
}