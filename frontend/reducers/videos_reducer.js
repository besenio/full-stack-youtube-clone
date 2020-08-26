import { RECEIVE_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../actions/video_actions'

const videosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState)

    switch(action.type) {
        case RECEIVE_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            nextState[action.video.id] = action.video;
            return nextState;
        case REMOVE_VIDEO:
            delete nextState[action.video.id];
            return nextState;
        default:
            return oldState;
    }
};

export default videosReducer;
