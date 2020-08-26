import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import videoErrorsReducer from './videos_errors_reducers'

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    videoErrors: videoErrorsReducer
});

export default errorsReducer;
