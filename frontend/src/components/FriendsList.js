import React from "react"
import FriendItem from "./FriendItem"
import {ListGroup} from "react-bootstrap"
import styles from "css/FriendsList.css"
import { useState } from "react";

function FriendsList() {

	const friends = [
		{userName: "山田太郎", birthDay:"9/12", iconImage:"icon"}, 
		{userName: "佐藤花子", birthDay:"9/8", iconImage:"icon"},
		{userName: "田中一", birthDay:"4/5", iconImage:"icon"},
		{userName: "田中一", birthDay:"4/5", iconImage:"icon"},
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
