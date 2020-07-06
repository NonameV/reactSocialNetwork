import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Content = () =>{
	return (
	<div className={classes.content}>
		<MyPosts />
		
	 </div>
	)
}
export default Content