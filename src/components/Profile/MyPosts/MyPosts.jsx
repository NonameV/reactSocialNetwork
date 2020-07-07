import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) =>{
	
	let posts = props.posts.map((post) => {return(<Post text={post.message} likesCount={post.likeCount} />)})
	
	let newPostElement = React.createRef();
	
	let addPost = () =>{
		props.addPost(props.newPostText);
		props.addNewPostText('');
	}
	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.addNewPostText(text)
	}
	
	return (
	<div className={classes.postsWraper}>
		<h2>
			Мои посты
		</h2>
		<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
		<button onClick={addPost}>send</button>
		{posts}
		
	 </div>
	)
}
export default MyPosts