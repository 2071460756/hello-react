import React from 'react'
import Comment from './Comment'
import comment from '../reducers/comments';

class CommentList extends React.Component{

    static defaultProps = {
        comments: []
    }

    handleDeleteComment(commentIndex){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(commentIndex);
        }
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment, i)=>{
                    return (
                        <Comment
                            comment={comment}
                            commentIndex={i}
                            key={i}
                            onDeleteComment={this.handleDeleteComment.bind(this)}
                        ></Comment>
                    );
                })}
            </div>
        );
    }
}

export default CommentList