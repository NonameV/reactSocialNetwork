import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter,Route} from 'react-router-dom'

function App(props) {
	/*let posts = [
		{message:'hi how are you',id:1, likeCount: 12},
		{message:'hi how are you2',id:1, likeCount: 124},
		{message:'hi how are you3',id:1, likeCount: 412}
	]*/
  return (
	<BrowserRouter>
		<div className="app-wrapper">
			<Header />
			<Nav />
			<div className= 'app-wrapper-content'>
				<Route path = '/dialogs' render={() => <Dialogs state={props.appState.messagesPage} />} />
				<Route path = '/profile' render={() => <Profile state={props.appState.profilePage} />}/>
			</div>
			
		</div>
	</BrowserRouter>
  );
}


export default App;
