import Item from "components/Item";

function UserPageWishList(props) {
	const wishList = [];

	for (let item of props.items) {
		wishList.push(
			<div className="col col-md-3">
				<Item item={item} />
			</div>
		);
	}
	return <div class="row">{wishList}</div>;
}
export default UserPageWishList;
