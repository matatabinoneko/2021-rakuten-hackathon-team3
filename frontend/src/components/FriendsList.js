import React from "react"
import FriendItems from "./FriendItems"
import {ListGroup, PlaceholderButton} from "react-bootstrap"
import styles from "css/Friends.css"
import AddFriendButton from "./AddFriendButton";
import Placement from "./Placement"
import VerticalModal from "./VerticalModal";


// function ClickHandler() {
// }
function FriendsList() {

	const friends = [
		{id:1,userName: "Smith", birthDay:"9/15", iconImage:"icon"}, 
		{id:2,userName: "Arnold", birthDay:"9/23", iconImage:"icon"},
		{id:3,userName: "Ethan", birthDay:"9/30", iconImage:"icon"},
		{id:4,userName: "Alicia", birthDay:"10/5", iconImage:"icon"},
		{id:5,userName: "Max", birthDay:"10/24", iconImage:"icon"},
		{id:5,userName: "Tommy", birthDay:"11/5", iconImage:"icon"},
		{id:5,userName: "Lee", birthDay:"1/20", iconImage:"icon"},
		{id:5,userName: "Black", birthDay:"4/5", iconImage:"icon"},
	]

	console.log({friends})

	return(
		<div class="friends-container">
			<h3>FriendsList</h3>
			<div class="friends-list">
            <ul class="friends-list-ul">
			<FriendItems friends={friends}/>
			</ul>
			</div>
			<VerticalModal />
		</div>
	)
}

export default FriendsList;
