import React, {useState} from "react"
import {Card} from "react-bootstrap"
import {ListGroup, Image} from "react-bootstrap"
import styles from "css/Friends.css"



function FriendItems(props) {

        const list = props.friends.map((friend,id) => (
                <li>
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"/>
                    <div class="friend-birthday">
                        <h3 class="friend-birthday-year">2021</h3>
                    <h2 class="friend-birthday-month-date"> {friend.birthDay}</h2>
                    </div>
                    <h4 class="friend-name">{friend.userName}</h4>
                </li>
            ));

    return (
        <div>
            {list}
        </div>
    )
}

export default FriendItems