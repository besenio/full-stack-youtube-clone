import { connect } from 'react-redux';
import { createComment, deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import { fetchVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id],
    video: ownProps.video
});

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
});

export default connect(mSTP, mDTP)(CommentIndex);
