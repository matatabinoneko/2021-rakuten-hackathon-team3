import React, { Component, useState, useEffect } from "react";
import {
	Navbar,
	Container,
	Row,
	Col,
	Form,
	Button,
	Spinner,
	Alert,
} from "react-bootstrap";
// import { newUserRegistration } from "./userRegAction";
// import { useDispatch, useSelector } from "react-redux";
import Registration_birthday from "pages/Registration_birthday";
import Registration_tags from "pages/Registration_tags";
import { Link, useHistory } from "react-router-dom";
import { useGlobalState } from "App";

import "css/Login.css";
import axios from "axios";

const initialState = {
	username: "",
	loginid: "",
	password: "",
	confirmPass: "",
	firstname: "",
	lastname: "",
	zipcode: "",
	address: "",
	iconimage: null,
	is_recommend: false,
};

const usernameVerificationError = {
	isLength: false,
};

const passVerificationError = {
	isLenthy: false,
	hasUpper: false,
	hasLower: false,
	hasNumber: false,
	// hasSpclChr: false,
	confirmPass: false,
};

// const zipcodeVerificationError = {
//   hashyphen: false,
// };

const Registration = () => {
	// const dispatch = useDispatch();
	const [newUser, setNewUser] = useState(initialState);
	const [passwordError, setPasswordError] = useState(passVerificationError);
	const [usernameError, setUsernameError] = useState(
		usernameVerificationError
	);
	const [globalUserId, setGlobalUserId] = useGlobalState("userId");

	// const [zipcodeError, setZipcodeError] = useState(zipcodeVerificationError);
	const [input_birthday, setBirthday] = useState([]);
	const [offergift, setOffergift] = useState("");
	const [taglist, setTaglist] = useState([]);

	const history = useHistory();

	// const { isLoading, status, message } = useSelector(
	//   (state) => state.registration
	// );

	useEffect(() => {}, [newUser]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setNewUser({ ...newUser, [name]: value });

		if (name === "username") {
			const isLength = value.length > 0 && value.length < 9;
			// const hasSpclChr = /[@,#,$,%,&]/.test(value);

			setUsernameError({
				...usernameError,
				isLength,
			});
		}

		if (name === "password") {
			const isLenthy = value.length > 7;
			const hasUpper = /[A-Z]/.test(value);
			const hasLower = /[a-z]/.test(value);
			const hasNumber = /[0-9]/.test(value);
			// const hasSpclChr = /[@,#,$,%,&]/.test(value);

			setPasswordError({
				...passwordError,
				isLenthy,
				hasUpper,
				hasLower,
				hasNumber,
				// hasSpclChr,
			});
		}

		if (name === "confirmPass") {
			setPasswordError({
				...passwordError,
				confirmPass: newUser.password === value,
			});
		}
	};

	// if (name === "zipcode") {
	//   const hashyphen = /[-]/.test(value);
	//   // const hasSpclChr = /[@,#,$,%,&]/.test(value);

	//   setZipcodeError({
	//     ...zipcodeError,
	//     hashyphen,
	//   });
	// }

	const isRecommend = (e) => {
		setOffergift(e.target.value);
	};

	const login = () => {
		const authorizationBasic = window.btoa(
			newUser.loginid + ":" + newUser.password
		);
		const headers = { Authorization: "Basic " + authorizationBasic };
		const data = {};
		axios
			.get(`/api/users/${newUser.loginid}`, { headers }, { data })
			.then((res) => {
				setGlobalUserId(newUser.loginid);
				localStorage.setItem("userId", newUser.loginid);
				history.replace("/top");
			})
			.catch(() => {
				console.error("login failed");
			});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		let input_is_recommend = document.getElementById("is_recommend");

		const {
			username,
			loginid,
			password,
			firstname,
			lastname,
			zipcode,
			address,
			iconimage,
		} = newUser;

		let tagIds = taglist.map((str) => parseInt(str, 10));

		const params = {
			loginid: loginid,
			password: password,
			username: username,
			firstname: firstname,
			lastname: lastname,
			iconimage: null,
			birthday: input_birthday,
			zipcode: zipcode,
			address: address,
			is_recommend: input_is_recommend.checked,
			tag_id: tagIds,
		};

		axios.post("/api/users/create/", params).then(() => {
			login();
		});
	};

	return (
		<div className=" full">
			<div className="pt-10 .pt-sm-0 .pt-md-0 .pt-lg-0 .pt-xl-0">
				<div className="container">
					<Navbar>
						<Navbar.Brand className="navbar-brand mt-4 h1" href="/">
							RakutenBirthday
						</Navbar.Brand>
					</Navbar>
					<hr className="mt-0 mb-5"></hr>
					<div className="mb-5 title">
						<h1 className="row justify-content-center">
							Registration Page
						</h1>
						{/* // <Container>
    //   <Row>
    //     <Col>
    //       <h1 className="text-info">RakutenBirthday</h1>
    //     </Col>
    //   </Row> */}
						{/* <hr />
      <Row>
        <Col>
          {message && (
            <Alert variant={status === "success" ? "success" : "danger"}>
              {message}
            </Alert>
          )}
        </Col>
      </Row> */}

						<Row>
							<Col>
								<Form
									onSubmit={handleOnSubmit}
									className="row justify-content-center"
								>
									<Form.Group className="w-50 p-3">
										<Form.Control
											type="UserName"
											name="username"
											value={newUser.username}
											onChange={handleOnChange}
											placeholder="User Name"
											required
										/>
										<ul className="mb-4">
											<li
												className={
													usernameError.isLength
														? "text-success"
														: "text-danger"
												}
											>
												Max 8 characters
											</li>
										</ul>
									</Form.Group>

									<div className="row justify-content-center">
										<Form.Group className="w-50 p-2 mb-3">
											<Form.Control
												type="UserID"
												id="loginid"
												name="loginid"
												value={newUser.loginid}
												onChange={handleOnChange}
												placeholder="User ID"
												required
											/>
										</Form.Group>
									</div>
									<div className="row justify-content-center">
										<Form.Group className="w-50 p-2">
											<Form.Label>Password</Form.Label>
											<Form.Control
												type="Password"
												name="password"
												value={newUser.password}
												onChange={handleOnChange}
												placeholder="Password"
												required
											/>
											{/* </Form.Group> */}
											{/* </div> */}
											{/* <div className="row justify-content-center"> */}

											{/* <Form.Group class="w-50 p-2"> */}
											<Form.Label>
												Confirm Password
											</Form.Label>
											<Form.Control
												type="ConfirmPass"
												name="confirmPass"
												value={newUser.confirmPass}
												onChange={handleOnChange}
												placeholder="Comfirm your password"
												required
											/>

											<Form.Text>
												{!passwordError.confirmPass && (
													<div className="text-danger mb-3">
														Password doesn't match!
													</div>
												)}
											</Form.Text>

											<ul className="mb-4 w-50 p-2">
												<li
													className={
														passwordError.isLenthy
															? "text-success"
															: "text-danger"
													}
												>
													Min 8 characters
												</li>
												<li
													className={
														passwordError.hasUpper
															? "text-success"
															: "text-danger"
													}
												>
													At least one upper case
												</li>
												<li
													className={
														passwordError.hasLower
															? "text-success"
															: "text-danger"
													}
												>
													At least one lower case
												</li>
												<li
													className={
														passwordError.hasNumber
															? "text-success"
															: "text-danger"
													}
												>
													At least one number
												</li>
												{/* <li
                className={
                  passwordError.hasSpclChr ? "text-success" : "text-danger"
                }
              >
                At least on of the special characters i.e @ # $ % &{" "}
              </li> */}
											</ul>
										</Form.Group>
									</div>

									<h5 className="p-3">Birthday</h5>
									<Registration_birthday
										setBirthday={setBirthday}
									/>

									<div className="row justify-content-center">
										<Form.Group className="w-50 p-3">
											<Form.Control
												type="FirstName"
												name="firstname"
												value={newUser.firstname}
												onChange={handleOnChange}
												placeholder="First Name"
												required
											/>
										</Form.Group>
									</div>

									<div className="row justify-content-center">
										<Form.Group className="w-50 p-3">
											<Form.Control
												type="LastName"
												name="lastname"
												value={newUser.lastname}
												onChange={handleOnChange}
												placeholder="Last Name"
												required
											/>
										</Form.Group>
									</div>
									<div className="background left">
										<Form.Group className="w-25 p-3">
											<Form.Control
												type="Zipcode"
												name="zipcode"
												value={newUser.zipcode}
												onChange={handleOnChange}
												placeholder="Zip Code"
												required
											/>
											{/* <ul className="mb-4">
                <li
                  className={
                    zipcodeError.hashyphen ? "text-success" : "text-danger"
                  }
                >
                  Not included hyphen "(-)"
                </li>
              </ul> */}
										</Form.Group>
									</div>

									<div className="row justify-content-center">
										<Form.Group className="p-3">
											<Form.Control
												type="Address"
												name="address"
												value={newUser.address}
												onChange={handleOnChange}
												placeholder="Address"
												required
											/>
										</Form.Group>
									</div>
									<div className="background left">
										<Form.Group className="mb-3 p-3">
											<Form.Label as="legend">
												Upload an image file for your
												icon
											</Form.Label>
											<div className="background left w-25">
												<Form.Control
													type="file"
													id="iconimage"
													name="iconimage"
													value={newUser.iconimage}
													onChange={handleOnChange}
													required
												/>
											</div>
										</Form.Group>
									</div>

									<Form.Group className="mb-3">
										<Form.Label as="legend">
											Would you like to offer the other
											gifts except wishlist?
										</Form.Label>

										<label>
											<input
												type="radio"
												name="offergift"
												value="0"
												id="is_recommend"
												checked={offergift === "0"}
												onChange={isRecommend}
											/>{" "}
											Yes
										</label>

										<label className="p-3">
											<input
												type="radio"
												name="offergift"
												value="1"
												checked={offergift === "1"}
												onChange={isRecommend}
											/>{" "}
											No
										</label>
									</Form.Group>

									{
										offergift === "0" && (
											<Registration_tags
												setTaglist={setTaglist}
											/>
										)
										// <Check />
									}

									<Button
										variant="primary"
										type="submit"
										className="mt-4"
										// href="/top"
										disabled={Object.values(
											passwordError
										).includes(false)}
									>
										Submit
									</Button>
									{/* {isLoading && <Spinner variant="info" animation="border" />} */}
								</Form>
							</Col>
						</Row>
						<Row className="py-4">
							<Col>
								Already have an account{" "}
								<a href="/">Login Now</a>
							</Col>
						</Row>
						{/* </Container> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
