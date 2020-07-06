import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
		{message:'hi how are you',id:1, likeCount: 12},
		{message:'hi how are you2',id:1, likeCount: 124},
		{message:'hi how are you3',id:1, likeCount: 412}
	]
let dialogsData = [
		{name:'Dima',id:1},
		{name:'Roma',id:2},
		{name:'Grisha',id:3}
	]
let messages = [
		{message:'hi Dima',id:1},
		{message:'hi Roma',id:2},
		{message:'hi Grisha',id:3}
	]
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogsData} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
