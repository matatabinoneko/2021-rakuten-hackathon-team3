import React,{useState} from "react"
import SearchFriend from "./SearchFriend"
import "css/Friends.css"
import {Modal, Button} from "react-bootstrap"
import { ToastProvider } from "react-toast-notifications";

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
                  Search your friend
                </Modal.Title>
              </Modal.Header>
              <div className="modal-backgound">
              <Modal.Body>
              <ToastProvider>
                <SearchFriend onHide={props.onHide}/>
              </ToastProvider>
              </Modal.Body>
              </div>
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
        <div className="add-button-container">
        <Button variant="outline-secondary" onClick={() => setModalShow(true)}>
        Add your friend
        </Button>
        </div>

        <ModalShow show={modalShow}
        onHide={() => setModalShow(false)} />
      </>
    );
  }


  export default VerticalModal