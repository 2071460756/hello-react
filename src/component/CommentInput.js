import React, { Component } from 'react';

class CommentInput extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
                
                <div class="comment-input">
                    <div class="comment-field">
                        <span class="comment-field-name">用户名</span>
                        <div class="comment-field-input">
                            <input value="23123"/>
                        </div>
                    </div>
                    <div class="comment-field">
                        <span class="comment-field-name">评论内容：</span>
                        <div class="comment-field-input">
                            <textarea></textarea>
                        </div>
                    </div>
                    <div class="comment-field-button">
                        <button>发布</button>
                    </div>
                </div>
        )
    }
}

export default CommentInput