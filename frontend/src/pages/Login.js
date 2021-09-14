import React from "react"
import { Button, Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

function Login() {
	return (
		<div class="pt-5 .pt-sm-0 .pt-md-0 .pt-lg-0 .pt-xl-0">
			<div class="container">
				<div className="row justify-content-center">
							<h1 className="row justify-content-center">Welcome! Please log in :)</h1>
							<Form className="row justify-content-center">
							  <Form.Group class="w-50 p-3" controlId="formBasicUserID">
							    <Form.Control type="UserID" placeholder="User ID" />
							  </Form.Group>
								<div className="row justify-content-center">
								  <Form.Group class="w-50 p-2" controlId="formBasicPassword">
								    <Form.Control type="password" placeholder="Password" />

									<Form.Text className="row justify-content-center">
									      Don't you have accout?
									 </Form.Text>

									 <Form.Text className="row justify-content-center">
					 				      Sign up
					 				 </Form.Text>
									 </Form.Group>
								 </div>
								 <div  class="w-25 p-2">
								 	<div className="row justify-content-center">
										<Button variant="primary" type="signin">
									    Sign in
									 	</Button>
										</div>
									</div>
							</Form>
				</div>
		</div>
	</div>
	);
}

export default Login;
