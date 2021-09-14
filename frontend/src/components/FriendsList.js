import React from "react"
import FriendItem from "./FriendItem"
import {ListGroup} from "react-bootstrap"
import styles from "css/Friends.css"
import { useState } from "react";



function FriendsList() {

	const friends = [
		{id:1,userName: "山田太郎", birthDay:"9/12", iconImage:"icon"}, 
		{id:2,userName: "佐藤花子", birthDay:"9/8", iconImage:"icon"},
		{id:3,userName: "田中一", birthDay:"4/5", iconImage:"icon"},
		{id:4,userName: "田中一", birthDay:"4/5", iconImage:"icon"},
		{id:5,userName: "田中一", birthDay:"4/5", iconImage:"icon"},
		{id:5,userName: "田中一", birthDay:"4/5", iconImage:"icon"},
		{id:5,userName: "田中一", birthDay:"4/5", iconImage:"icon"},
		{id:5,userName: "田中一", birthDay:"4/5", iconImage:"icon"},
	]

	console.log({friends})

	return(
		<div>
		<h3>FriendsList</h3>
		<ul className="scroll">
			<FriendItem friends={friends}/>
		</ul>
		</div>
	)
}

export default FriendsList;
