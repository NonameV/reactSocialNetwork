import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import {BrowserRouter,Route} from 'react-router-dom'

function App(props) {
  return (
	<BrowserRouter>
		<div className="app-wrapper">
			<Header />
			<Nav />
			<div className= 'app-wrapper-content'>
				<Route path = '/dialogs' render={() => <Dialogs state={props.appState.messagesPage} addMessage={props.addMessage}/>} />
				<Route path = '/profile' render={() => <Profile profilePage={props.appState.profilePage} addPost={props.addPost} addNewPostText={props.addNewPostText}/>}/>
			</div>
			
		</div>
	</BrowserRouter>
  );
}


export default App;
