import { RECEIVE_VIDEO, RECEIVE_VIDEO_ERRORS, CLEAR_VIDEO_ERRORS } from '../actions/video_actions';

const videoErrorsReducer = (oldState = [], action) => {
    switch (action.type) {
        case RECEIVE_VIDEO:
            return [];
        case RECEIVE_VIDEO_ERRORS:
            return action.errors;
        case CLEAR_VIDEO_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default videoErrorsReducer;
