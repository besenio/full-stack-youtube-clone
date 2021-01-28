import React from 'react';

const commentIndexItem = (props) => {
    const handleDeleteComment = () => {
        props.deleteComment(props.comment.id)
            .then(() => props.fetchVideo(props.comment.video_id));
    }

    let deleteOption;
    if (props.currentUser && props.comment && props.currentUser.id === props.comment.author_id) {
        deleteOption =
            <div className="video-comment-index-item-delete" onClick={handleDeleteComment}>
                <i className="fas fa-trash"></i>
                <span>Delete Comment</span>
            </div>
    } else {
        <div></div>
    };

    return (
        <div className="video-comment-index-item">
            <div className="video-comment-index-item-icon">{props.comment.author[0].toUpperCase()}</div>
            <div className="video-comment-index-item-info">
                <div className="video-comment-index-item-info-top">
                    <div className="video-comment-index-item-info-top-01">{props.comment.author}</div>
                    <div className="video-comment-index-item-check"><i className="fas fa-check-circle"></i></div>
                    <div className="video-comment-index-item-info-top-02">{props.comment.createDate}</div>
                    {deleteOption}
                </div>
                <div className="video-comment-body">{props.comment.body}</div>
            </div>
        </div>
    )
}

export default commentIndexItem;