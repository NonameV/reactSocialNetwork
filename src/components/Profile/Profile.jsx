import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo'

const Profile = (props) =>{
	return (
		<div className={classes.profileWrapper}>
			<MyInfo name='User name'/>
			<MyPosts state={props.state} addPost={props.addPost}/>
		</div>
	)
}
export default Profile 