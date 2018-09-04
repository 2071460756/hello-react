import React from 'react'

class Comment extends React.Component{
    constructor(){
        super();
        this.state = {
            createdTime: ''
        }
    }

    static defaultProps = {
        comment : {}
    }

    componentWillMount(){
        if(this.props.comment.createTime){
            this._setTimeToString();
            this._time = setInterval(this._setTimeToString(), 5000);
        }
    }

    componentWillUnmount(){
        clearInterval(this._time);
    }

    handleDeleteComment() {
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.commentIndex);
        }
    }

    _setTimeToString(){
        const comment = this.props.comment;
        const duration = (+Date.now() - comment.createTime) /1000;
        this.setState({
            createdTime: duration > 60 ? `${Math.round(duration / 60)}分钟前`:
            `${Math.round(Math.max(duration, 1))}秒前`
        });
    }

    render() {
        return (
            <div>
                <div className="comment">
                    <div className="comment-username">
                        <span>{this.props.comment.username}</span>&nbsp;
                    </div>
                    <p>{this.props.comment.content}</p>
                    <span className="comment-createdtime">{this.state.createdTime}</span>
                    <span className="comment-delete" onClick={this.handleDeleteComment.bind(this)}>删除</span>
                </div>
            </div>
        );
    }
}

export default Comment;