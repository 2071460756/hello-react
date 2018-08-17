import React,{Component} from 'react';
import Commont from './Commont';

class CommontList extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let list = this.props.inner;
        return(
            <div>
                <ul>{
                     list.map((item,index)=>{
                         return(
                            <Commont itemData={item} key={index}/>
                         )
                     })
                }
                    
                </ul>
            </div>
        )
    }
}

export default CommontList;