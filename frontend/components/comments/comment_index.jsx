import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <ul className="comments-all">
                    {
                        this.props.comments.map(comment => (
                            <CommentIndexItem comment={comment} key={comment.id}/>
                        ))
                    }
                </ul>
            </div>
        )
    }

};

export default CommentIndex;
