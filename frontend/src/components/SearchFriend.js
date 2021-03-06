import React,{useState,useEffect} from "react"
import {Form, Button} from "react-bootstrap"
import  "css/Friends.css"
import { useToasts } from 'react-toast-notifications'
import axios from "axios"

function SearchFriend(props)  {

    const [value, setValue] = useState("")
    
    const [results, setResults] = useState([])
    const [list, setList] = useState([])
    const { addToast } = useToasts()

    useEffect(()=> {
        const serchURL = `/api/users/?userid=${value}`
        fetch(serchURL)
        .then(res=>res.json())
        .then(data=> {
            setResults(data)
        })
    },[value])

    const handleChange = (event) => {
        setValue(event.target.value);
      }

    const hide = () => {
        props.onHide()
    }
      const addFriend = (username) => {
            const params =  { friendid: [username] };
            axios.get("api/loginuser").then()
            axios.post("/api/users/tanaka1/friend/", params).then((res) => {
                console.log(res);
            });
            hide()
            addToast(`Added ${username} to your friend!`, 
                    {appearance: 'success',autoDismiss: true, autoDismissTimeout:3500}) 
       
      }

    const renderSearchResults = () => {

        const list =  results.map((result) => {
            const birthday = result.birthday.split('-')
            const year = birthday[0]
            const month = birthday[1].replace(/^0+/,'')
            const day = birthday[2].replace(/^0+/,'')
            const username = result.username

                return(
                    <div>   
                        <li onClick={() => addFriend(username)}>
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"/>
                            <div class="friend-birthday">
                                <h3 class="friend-birthday-year">{year}</h3>
                            <h2 class="friend-birthday-month-date"> {month}/{day}</h2>
                            </div>
                            <h4 class="friend-name">{username}</h4>
                        </li>
                </div>
                )
        })

        return list
    }
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value)
        
        setList(renderSearchResults)
        
    }

        return (
            <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            type="search"
            placeholder="Enter user id"
            value={value}
            onChange={handleChange}/>
            <div className="friends-ser-bt">
            <Button variant="outline-secondary" type="submit">
                Search
            </Button>
            </div>
            <div className="friends-list">
            <div className="friends-serach-ul">
            {list}
            </div>
            </div>
        </Form.Group>
        </Form>
        )
}

export default SearchFriend
