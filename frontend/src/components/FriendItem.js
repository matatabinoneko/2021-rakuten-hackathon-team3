import React, {useState} from "react"
import {Card} from "react-bootstrap"
import {ListGroup} from "react-bootstrap"

function FriendItem(props) {

        const list = props.friends.map((friend,id) => (
                <ListGroup.Item key={id}>
                    <Card style={{ width: '15rem' }}>
                    <Card.Header>{friend.userName}</Card.Header>
                        <Card.Body>
                    <Card.Title>{friend.birthDay}</Card.Title>
                            <Card.Text>
                            send a birth day present!
                            </Card.Text>
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