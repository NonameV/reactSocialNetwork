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
	let messagesData = [
		{message:'hi Dima',id:1},
		{message:'hi Roma',id:2},
		{message:'hi Grisha',id:3}
	]
	return(
		<div className= {classes.dialogsWrapper}>
			<div className={classes.dialogsItemsWrapper}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
			</div>
			<div className={classes.messagesItemsWrapper}>
				<MessageItem message ={messagesData[0].message}/>
				<MessageItem message ={messagesData[1].message}/>
				<MessageItem message ={messagesData[2].message}/>
			</div>
		</div>
	)
}

export default Dialogs;