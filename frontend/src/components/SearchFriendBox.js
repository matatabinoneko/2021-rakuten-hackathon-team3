import React,{useState,useEffect} from "react"
import {Form, Button} from "react-bootstrap"


function SearchFriendBox() {


   

    useEffect(() => { 
			  fetch('http://localhost:8000/api/users/')
			  .then(res=>res.json())
			  .then(data=> setFriends(data))
        },[pro])

    return (
        <Form onSubmit={}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="search" placeholder="Enter user id" onChange={}/>
        </Form.Group>
            <Button variant="outline-primary" type="submit" >
                Search
            </Button>
        </Form>
    )

}

export default SearchFriendBox