import React,{Component} from 'react';
import PropTypes from 'prop-types';

class CommontInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func
      }
    constructor(props){
        super(props);
        this.state={
            userName:'',
            comment:'',
            commontArr:[]
        }
    }
    componentWillMount(){
        this._loadUsername(); //持久化用户名
        console.log(11)
    }
   
    componentDidMount(){
        this.textarea.focus(); // 输入框focus
    }

    changeName(e){
        this.setState({
            userName:e.target.value,
        })
    }
    changeCommont(e){
        this.setState({
            comment:e.target.value,
        })
    }
    clickBtn(){       //点击发布评论
        let list = {
            name:this.state.userName,
            comment:this.state.comment
        }
        this.props.onSubmit(list);
        this.setState({
            userName:'',
            comment:'',
        })
    }
    _saveName(username){  // 私有方法
        localStorage.setItem('userName',username);
    }
    _loadUsername(){
        const userName = localStorage.getItem('userName');
        if(userName){
            this.setState({userName:userName});
        }
    }
    _saveComments(comments){
        localStorage.setItem('comments',JSON.stringify(comments))
  
    }
    handleUsernameBlur(e){
        this._saveName(e.target.value);
    }

    render(){
        return(
            <div className='input-div'>
                <div>
                    <label >用户名：</label>
                    <input type='text' value={this.state.userName}
                     onChange={this.changeName.bind(this)}
                     onBlur={this.handleUsernameBlur.bind(this)}
                     />
                </div>
                <div className='mt20'>
                    <label>评论内容：</label>
                    <textarea type='text' 
                    ref={(textarea)=>this.textarea = textarea}
                     value={this.state.comment} 
                     onChange={this.changeCommont.bind(this)}></textarea>
                </div>
                <button className='btn' onClick={this.clickBtn.bind(this)}>发布</button>
            </div>
        )
    }
}

export default CommontInput;