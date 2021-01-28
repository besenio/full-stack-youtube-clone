import React, { useState } from 'react';
import CommentIndexItem from './comment_index_item';

const commentIndex = (props) => {
    const [state, setState] = useState({
        body: "",
        commentInput: false,
        hideButtons: true
    })

    const handleInput = (e) => {
        setState({...state, body: e.currentTarget.value, commentInput: true });
    }

    const handleCancel = () => {
        setState({...state, body: "", hideButtons: true });
    }

    const handleComment = (e) => {
        e.preventDefault();
        props.createComment({
            video_id: props.video.id,
            body: state.body
        }).then(() => props.fetchVideo(props.video.id))
        setState({...state, body: "", hideButtons: true });
    }

    const toggleButtons = () => {
        if (state.hideButtons) {
            setState({...state, hideButtons: !state.hideButtons });
        }
    }

    let userIcon;
    let commentValue;

    if (props.currentUser) {
        userIcon = <div className="comment-profile-icon-01">{props.currentUser.username[0].toUpperCase()}</div>
        commentValue = <input
                            placeholder={`Commenting publicly as ${props.currentUser.username.toUpperCase()}`}
                            onChange={handleInput} 
                            onFocus={toggleButtons}
                            onBlur={toggleButtons}
                            value={state.body}>
                        </input>
    } else {
        userIcon = <div className="comment-profile-icon-02"><i className="fas fa-user-circle"></i></div>
        commentValue = <button>Login to add a public comment...</button>
    }

    let hide;
    if (state.hideButtons) {
        hide = "hidden";
    } else {
        hide = "";
    }

    let active;
    if (state.commentInput && state.body !== "") {
        active = "comment-buttons-comment-active";
        setTimeout(() => {document.getElementById('comment-button-disable').disable = false}, 1);
    } else {
        active = "comment-buttons-comment";
        setTimeout(() => { document.getElementById('comment-button-disable').disable = true }, 1);
    }

    let commentNum;
    if (props.comments.length === 1) {
        commentNum = "Comment";
    } else {
        commentNum = "Comments"
    }

    let submitButton;
    if (state.body.length > 0) {
        submitButton = <button id="comment-button-disable" className={active} onClick={handleComment}>COMMENT</button>
    } else {
        submitButton = <button id="comment-button-disable" className={active} disabled>COMMENT</button>
    }

    return(
        <div>
            <div className="comments-length">{props.comments.length} {commentNum}</div>
            <div className="create-comment-section">
                {userIcon}
                <div className="comment-input-buttons">
                    <div className="comment-input">
                        {commentValue}
                    </div>
                    <div className={`comment-buttons ${hide}`}>
                        <button className="comment-buttons-cancel" onClick={handleCancel}>CANCEL</button>
                        {submitButton}
                    </div>
                </div>
            </div>
            <div className="comments-all">
                {
                    props.comments.map(comment => (
                        <CommentIndexItem
                            comment={comment}
                            key={comment.id}
                            deleteComment={props.deleteComment}
                            currentUser={props.currentUser}
                            fetchVideo={props.fetchVideo}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default commentIndex;