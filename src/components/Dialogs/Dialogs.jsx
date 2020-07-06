import React from 'react';
import classes from './dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) =>{
	 
	return (
		<div className={classes.dialogItem}>
			<NavLink to={'/dialogs/' + props.id}>
				{props.name}
			</NavLink>
		</div>
	)
}

const MessageItem = (props) =>{
	return(
		<div className={classes.messagesItem}>
			{props.message}
		</div>
	)
}

const Dialogs = (props) =>{
	
	let dialogsData = [
		{name:'Dima',id:1},
		{name:'Roma',id:2},
		{name:'Grisha',id:3}
	]
	let dialogsElements= dialogsData.map((dialog) => {return (<DialogItem name = {dialog.name} id={dialog.id} />)});
	let messages = [
		{message:'hi Dima',id:1},
		{message:'hi Roma',id:2},
		{message:'hi Grisha',id:3}
	]
	let messageElements = messages.map((m) => {return(<MessageItem message={m.message} />)})
	
	return(
		<div className= {classes.dialogsWrapper}>
			<div className={classes.dialogsItemsWrapper}>
				{dialogsElements}
			</div>
			<div className={classes.messagesItemsWrapper}>
				{messageElements}
			</div>
		</div>
	)
}

export default Dialogs;