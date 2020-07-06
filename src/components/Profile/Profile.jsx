import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import MyInfo from './MyInfo/MyInfo'

const Profile = (props) =>{
	/*let posts = [
		{message:'hi how are you',id:1, likeCount: 12},
		{message:'hi how are you2',id:1, likeCount: 124},
		{message:'hi how are you3',id:1, likeCount: 412}
	]*/
	
	return (
		<div className={classes.profileWrapper}>
			<MyInfo name='User name'/>
			<MyPosts state={props.state}/>
		</div>
	)
}
export default Profile 