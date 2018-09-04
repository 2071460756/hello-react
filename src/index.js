import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css'

// import App from './App';

import Life from './page/Life';

import LifeTwo from './page/Life2';

import LiftThree from './page/life_loadData'

import DomOperation from './page/Dom_ref' //用ref获取DOm

import ShowBody from './page/PropHtml' //属性里面可以写JSX语言









import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
// ReactDOM.render(<ReduxIndex />, document.getElementById('root'));
const store = createStore(commentsReducer)
ReactDOM.render(<Provider store={store}>
    <CommentApp/>
 </Provider>,
 document.getElementById('root')
 );