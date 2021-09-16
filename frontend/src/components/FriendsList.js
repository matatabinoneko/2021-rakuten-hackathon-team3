import React from "react"
import FriendItems from "./FriendItems"
import "css/Friends.css"
import VerticalModal from "./VerticalModal";

function FriendsList(props) {

    return(
        <div className="mt-5 friends-container">
            <h2>FriendsList</h2>
            <div className="friends-list">
            <ul className="friends-list-ul">
			<FriendItems friends={props.friends}
						 setFriendUserId={props.setFriendUserId}
			/>
            </ul>
            </div>
            <VerticalModal />
        </div>
    )
}

export default FriendsList;

