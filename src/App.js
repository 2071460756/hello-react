import React, { Component } from 'react';
import CommontInput from './container/CommontInput';
import CommontList from './container/CommontList';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }
    componentWillMount() {

    }

    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    handleDeleComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);
        console.log(comments)
        this.setState({ comments })
        this._saveComments(comments);
    }

    render() {
        return ( <div className = 'container' >
                    <CommontInput onSubmit = { this.handleSubmitComment.bind(this) } />
                     <CommontList comments = { this.state.comments }
                     onDeleteComment = { this.handleDeleComment.bind(this) }
                    />
              </div >
        )
    }
}

export default App;