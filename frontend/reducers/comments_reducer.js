import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions'
import { RECEIVE_VIDEO } from '../actions/video_actions';

const commentsReducer = (oldState = {}, action) => {
   Object.freeze(oldState);
   let nextState = Object.assign({}, oldState)

   switch(action.type) {
      case RECEIVE_COMMENT:
         nextState[action.comment.id] = action.comment;
         return nextState;
      case REMOVE_COMMENT:
         delete nextState[action.commentId];
         return nextState;
      case RECEIVE_VIDEO:
         if (action.video.comments) {
            return action.video.comments;
         } else {
            return {}
         }
      default:
         return oldState;
   }
};

export default commentsReducer;
