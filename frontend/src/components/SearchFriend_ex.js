import React,{useState,useEffect, Component} from "react"
import {Form, Button} from "react-bootstrap"
import axios from "axios"
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
            username:'',
            loading: false,
            message: '',
        }
        this.cancel = ''
        this.handleChange = this.handleChange.bind(this)
        this.fetchSearchResults = this.fetchSearchResults.bind(this)
        this.renderSearchResults = this.renderSearchResults.bind(this)
    }

    fetchSearchResults(friendId) {
        const serchURL = `/api/users/?userid=${friendId}`

        if (this.cancel) {
            this.cancel.cancel()
        }

        this.cancel = axios.CancelToken.source()

        axios.get(serchURL,{
            cancelToken: this.cancel.token,
            mode: 'cors',

          })
		.then(res=>res.json())
		.then(data=> { 
            const resultNotFoundMsg = data.length
				? 'There are no more search results. Please try a new search.': '';
            this.setState({
                results: data,
                message: resultNotFoundMsg,
				loading: false,
            })
         })
        .catch((error) => {
			if (axios.isCancel(error) || error) {
				this.setState({
					loading: false,
					message: 'Failed to fetch results.Please check network',
				})
			}
		})
    }

    handleChange(event) {
        const {value, name} = event.target

        if (!value) {
            this.setState({ [name]: value, message: '' })
        }
            this.setState({
                [name]: value,
                loading: true,
                message: ''
             })

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
            if (Object.keys(this.state.results).length && this.state.results.length) {
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
            }
        })

        this.setState({list: list})

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
