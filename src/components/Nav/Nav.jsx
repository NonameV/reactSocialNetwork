import React from 'react';
import classes from './nav.module.css';
import {NavLink} from 'react-router-dom'

const Nav = () =>{
	return (
<nav className = {classes.nav}>
		<ul>
			<li className={classes.item}><NavLink to = '/profile' activeClassName={classes.active}>My profile</NavLink></li>
			<li className={`${classes.item} ${classes.active}`}><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink></li>
			<li className={classes.item}><a href=''>Settings</a></li>
			<li className={classes.item}><a href=''>Exit</a></li>
		</ul>
	 </nav>
	)
}
export default Nav