import React,{Component} from 'react';
import PropTypes from 'prop-types'

class Commont extends Component{
    static PropTypes = {
        comment:PropTypes.object.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            timeString:'',
        }
    }
    handleDeleComment(){
        console.log(this.props.index)
        if(this.props.onDeleComment){
            this.props.onDeleComment(this.props.index)
        }
    }
    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }
    componentWillUnmount(){
        console.log(this._timer)
        clearInterval(this._timer)
    }

    _updateTimeString(){
        const comment = this.props.itemData;
        const duration = (+Date.now() - comment.createdTime)/1000
        this.setState({
            timeString:duration > 60 ?
                `${Math.round(duration/60)}分钟前`
                :`${Math.round(Math.max(duration,1))}秒前`
        })
    }
    render(){
        let {name,comment} = this.props.itemData;
        return(
            <li>
                <i className='name'>{name}:</i>
                <span className='common-text'>{comment}</span>
                <span className="hide dele-btn" onClick={this.handleDeleComment.bind(this)}>
                    删除
                </span>
                <div className="comment-time ">{this.state.timeString}</div>
            </li>
        )
    }

}

export default Commont;