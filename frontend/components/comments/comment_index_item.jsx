import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    handleDeleteComment() {
        this.props.deleteComment(this.props.comment.id)
            .then(() => this.props.fetchVideo(this.props.comment.video_id));
    }

    render() {
        let deleteOption;
        if (this.props.currentUser && this.props.comment && this.props.currentUser.id === this.props.comment.author_id) {
            deleteOption =
                <div className="video-comment-index-item-delete" onClick={this.handleDeleteComment}>
                    <i className="fas fa-trash"></i>
                    <span>Delete Comment</span>
                </div>
        } else {
            <div></div>
        };

        return (
            <div className="video-comment-index-item">
                <div className="video-comment-index-item-icon">{this.props.comment.author[0].toUpperCase()}</div>
                <div className="video-comment-index-item-info">
                    <div className="video-comment-index-item-info-top">
                        <div className="video-comment-index-item-info-top-01">{this.props.comment.author}</div>
                        <div className="video-comment-index-item-check"><i className="fas fa-check-circle"></i></div>
                        <div className="video-comment-index-item-info-top-02">{this.props.comment.createDate}</div>
                        {deleteOption}
                    </div>
                    <div className="video-comment-body">{this.props.comment.body}</div>
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;
