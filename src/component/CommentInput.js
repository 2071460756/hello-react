import React from 'react'

class CommentInput extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            username: props.username,
            content: ''
        };
    }

    static defaultProps = {
        username: ''
    }

    componentDidMount(){
        this.textarea.focus();
    }

    handleUsernameChange(event) {
        let username = event.target.value;
        if(username){
            this.setState({username});
        }
    }

    handleContentChange(event) {
        let content = event.target.value;
        if(content){
            this.setState({content});
        }
    }

    //将用户名保存到localStorage中
    _saveUsername(event) {
        let username = event.target.value;
        if(username){
            localStorage.setItem('username', username);
        }
    }

    //提交评论内容
    handleSubmit() {
        if(this.props.onSubmit){
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createTime: +new Date()
            });
        }
        this.setState({content: ''});
    }

    render (){
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名</span>
                    <div className="comment-field-input">
                        <input 
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            onBlur={this._saveUsername.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                            ref={(textarea)=>this.textarea=textarea}
                        ></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button
                        onClick={this.handleSubmit.bind(this)}
                    >发布</button>
                </div>
            </div>
        )
    }



}

export default CommentInput