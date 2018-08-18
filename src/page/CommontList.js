import React,{Component} from 'react';
import Commont from './Commont';

class CommontList extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps = {
        inner:[]
    }
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render(){
        let list = this.props.inner;
        console.log(list)
        return(
            <div>
                <ul>{
                     list.map((item,index)=>{
                         return(
                            <Commont itemData={item} key={index} index={index} onDeleComment={this.handleDeleteComment.bind(this)}/>
                         )
                     })
                }
                    
                </ul>
            </div>
        )
    }
}

export default CommontList;