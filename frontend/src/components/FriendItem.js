import React, {useState} from "react"
import {Card} from "react-bootstrap"
import {ListGroup, Image} from "react-bootstrap"
import styles from "css/Friends.css"



function FriendItem(props) {

        const list = props.friends.map((friend,id) => (
                <ListGroup.Item key={id}>
                    <Card style={{ width: '15rem', height: "6rem" }}>
                        {/* <Card.Img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg" placeholder="IMG" roundedCircle/> */}
                    <Card.Header style={{textAlign: "right"}}>{friend.userName}</Card.Header>
                        <Card.Body>
                    <Card.Title style={{textAlign: "right"}}>{friend.birthDay}</Card.Title>
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            ));

    return (
        <div>
            <ListGroup>
            {list}
            </ListGroup>
        </div>
    )
}

export default FriendItem