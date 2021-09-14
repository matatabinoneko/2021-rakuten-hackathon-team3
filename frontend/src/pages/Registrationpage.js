import React from "react"
import { Button, Form, FormGroup, FormControl, ControlLabel ,Row, Col} from "react-bootstrap";
import Registration_birthday from "pages/Registration_birthday"
import Registration_tags from "pages/Registration_tags"

function Registration() {
	return (
    <div class="pt-5 .pt-sm-0 .pt-md-0 .pt-lg-0 .pt-xl-0">
			<div class="container">
				<div className="row justify-content-center">
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
                    <Form.Group class="w-40 p-3" controlId="formBasicUserName">
                      <Form.Control type="FirstName" placeholder="First Name" />
                    </Form.Group>
                  </div>

                  <div className="row justify-content-center">
                    <Form.Group class="w-40 p-3" controlId="formBasicUserID">
                      <Form.Control type="LastName" placeholder="Last Name" />
                    </Form.Group>
                  </div>



                  <div class="background left">
                    <Form.Group class="w-25 p-3" controlId="formBasicUserID">
                      <Form.Control type="PostCode" placeholder="Post Code" />
                    </Form.Group>
                  </div>

                  <div className="row justify-content-center">
                    <Form.Group class="p-3" controlId="formBasicUserID">
                      <Form.Control type="Address" placeholder="Address" />
                    </Form.Group>
                  </div>

                    <Form.Group controlId="Iconimage" className="mb-3 p-3">
                      <Form.Label as="legend">Upload an image file for your icon</Form.Label>
                      <Form.Control type="file" size="sm" />
                    </Form.Group>


                  <Form.Group className="mb-3">
                       <Form.Label as="legend">
                         Would you like to offer the other gifts except wishlist?
                       </Form.Label>
                         <Form.Check
                           type="radio"
                           label="Yes"
                           name="OfferOtherGists"
                           id="OfferOtherGists1"
                         />
                         <Form.Check
                           type="radio"
                           label="No"
                           name="OfferOtherGists"
                           id="OfferOtherGists2"
                         />
                     </Form.Group>

                     <Registration_tags />



              </Form>

              <div  class="w-25 p-5">
                <div className="row justify-content-center">
                  <Button variant="primary" type="submit">
                    Sibmit
                  </Button>
                </div>
              </div>

        </div>
      </div>
    </div>
  );
}

export default Registration;
