import React from "react";
import { Nav, Navbar, Form ,FormControl, Button } from 'react-bootstrap'
import "css/Header.css"


class Header extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value: ''
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
    this.setState({value: event.target.value});
  }

  
	handleSubmit(event) {
		this.setState({searchword: this.state.value})

		this.props.setSearch(this.state.value)
		// alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
		console.log(this.state.value)
  }

	render(){
		return(
		<div className="header">
      <Navbar>
			{/* <Navbar bg="light" expand="lg"> */}
        <Navbar.Brand className="navbar-brand mb-0 h1" href="/">RakutenBirthday</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
					<Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/setting">
              Setting
            </Nav.Link>
            {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
          </Nav>
          <Form className="d-flex" onSubmit={this.handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
							value={this.state.value} 
							onChange={this.handleChange}
							
            />
            <Button variant="outline-secondary" type="submit" value="Submit">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
		)
	}
}


export default Header
