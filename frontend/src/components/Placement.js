import React from "react"
import {Offcanvas, Button} from "react-bootstrap"
import { useState } from "react";
import SearchFriend from "./SearchFriend";

function Placement() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-primary" onClick={handleShow} className="me-2">
          Add your Friend!
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Rakuten</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <SearchFriend/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  export default Placement