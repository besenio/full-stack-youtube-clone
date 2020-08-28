// import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions'

// const commentsReducer = (oldState = {}, action) => {
//     Object.freeze(state);
//     let nextState = Object.assign({}, oldState)

//     switch(action.type) {
//         case RECEIVE_COMMENTS:
//             return action.comments;
//         case RECEIVE_COMMENT:
//             nextState[action.comment.id] = action.comment;
//             return nextState;
//         case REMOVE_COMMENT:
//             delete nextState[action.commentId];
//             return nextState;
//         default:
//             return oldState;
//     }
// };

// export default commentsReducer;
