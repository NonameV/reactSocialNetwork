import React from 'react';
import classes from './messageItem.css'

const MessageItem = (props) =>{
	return(
		<div className={classes.messagesItem}>
			{props.message}
		</div>
		
	)
}

export default MessageItem