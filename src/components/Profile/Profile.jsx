import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo'

const Profile = (props) =>{
	return (
		<div className={classes.profileWrapper}>
			<MyInfo name='User name'/>
			<MyPosts posts={props.profilePage.posts} newPostText = {props.profilePage.newPostText} addPost={props.addPost} addNewPostText={props.addNewPostText}/>
		</div>
	)
}
export default Profile 