import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) =>{
	/*let postData = [
		{message:'hi how are you',id:1, likeCount: 12},
		{message:'hi how are you2',id:1, likeCount: 124},
		{message:'hi how are you3',id:1, likeCount: 412}
	]*/
	let posts = props.posts.map((post) => {return(<Post text={post.message} likesCount={post.likeCount} />)})
	
	return (
	<div className={classes.postsWraper}>
		<h2>
			Мои посты
		</h2>
		<textarea placeholder="Добавь запись">
			
		</textarea>
		<button>send</button>
		{posts}
		
	 </div>
	)
}
export default MyPosts