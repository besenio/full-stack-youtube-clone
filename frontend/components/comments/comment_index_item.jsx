import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    handleDeleteComment() {
        this.props.deleteComment(this.props.comment.id);
    }

    render() {
        // let commenterIcon;

        return (
            <div className="video-comment-index-item">
                <div className="video-comment-index-item-icon">Profile Icon</div>
                <div className="video-comment-index-item-info">
                    <div>{this.props.comment.author}</div>
                    <div>Date Created</div>
                    <div>{this.props.comment.body}</div>
                </div>
                <div className="video-comment-index-item-delete" onClick={this.handleDeleteComment}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;
