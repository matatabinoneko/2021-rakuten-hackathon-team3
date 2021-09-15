import {Table, Grild, Row, Col} from "react-bootstrap"
import FriendItem from "./FriendItem"


function TableShow() {
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
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <FriendItem friends={friends}/>
          </Col>
        ))}
      </Row>
    )
}


export default TableShow