import React from "react"
import FriendItems from "./FriendItems"
import "css/Friends.css"
import VerticalModal from "./VerticalModal";

function FriendsList(props) {

    return(
        <div className="friends-container">
            <h3>FriendsList</h3>
            <div className="friends-list">
            <ul className="friends-list-ul">
            <FriendItems friends={props.friends}/>
            </ul>
            </div>
            <VerticalModal />
        </div>
    )
}

export default FriendsList;

