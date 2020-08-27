import * as CommentAPIUtil from '../util/comment_api_util'

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_VIDEO";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = videoId => dispatch => {
    return CommentAPIUtil.fetchComments(videoId)
        .then(comments => dispatch(receiveComments(comments)))
};

export const createComment = comment => dispatch => {
    return CommentAPIUtil.createComment(comment)
        .then(createdComment => dispatch(receiveComment(createdComment)))
};

export const deleteComment = commentId => dispatch => {
    return CommentAPIUtil.deleteComment(commentId)
        .then(deletedComment => dispatch(removeComment(deletedComment)))
};
