import React from 'react';
import classes from './myinfo.module.css';
import Clock from './MyCurrentTime/MyCurrentTime'


const MyInfo = (props) =>{
	return (
		<div className={classes.myinfoWrapper}>
			<img className={classes.myinfoImg} src='https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1557241670&w=678&h=381'/>
			<h1 className={classes.userName}>{props.name}</h1>
			<Clock />
		</div>
	)
}
export default MyInfo 