import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () =>{
	return (
	<div className={classes.postsVraper}>
		<h2>
			Мои посты
		</h2>
		<input placeholder="Добавь запись">
			
		</input>
		<button>send</button>
		
		<Post text = 'newText'/>
		<Post text = 'newText2'/>
	 </div>
	)
}
export default MyPosts