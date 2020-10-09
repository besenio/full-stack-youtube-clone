import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';

const likesReducer = (oldState = {}, action) => {
   Object.freeze(oldState);

   switch (action.type) {
      case RECEIVE_LIKE:
         return action.like;
      case REMOVE_LIKE:
         return {};
      case RECEIVE_VIDEO:
         if (action.video.like) {
            return action.video.like;
         } else {
            return {}
         }
      default:
         return oldState;
   }
};

export default likesReducer;
