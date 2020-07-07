import React from 'react';
import classes from './messageInput.css'


const MessageInput = (props) =>{
	let inputRef = React.createRef();
	let addNewMessage = () => {
		let text = inputRef.current.value;
		props.addMessage(text)
		}
	return(
		<div>
			<input ref={inputRef} className ={classes.input} />
			<button onClick={addNewMessage}>send</button>
		</div>
	)
}

export default MessageInput;