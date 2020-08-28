import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import CommentsReducer from "./comments_reducer"

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  comments: CommentsReducer
});

export default entitiesReducer;
