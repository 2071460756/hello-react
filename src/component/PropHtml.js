import React,{Component} from 'react';

class Layout extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        console.log(this.props.children[0])
        return(
            <div>
                <div>
                    {this.props.children[0]}
                </div>
                <div>
                {this.props.children}
                </div>
            </div>
        )
    }
}
//写一个黑色边框的组件
class Border extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className='border-style'>
            {this.props.children}
            </div>
        )
    }
}

const getDefaultStyledPost =(defaultStyle)=>{
  return(
    class StyleText extends Component{
        constructor(props){
            super(props)
            this.state={

            }
        }
        render(){
            return(
                <p>
                    我是文字，样式是传进来的
                </p>
            )
        }
    }
  )  
}

class ShowBody extends Component{
    constructor(){
        super()
        this.state={
            content:'<h1>练习dangerouslySetInnerHTML用法</h1>'
        }
    }

    render(){
        return(
            <div>
                <Layout >
                <h2>React.js 小书</h2>
                <div>开源、免费、专业、简单</div>
                  订阅：<input /> 
            </Layout>
            <Border>
                啦啦啦啦-这是调用容器组件1
            </Border>
            <Border>
                <h2>我是容器组件2</h2>
                <p>我们用的是同一个容器组件</p>
            </Border>
            {<h5>我来测试一下jsx可以转化为</h5>}
            <div  dangerouslySetInnerHTML={{__html: this.state.content}}></div>
            {getDefaultStyledPost()}
            </div>
        )
    }
}

export default ShowBody;

