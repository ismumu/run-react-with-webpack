const caseReducer = (state = {
    titleText: '文章标题',
}, action) => {

    switch (action.type) {
        case 'CHANGE_TITLE':
            return {
                ...state,
                titleText: action.payload.titleText,
            }
        default:
            return state
    }
}

export default caseReducer;