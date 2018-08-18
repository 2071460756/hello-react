import React, { Component } from 'react';
import CommontInput from './page/CommontInput';
import CommontList from './page/CommontList';


class App extends Component{
  constructor(props){
      super(props);
      this.state={
          comments:[],
      }
  }
  componentWillMount(){
      this._loadComments();
  }
  _loadComments(){
      let comments = localStorage.getItem('comments');
      console.log(comments)
      if(comments){
          comments = JSON.parse(comments)
          this.setState({comments:comments})
      }
  }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
    }

  submitComment(content){
      console.log(content);
      if(!content){
          return
      }
      if(!content.name) return alert('请输入用户名')
      if(!content.comment) return alert('请输入评论内容')
      const comments = this.state.comments
      comments.push(content);
      this.setState({
          comments
      })
      this._saveComments(comments)
  }

    handleDeleComment(index){
       const comments = this.state.comments;
       comments.splice(index,1);
       console.log(comments)
        this.setState({comments})
        this._saveComments(comments);
    }
  
  render(){
      return(
          <div className='container'>
             <CommontInput onSubmit={this.submitComment.bind(this)}/>
             <CommontList inner={this.state.comments} onDeleteComment={this.handleDeleComment.bind(this)}/>
          </div>
      )
  }
}

export default App;