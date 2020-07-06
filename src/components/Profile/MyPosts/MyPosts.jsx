import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () =>{
	let postData = [
		{message:'hi how are you',id:1, likeCount: 12},
		{message:'hi how are you2',id:1, likeCount: 124},
		{message:'hi how are you3',id:1, likeCount: 412}
	]
	return (
	<div className={classes.postsVraper}>
		<h2>
			Мои посты
		</h2>
		<textarea placeholder="Добавь запись">
			
		</textarea>
		<button>send</button>
		
		<Post text = {postData[0].message} likesCount = {postData[0].likeCount}/>
		<Post text = {postData[1].message} likesCount = {postData[1].likeCount}/>
	 </div>
	)
}
export default MyPosts