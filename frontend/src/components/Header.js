import React from "react";
import {
	Nav,
	Navbar,
	Form,
	FormControl,
	Button,
	Container,
	NavDropdown,
} from "react-bootstrap";
import "css/Header.css";
import logo from "../data/logo/RakutenBirthday.png";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalState } from "App";
import axios from "axios";

function Header(props) {
	const [value, setValue] = useState("");
	const [searchword, setSearchword] = useState("");
	const [userId, setUserId] = useGlobalState("userId");

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

	const signout = () => {
		axios
			.get("/api/logout")
			.then((res) => {})
			.catch((e) => {
				localStorage.clear();
				window.location.reload();
			});
	};

	const status = userId ? (
		<table class="table table-borderless p-0 m-0">
			<tbody class="p-0 m-0">
				<tr class="p-0 m-0">
					<td> @{userId}</td>
					<td class="fooriend align-middle p-0 m-0 pl-1 pt-1 text-white">
						<button
							className="btn btn-secondary btn-sm text-light"
							onClick={signout}
						>
							signout
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	) : (
		<Link className="btn btn-secondary btn-sm text-light" to="/signin">
			signin
		</Link>
	);

	return (
		<div className="header">
			<Navbar collapseOnSelect bg="light" expand="lg">
				<Container>
					<Link to="/top">
						<Navbar.Brand className="navbar-brand mb-0 h1">
							<img
								className="header__logo"
								src={logo}
								alt="logo"
							/>
						</Navbar.Brand>
					</Link>
					<Navbar.Toggle aria-controls="navbarScroll" />

					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="my-2 my-lg-0 me-auto"
							style={{ maxHeight: "100px" }}
							navbarScroll
						>
							<Nav.Link
								onClick={() => {
									const path = userId
										? `/user/${userId}`
										: "/signin";
									history.push(path);
								}}
							>
								my page
							</Nav.Link>

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
						</Nav>
						<Nav>{status}</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
		//
		// 	<Navbar>
		// 		{/* <Navbar > */}

		// 		<Navbar.Toggle aria-controls="navbarScroll" />

		// 	</Navbar>
		// </div>
	);
}

export default Header;
