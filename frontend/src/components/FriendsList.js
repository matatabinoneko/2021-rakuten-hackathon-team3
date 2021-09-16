import React, {useState, useEffect} from "react"
import FriendItems from "./FriendItems"
import axios from "axios"
import {ListGroup, PlaceholderButton} from "react-bootstrap"
import styles from "css/Friends.css"
import AddFriendButton from "./AddFriendButton";
import Placement from "./Placement"
import VerticalModal from "./VerticalModal";


// function ClickHandler() {
// }
function FriendsList(props) {

    return(
        <div class="friends-container">
            <h3>FriendsList</h3>
            <div class="friends-list">
            <ul class="friends-list-ul">
            <FriendItems friends={props.friends}/>
            </ul>
            </div>
            <VerticalModal />
        </div>
    )
}

export default FriendsList;

