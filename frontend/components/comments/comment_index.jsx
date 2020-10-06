import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            commentInput: false
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    handleInput(e) {
        this.setState({ body: e.currentTarget.value })
    }

    handleCancel() {
        this.setState({ body: "" })
    }

    handleComment(e) {
        e.preventDefault();
        this.props.createComment({
            author_id: this.props.currentUser.id,
            video_id: this.props.video.id,
            body: this.state.body
        })
    }

    render() {
        let userIcon;

        if (this.props.currentUser) {
            userIcon = <div>{this.props.currentUser.username[0].toUpperCase()}</div>
        } else {
            userIcon = <div><i className="fas fa-user-circle"></i></div>
        }

        return(
            <div>
                <div className="create-comment-section">
                    {userIcon}
                    <div>
                        <input placeholder={`Commenting publicly as ${this.props.currentUser.username.toUpperCase()}`} onChange={this.handleInput}></input>
                        <button onClick={this.handleComment}>CANCEL</button>
                        <button onClick={this.handleComment}>COMMENT</button>
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
