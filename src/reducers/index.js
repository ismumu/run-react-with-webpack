import { combineReducers } from 'redux';
import caseReducer from '../pages/case/case.reducer';
import aboutReducer from '../pages/about/about.reducer';

export default combineReducers({
    caseReducer,
    aboutReducer
})
