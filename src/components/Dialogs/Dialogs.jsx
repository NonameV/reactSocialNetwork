import React from 'react';
import classes from './dialogs.module.css';
import MessageItem from './MessageItem/MessageItem'
import DialogItem from './DialogItem/DialogItem'
import MessageInput from './MessageInput/MessageInput'




const Dialogs = (props) =>{
	
	
	let dialogsElements= props.state.dialogsData.map((dialog) => {return (<DialogItem name = {dialog.name} id={dialog.id} />)});

	
	let messageElements = props.state.messages.map((m) => {return(<MessageItem message={m.message} />)})
	
	return(
		<div className= {classes.dialogsWrapper}>
			<div className={classes.dialogsItemsWrapper}>
				{dialogsElements}
			</div>
			<div className={classes.messagesItemsWrapper}>
				{messageElements}
				<MessageInput addMessage={props.addMessage}/>
			</div>
		</div>
	)
}

export default Dialogs;