import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import "css/Header.css";
import logo from "../data/logo/RakutenBirthday.png";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
	const [value, setValue] = useState("");
	const [searchword, setSearchword] = useState("");
	const history = useHistory();

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSubmit = (event) => {
		setSearchword(value);
		props.setSearch(value);
		event.preventDefault();
		console.log(value);
	};

	return (
		<div className="header">
			<Navbar>
				{/* <Navbar bg="light" expand="lg"> */}

				{/* <Navbar.Brand className="navbar-brand mb-0 h1" href="/">RakutenBirthday</Navbar.Brand> */}
				<Link to="/top">
					<Navbar.Brand className="navbar-brand mb-0 h1">
						<img className="header__logo" src={logo} alt="logo" />
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link
							onClick={() => {
								const userId = localStorage.getItem("userId");
								const path = userId
									? `/user/${userId}`
									: "/signin";
								history.push(path);
							}}
						>
							my page
						</Nav.Link>

						{/* <Nav.Link href="/logout">Logout</Nav.Link> */}
					</Nav>
					<Form className="d-flex" onSubmit={handleSubmit}>
						<FormControl
							type="search"
							placeholder="Search"
							className="mr-2"
							aria-label="Search"
							value={value}
							onChange={handleChange}
						/>
						<Button
							variant="outline-secondary"
							type="submit"
							value="Submit"
						>
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
