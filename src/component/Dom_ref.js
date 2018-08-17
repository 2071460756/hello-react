import React,{Component} from 'react';

class DomOperation extends Component{
    constructor(){
        super()
        this.state ={

        }
    }
    componentDidMount(){
        console.log(this.a.innerHTML)
        this.b.focus();
        console.log(this.h.clientHeight)
    }

    render(){
        return(
            <div>
                <div>
                    <h2 ref={(h)=>this.h = h}>学校2015</h2>
                    <p>你觉得她怎么样呢，我很喜欢那个姐姐的，唉，可惜，她没跟男主在一起</p>
                </div>
                <input ref={(b) => this.b = b}/>
                <button ref={(a1)=>this.a = a1}>提交</button>
            </div>
        )
    }
}

export default DomOperation;