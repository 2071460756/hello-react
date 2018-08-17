import React,{Component} from 'react';
import PropTypes from 'prop-types'

class Commont extends Component{
    static PropTypes = {
        common:PropTypes.object
    }
    constructor(props){
        super(props);
    }

    render(){
        let {name,comment} = this.props.itemData;
        return(
            <li>
                  <i className='name'>{name}:</i>
                 <span className='common-text'>{comment}</span>                        
          </li>
        )
    }

}

export default Commont;