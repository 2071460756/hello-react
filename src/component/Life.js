import React,{Component} from 'react';

class Input extends Component{
    render(){
        return(
            <div>
            <input type='text'/>
        </div>
        )
    }
}
class Life extends Component{
    constructor(){
        console.log('constructor')
        super()
        this.state={
            isShowHeader:true
        }
    }
    componentWillMount () {
        console.log('component will mount')
      }
      componentDidMount () {
        console.log('component did mount')
      }
    
    handleShowOrHide(){
        this.setState({
            isShowHeader:!this.state.isShowHeader
        })
    }

    componentWillUnmount() {
        console.log('component will unmount')
      }
    render(){
        return(
            <div>
                {this.state.isShowHeader ? <Input />:null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏标题
                </button>
            </div>
        )
    }
}

export default Life;