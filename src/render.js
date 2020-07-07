import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state'
import {addMessage} from './redux/state'
import {addNewPostText} from './redux/state'

export let rerenderEntireTree = (state) =>{
		ReactDOM.render(
	  <React.StrictMode>
		<App appState={state} addPost={addPost} addMessage={addMessage} addNewPostText={addNewPostText} />
	  </React.StrictMode>,
	  document.getElementById('root')
	);
};

