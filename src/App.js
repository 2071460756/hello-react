import React, { Component } from 'react';
import CommontInput from './page/CommontInput';
import CommontList from './page/CommontList';


class App extends Component{
  constructor(props){
      super(props);
      this.state={
          comments:[]
      }
  }
  componentWillMount(){
      this._loadComments();
  }
  _loadComments(){
      let comments = localStorage.getItem('comments');
     
      if(comments){
          comments = JSON.parse(comments);
          this.setState({contentArr:comments});
      }
  }
  submitComment(content){
      console.log(content);
      if(!content){
          return
      }
      if(!content.userName) return alert('请输入用户名')
      if(!content.content) return alert('请输入评论内容')
      const comments = this.state.comments
      comments.push(comments);
      this.setState({
          comments
      })
  }
  
  render(){
      return(
          <div className='container'>
             <CommontInput onSubmit={this.submitComment.bind(this)}/>
             <CommontList inner={this.state.contentArr}/>
          </div>
      )
  }
}

export default App;