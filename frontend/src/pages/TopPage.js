import Header from "components/Header";
import FriendsList from "components/FriendsList";
import WishList from "components/WishList";
import TagsList from "components/TagsList";
import AddMyWishItemList from "components/AddMyWishItemList";
import { useEffect, useState } from "react";
import { getWishList } from "data/api/mock";
import { ToastProvider } from "react-toast-notifications";
import axios from "axios";
// import Auth from "./Auth";

function TopPage() {
	const [wishItems, setWishItems] = useState([]);
	const [tagItems, setTagItems] = useState([]);
	const [search, setSearch] = useState("mens");
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		const userId = "tanaka1";
		axios.get(`/api/users/${userId}`).then((res) => {
			const data = res.data;
			setWishItems(data["wishlists"]);
			setTagItems(data["tags"]);
			setFriends(data["friends"]);
			console.log(wishItems);
		});
	}, []);

	return (
		<div>
			{/* <Auth/> */}
			<Header setSearch={setSearch} />
			<ToastProvider>
				<AddMyWishItemList search={search} />
			</ToastProvider>
			<div className="container">
				{/* <div className="row justify-content-center">
					<div className="col">
						<AddMyWishItemList />
					</div>
				</div> */}
				<div className="row justify-content-center">
					<div className="col-md-3">
						<FriendsList friends={friends} />
					</div>
					<div className="col-md-9">
						<WishList items={wishItems} />
						<TagsList items={tagItems} tagName="tagName" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopPage;
