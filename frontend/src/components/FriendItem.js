import React, {useState} from "react"
import {Card} from "react-bootstrap"

function FriendItem() {

    const userName = useState("")
    const birthDay = useState("")
    const iconImage = useState("")

    return (
        <Card style={{ width: '15rem' }}>
        <Card.Header>山田太郎</Card.Header>
            <Card.Body>
                <Card.Title>9/13</Card.Title>
                <Card.Text>
                   send a birth day present!
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default FriendItem