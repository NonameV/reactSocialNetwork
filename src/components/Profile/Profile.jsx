import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo'

const Profile = () =>{
	return (
		<div className={classes.profileWrapper}>
			<MyInfo name='User name'/>
			<MyPosts />
		</div>
	)
}
export default Profile 