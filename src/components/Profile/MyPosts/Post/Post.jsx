import React from 'react';
import classes from './Post.module.css';


const Post = (props) =>{
	return (
	<div>
		<h3>Заголовок</h3>
		<p>{props.text}</p>
	 </div>
	)
}
export default Post