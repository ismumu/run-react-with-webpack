import { combineReducers } from 'redux';
import caseReducer from '../pages/case/case.reducer';
import interfaceDataReducer from '../pages/getInterfaceData/interfaceData.reducer';

export default combineReducers({
    caseReducer,
    interfaceDataReducer,
})
