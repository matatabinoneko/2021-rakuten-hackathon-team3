import React from "react"
import FriendItem from "./FriendItem"
import {ListGroup} from "react-bootstrap"
import { useState } from "react";

function FriendsList() {

	const friends = useState([])
	
	for (let i=1; i < 3; i++) {
		// friends.push(`<FriendItem${}/>`)
	}


	return(
		<div>
		<h3>FriendsList</h3>
		<ul>
			
			<ListGroup.Item><FriendItem /></ListGroup.Item>
			<ListGroup.Item><FriendItem /></ListGroup.Item>
		</ul>
		</div>
	)
}

export default FriendsList;
