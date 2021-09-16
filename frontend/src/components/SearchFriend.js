import React,{useState,useEffect, Component} from "react"
import {Form, Button} from "react-bootstrap"
import FriendItems from "./FriendItems";


class SearchFriend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list:[],
            results:[],
            query: '',
            birthday: '',
            year: '',
            month:'',
            date:'',
            username:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.fetchSearchResults = this.fetchSearchResults.bind(this)
        this.renderSearchResults = this.renderSearchResults.bind(this)
    }


    // componentDidMount() {
    //     fetch('http://localhost:8000/api/users/')
	// 	.then(res=>res.json())
	// 	.then(data=> this.setState({friend: data}))
    // }

    fetchSearchResults(friendId) {
        const serchURL = `/api/users/?userid=${friendId}`

        fetch(serchURL,{
            mode: 'cors'
          })
		.then(res=>res.json())
		.then(data=> { 
            this.setState({results: data})
         })
    }

    handleChange(event) {
        const {value, name} = event.target
            this.setState({[name]: value })

            this.fetchSearchResults(value)
            this.renderSearchResults()
      }

    renderSearchResults() {

        const list =  this.state.results.map((result) => {
            const birthday = result.birthday.split('-')
            const year = birthday[0]
            const month = birthday[1].replace(/^0+/,'')
            const day = birthday[2].replace(/^0+/,'')
            const username = result.username

            console.log(birthday)
            
            return(
                <div>   
                <p>hello</p>
                       <li>
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

        console.log(list)
        this.setState({
            list: list
        })

        return (<>{list}</>)

    }
    
    
    //     handleSubmit(event) {
    //         this.setState({searchword: this.state.value})
    
    //         this.props.setSearch(this.state.value)
    //         // alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //         console.log(this.state.value)
    //   }

    render() {

        return (
            <Form onSubmit={(event)=>event.preventDefault }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            type="search"
            placeholder="Enter user id"
            value={this.state.query}
            name="query"
            onChange={this.handleChange}/>
            <div className="friends-list">
            <div className="friends-list-ul">
            {this.state.list}
            </div>
            </div>
            {/* {this.renderSearchResults} */}

        </Form.Group>
            {/* <Button variant="outline-primary" type="submit" >
                Search
            </Button> */}
        </Form>
        )
    }
}

export default SearchFriend
