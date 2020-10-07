import React from 'react';
import { Link } from 'react-router-dom';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            commentInput: false,
            hideButtons: true
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    handleInput(e) {
        this.setState({ body: e.currentTarget.value, commentInput: true });
    }

    handleCancel() {
        this.setState({ body: "", hideButtons: true });
    }

    handleComment(e) {
        e.preventDefault();
        this.props.createComment({
            // author_id: this.props.currentUser.id,
            video_id: this.props.video.id,
            body: this.state.body
        }).then(() => this.props.fetchVideo(this.props.video.id))
        this.setState({ body: "", hideButtons: true });
    }

    toggleButtons() {
        if (this.state.hideButtons) {
            this.setState({ hideButtons: !this.state.hideButtons });
        }
    }

    render() {
        let userIcon;
        let commentValue;

        if (this.props.currentUser) {
            userIcon = <div className="comment-profile-icon-01">{this.props.currentUser.username[0].toUpperCase()}</div>
            commentValue = <input
                                placeholder={`Commenting publicly as ${this.props.currentUser.username.toUpperCase()}`}
                                onChange={this.handleInput} 
                                onFocus={this.toggleButtons}
                                onBlur={this.toggleButtons}
                                value={this.state.body}>
                            </input>
        } else {
            userIcon = <div className="comment-profile-icon-02"><i className="fas fa-user-circle"></i></div>
            commentValue = <button to="/login">Login to add a public comment...</button>
        }

        return(
            <div>
                <div className="create-comment-section">
                    {userIcon}
                    <div className="comment-input-buttons">
                        <div className="comment-input">
                            {commentValue}
                        </div>
                        <div className="comment-buttons">
                            <button className="comment-buttons-cancel" onClick={this.handleCancel}>CANCEL</button>
                            <button className="comment-buttons-comment" onClick={this.handleComment}>COMMENT</button>
                        </div>
                    </div>
                </div>
                <div className="comments-all">
                    {
                        this.props.comments.map(comment => (
                            <CommentIndexItem
                                comment={comment}
                                key={comment.id}
                                deleteComment={this.props.deleteComment}
                            />
                        ))
                    }
                </div>
            </div>
        )
    }

};

export default CommentIndex;
