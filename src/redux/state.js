import {rerenderEntireTree} from '../render.js'

let state = {
	profilePage:{
		posts:[
			{message:'hi how are you',id:1, likeCount: 12},
			{message:'hi how are you2',id:1, likeCount: 124},
			{message:'hi how are you3',id:1, likeCount: 412}
		]},
	messagesPage:{
		messages:[
			{message:'hi Dima',id:1},
			{message:'hi Roma',id:2},
			{message:'hi Grisha',id:3}
		],
		dialogsData:[
			{name:'Dima',id:1},
			{name:'Roma',id:2},
			{name:'Grisha',id:3}
		]
	}
		
}
export let addMessage = (dialogMessage) =>{
	let newMessage = {
		message: dialogMessage,
		id:1
	}
	state.messagesPage.messages.push(newMessage);
	rerenderEntireTree(state);
}
export let addPost = (postMessage) => {
	let neewPost = {
		message: postMessage,
		id: 5,
		likeCount: 3
	}
	state.profilePage.posts.push(neewPost)
	console.log(state.profilePage.posts);
	rerenderEntireTree(state);
}


export default state;