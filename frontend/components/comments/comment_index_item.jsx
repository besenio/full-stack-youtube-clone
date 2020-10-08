import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.comment.body}</div>
        )
    }
}

export default CommentIndexItem;
