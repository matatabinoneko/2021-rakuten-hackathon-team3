import Header from "components/Header";
import FriendsList from "components/FriendsList";
import WishList from "components/WishList";
import TagsList from "components/TagsList";
import AddMyWishItemList from "components/AddMyWishItemList";
import { useEffect, useState } from "react";
import { getWishList } from "data/api/mock";
import { ToastProvider } from "react-toast-notifications";
// import Auth from "./Auth";

function TopPage() {
	const [wishItems, setWishItems] = useState([]);
	const [tagItems, setTagItems] = useState([]);
	const [search, setSearch] = useState("mens");

	useEffect(() => {
		getWishList("hoge")
			.then((res) => {
				setWishItems(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	useEffect(() => {
		getWishList("hoge")
			.then((res) => {
				setTagItems(res.data);
			})
			.catch((e) => {
				console.error(e);
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
						<FriendsList />
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
