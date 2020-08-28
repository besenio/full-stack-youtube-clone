import { connect } from 'react-redux';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';

const mSTP = state => ({
    comments: Object.values(state.entities.comments),
    currentUser: state.entities.users[state.session.id]
});

const mDTP = dispatch => ({
    fetchComments: videoId => dispatch(fetchComments(videoId)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(CommentIndex);
