import { combineReducers } from 'redux';
import sidenavbarReducer from './sidenavbar_reducer';
import modalReducer from './modal_reducer';

const uiReducer = combineReducers({
    sidenavbar: sidenavbarReducer,
    modal: modalReducer
});

export default uiReducer;
