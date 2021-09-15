import {Form, Button} from "react-bootstrap"

function SearchFriend() {

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="search" placeholder="Enter user name" />
        </Form.Group>
            <Button variant="outline-primary" type="submit">
                Search
            </Button>
        </Form>
    )

}

export default SearchFriend