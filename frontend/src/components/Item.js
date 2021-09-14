import { Card } from "react-bootstrap";
import "css/Item.css";

function Item(props) {
	return (
		<a className="noline" href={props.item.url}>
			<Card border="light" style={{ width: "10rem" }}>
				<Card.Img
					className="image"
					variant="top"
					src={props.item.imageurl}
				/>
				<Card.Body>
					<Card.Text className="mb-1">
						{props.item.itemname}
					</Card.Text>
					<Card.Text>¥{props.item.price}</Card.Text>
				</Card.Body>
			</Card>
		</a>
	);
}

export default Item;
