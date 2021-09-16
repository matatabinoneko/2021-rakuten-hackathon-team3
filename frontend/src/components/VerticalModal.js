import React,{useState} from "react"
import SearchFriend from "./SearchFriend"
import "css/Friends.css"
import {Modal, Button} from "react-bootstrap"

function ModalShow(props) {

        return (
            <Modal
              {...props}
              size="sm"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Let's Search your friend!
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <SearchFriend />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
}

function VerticalModal() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
        Add your friend
        </Button>

        <ModalShow show={modalShow}
        onHide={() => setModalShow(false)} />
      </>
    );
  }


  export default VerticalModal