import React from 'react'
import { Nav, Navbar, Form ,FormControl, Button } from 'react-bootstrap'

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="navbar-brand mb-0 h1" href="/">RakutenGift</Navbar.Brand>
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
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
