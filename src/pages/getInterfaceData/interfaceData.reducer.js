
const interfaceDataReducer = (state = {
    data: [],
}, action) => {

    switch (action.type) {
        case 'RENDER_INTERFACE_DATA':
            return {
                ...state,
                data: action.payload.data,
            }
        default:
            return state
    }
}

export default interfaceDataReducer;