import React, {Component, useState} from "react"
import {  Navbar,Button, Form, FormGroup, FormControl, ControlLabel ,Row, Col} from "react-bootstrap";
import Registration_birthday from "pages/Registration_birthday"
import Registration_tags from "pages/Registration_tags"
import { Link,useHistory } from "react-router-dom";
import "css/Login.css"



function Registration(){

  const [offergift,setOffergift] = useState("")

  const history = useHistory()

  function handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setOffergift(value);
  }


  return (
    <div className=" full">
      <div class="pt-10 .pt-sm-0 .pt-md-0 .pt-lg-0 .pt-xl-0">
        <div class="container">
          <Navbar>
            <Navbar.Brand className="navbar-brand mt-4 h1" href="/">RakutenBirthday</Navbar.Brand>
          </Navbar>
          <hr class="mt-0 mb-5"></hr>
          <div class="mb-5 title">
                <h1 className="row justify-content-center">Registration Page</h1>
                <Form className="row justify-content-center">
                    <Form.Group class="w-50 p-3" controlId="formBasicUserName">
                      <Form.Control type="UserName" placeholder="User Name" />
                      <Form.Text className="row justify-content-right">
                        Maximum length is 8 letters
                      </Form.Text>
                    </Form.Group>

                    <div className="row justify-content-center">
                      <Form.Group class="w-50 p-2 mb-3" controlId="formBasicUserID">
                        <Form.Control type="UserID" placeholder="User ID" />
                      </Form.Group>
                    </div>

                    <div className="row justify-content-center">
                      <Form.Group class="w-50 p-2" controlId="formBasicUserID">
                        <Form.Control type="Password" placeholder="Password" />

                        <Form.Text className="row justify-content-right">
                              Minimum length is 8 letters
                        </Form.Text>
                      </Form.Group>
                    </div>

                    <Form.Group class="w-50 p-2" controlId="formBasicUserID">
                      <Form.Control type="Password2" placeholder="Comfirm your password" />
                    </Form.Group>

                    <h5 class="p-3">Birthday</h5>
                    <Registration_birthday />


                    <div className="row justify-content-center">
                      <Form.Group class="w-50 p-3" controlId="formBasicUserName">
                        <Form.Control type="FirstName" placeholder="First Name" />
                      </Form.Group>

                      <Form.Group class="w-50 p-3" controlId="formBasicUserID">
                        <Form.Control type="LastName" placeholder="Last Name" />
                      </Form.Group>
                    </div>



                    <div class="background left">
                      <Form.Group class="w-25 p-3" controlId="formBasicUserID">
                        <Form.Control type="PostCode" placeholder="Post Code" />
                      </Form.Group>
                    </div>

                    <div className="row justify-content-center">
                      <Form.Group class=" p-3" controlId="formBasicUserID">
                        <Form.Control type="Address" placeholder="Address" />
                      </Form.Group>
                    </div>
                    <div class="background left">
                      <Form.Group controlId="Iconimage" className="mb-3 p-3">
                        <Form.Label as="legend">Upload an image file for your icon</Form.Label>
                        <div class="background left" className=" w-25">
                          <Form.Control type="file" size="sm" />
                        </div>
                      </Form.Group>
                    </div>

                    <Form.Group className="mb-3">
                         <Form.Label as="legend">
                           Would you like to offer the other gifts except wishlist?
                         </Form.Label>
                         <label>
                             <input
                                 type="radio"
                                 name="offergift"
                                 value="0"
                                 checked={offergift === "0"}
                                 onChange={handleChange}
                             /> Yes
                         </label>

                         <label class="p-3" >
                             <input
                                 type="radio"
                                 name="offergift"
                                 value="1"
                                 checked={offergift === "1"}
                                 onChange={handleChange}
                             /> No
                         </label>

                       </Form.Group>

                       {offergift === "0" &&
                        <Registration_tags />
                       }



                </Form>


                <div className="row justify-content-center">
                  <div  class="w-25">
                    <Button onClick={() => {
                        history.push("/top");
                        }} variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
