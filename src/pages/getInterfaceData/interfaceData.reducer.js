
const interfaceDataReducer = (state = {
    aa: 1,
}, action) => {

    console.log(action)
    switch (action.type) {
        case 'RENDER_DATA':
            return {
                ...state,
            }
        default:
            return state
    }
}

export default interfaceDataReducer;