import React,{useState,useEffect, Component} from "react"
import {Form, Button} from "react-bootstrap"
import FriendItems from "./FriendItems";


class SearchFriend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results:{},
            query: ''
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

    fetchSearchResults(query) {
        const serchURL = `http://18.176.60.7:8000/api/users/${query}`

        fetch(serchURL,{
            mode: 'cors'
          })
		.then(res=>res.json())
		.then(data=> this.setState({results: data.friends}))
    }

    handleChange(event) {
        const {value, name} = event.target
            this.setState({[name]: value })
            this.fetchSearchResults(value)
      }

      renderSearchResults() {
        const {results} = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
				{results.map((result) => {
					const birthday = result.birthday.split('-')
                    const year = birthday[0]
                    const month = birthday[1].replace(/^0+/,'')
                    const day = birthday[2].replace(/^0+/,'')
                    const username = result.username
                    return(
                        <li>
                            <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"/>
                            <div class="friend-birthday">
                                <h3 class="friend-birthday-year">{year}</h3>
                            <h2 class="friend-birthday-month-date"> {month}/{day}</h2>
                            </div>
                            <h4 class="friend-name">{username}</h4>
                        </li>
                    )
				})}
			</div>
            );
        }
    };
    
    
    //     handleSubmit(event) {
    //         this.setState({searchword: this.state.value})
    
    //         this.props.setSearch(this.state.value)
    //         // alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //         console.log(this.state.value)
    //   }

    render() {

        return (
            <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control 
            type="search"
            placeholder="Enter user id"
            value={this.state.query}
            name="query"
            onChange={this.handleChange}/>

            {this.renderSearchResults}
        </Form.Group>
            {/* <Button variant="outline-primary" type="submit" >
                Search
            </Button> */}
        </Form>
        )
    }
}

export default SearchFriend
