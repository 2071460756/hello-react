import React,{Component} from 'react';

class LifeTwo extends Component{
    constructor(){
        super()
        this.state={
           isShowClock:true
        }
    }
    handleShowOrHide () {
      this.setState({
        isShowClock: !this.state.isShowClock
      })
    }
  render(){
      return(
          <div>
              {this.state.isShowClock ? <Clock /> : null}
              <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏标题
                </button>
          </div>
      )
  }
 
}

export default LifeTwo;

class Clock extends Component {
    constructor () {
      super()
      this.state = {
        date: new Date()
      }
    }
    componentWillUnmount() {
      clearInterval(this.timer)
      console.log('component will unmount')
    }
  
    componentWillMount () {
      console.log('componentWill Mount')
      this.timer = setInterval(() => {
        this.setState({ date: new Date() })
      }, 1000)
    }

    componentDidUpdate(){
      console.log('组件重新渲染之前调用')
    }
    render () {
        return (
          <div>
            <h1>
              <p>现在的时间是</p>
              {this.state.date.toLocaleTimeString()}
            </h1>
          </div>
        )
      }
  }