import { Card } from "react-bootstrap";
import { IconContext } from "react-icons"; //IconContextをインポート
import { BsXCircle, BsXCircleFill } from "react-icons/bs";
import "css/Item.css";

import useHover from "react-use-hover";

function Item(props) {
	const [isHover, hoverProps] = useHover();

	const deleteIcon = isHover ? (
		<BsXCircleFill />
	) : (
		<BsXCircle style={{ opacity: 0.5 }} />
	);

	return (
		<Card
			className="parent"
			border="light"
			style={{ width: "10rem", height: "20rem" }}
		>
			{props.showingDeleteButton && (
				<div
					className="delete-button"
					{...hoverProps}
					onClick={() => {
						console.log("delete");
					}}
				>
					<IconContext.Provider
						value={{ color: "red", size: "25px" }}
					>
						{deleteIcon}
					</IconContext.Provider>
				</div>
			)}
			<a
				className="noline"
				href={props.item.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Card.Img
					className="image"
					variant="top"
					src={props.item.urlimage}
				/>
				<Card.Body>
					{/* <Card.Text className="mb-1　text-limit"> */}
					<p className="text-limit">{props.item.name}</p>
					{/* </Card.Text> */}
					<Card.Text>¥{props.item.price}</Card.Text>
				</Card.Body>
			</a>
		</Card>
	);
}

Item.defaultProps = {
	showingDeleteButton: false,
};

export default Item;
