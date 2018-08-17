import React,{Component} from 'react';

class LiftThree extends Component{
    constructor(){
        super()
        this.state={
            content:'加载中'
        }
    }
    getPostData() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, '已经加载完返回~')
        })
    }

    refresh(){
        this.setState({
            content:'加载中'
        })
        this.getPostData().then((data)=>{
            this.setState({
                content:data
            })
        })
    }
   componentWillMount(){
       this.refresh();
   }
   componentDidMount(){
       console.log(this.button)
   }
   componentWillUpdate(){
    console.log('组件开始重新渲染之前调用')
  }
  componentDidUpdate(){
      console.log('组件重新渲染并且把更改变更到真实的 DOM 以后调用')
  }
    render(){
        return(
            <div>
                 <div className='post-content'>{this.state.content}</div>
                <button ref={(button)=>this.button=button} onClick={this.refresh.bind(this)}>刷新</button>
            </div>
        )
    }
}

export default LiftThree;