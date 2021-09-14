import Item from "components/Item";
import "css/WishList.css";

function Tagslist(props) {
	const wishList = [];

	for (let item of props.items) {
		wishList.push(
			<div className="item mx-1">
				<Item item={item} />
			</div>
		);
	}
	return (
		<div>
			<h4>{props.tagName}</h4>
			<div className="testimonial-group">
				<div className="d-flex flex-row">{wishList}</div>
			</div>
		</div>
	);
}

export default Tagslist;
