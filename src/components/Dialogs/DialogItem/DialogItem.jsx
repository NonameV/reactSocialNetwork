import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './dialogsItem.css'

const DialogItem = (props) =>{
	 
	return (
		<div className={classes.dialogItem}>
			<NavLink to={'/dialogs/' + props.id}>
				{props.name}
			</NavLink>
		</div>
	)
}

export default DialogItem