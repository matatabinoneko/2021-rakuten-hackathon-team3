import React from "react";
import {
	Navbar,
	Button,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "css/Login.css";
import { useGlobalState } from "App";
import { useState } from "react";
import axios from "axios";

function Login() {
	const [globalUserId, setGlobalUserId] = useGlobalState("userId");
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	const signin = () => {
		setGlobalUserId(userId);

		axios
			.get(`/api/users/${userId}`)
			.then((res) => {
				setGlobalUserId(userId);
				history.replace("/top");
			})
			.catch(() => {
				console.error("login failed");
			});
	};

	return (
		<div className="full">
			<div class="pt-10 .pt-sm-0 .pt-md-0 .pt-lg-0 .pt-xl-0">
				<div class="container">
					<Navbar>
						<Navbar.Brand className="navbar-brand mt-4 h1" href="/">
							RakutenBirthday
						</Navbar.Brand>
					</Navbar>
					<hr class="mt-0 mb-5"></hr>

					<div className="row justify-content-center">
						<div class="mb-5 title">
							<h1 className="row justify-content-center">
								Please log in RakutenBirthday :)
							</h1>
						</div>
						<Form className="row justify-content-center">
							<Form.Group
								class="w-50 p-3"
								controlId="formBasicUserID"
							>
								<Form.Control
									type="UserID"
									placeholder="User ID"
									value={userId}
									onChange={(event) => {
										setUserId(event.target.value);
									}}
								/>
							</Form.Group>
							<div className="row justify-content-center">
								<Form.Group
									class="w-50 p-2"
									controlId="formBasicPassword"
								>
									<Form.Control
										type="password"
										placeholder="Password"
										value={password}
										onChange={(event) => {
											setPassword(event.target.value);
										}}
									/>
									<div class="p-3">
										<Form.Text className="row justify-content-center">
											Don't you have accout?
										</Form.Text>
									</div>

									<Link to="/registration">
										<p className="row justify-content-center">
											Sign up
										</p>
									</Link>
								</Form.Group>
							</div>
							<div class="w-25">
								<div className="row justify-content-center">
									<Button
										variant="primary"
										type="button"
										onClick={signin}
									>
										Sign in
									</Button>
								</div>
							</div>
						</Form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
