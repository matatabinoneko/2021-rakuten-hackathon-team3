import React,{useState,useEffect} from "react"
import SearchFriend from "./SearchFriend"
import FriendItems from "./FriendItems"
import Friends from "css/Friends.css"
import TableShow from "./TableShow"
import {Modal, Button, Table} from "react-bootstrap"

function ModalShow(props) {

    const [search, setSearch] = useState("");

    const friends = [
		{id:1,userName: "Smith", birthDay:"9/15", iconImage:"icon"}, 
		{id:2,userName: "Arnold", birthDay:"9/23", iconImage:"icon"},
		{id:3,userName: "Ethan", birthDay:"9/30", iconImage:"icon"},
		{id:4,userName: "Alicia", birthDay:"10/5", iconImage:"icon"},
		{id:5,userName: "Max", birthDay:"10/24", iconImage:"icon"},
		{id:5,userName: "Tommy", birthDay:"11/5", iconImage:"icon"},
		{id:5,userName: "Lee", birthDay:"1/20", iconImage:"icon"},
		{id:5,userName: "Black", birthDay:"4/5", iconImage:"icon"},
    ]

        return (
            <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Let's Search your friend!
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <SearchFriend search={search}/>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
          );
}

function VerticalModal(props) {

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