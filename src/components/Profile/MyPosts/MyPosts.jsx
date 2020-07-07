import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) =>{
	
	let posts = props.state.posts.map((post) => {return(<Post text={post.message} likesCount={post.likeCount} />)})
	
	let newPostElement = React.createRef();
	
	let addPost = () =>{
		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value= '';
	}
	return (
	<div className={classes.postsWraper}>
		<h2>
			Мои посты
		</h2>
		<textarea ref={newPostElement} type='reset' placeholder="Добавь запись">
			
		</textarea>
		<button onClick={addPost}>send</button>
		{posts}
		
	 </div>
	)
}
export default MyPosts