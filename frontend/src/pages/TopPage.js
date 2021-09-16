import Header from "components/Header";
import FriendsList from "components/FriendsList";
import WishList from "components/WishList";
import TagsList from "components/TagsList";
import AddMyWishItemList from "components/AddMyWishItemList";
import { useEffect, useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import OkurimonoNavi from "components/OkurimonoNavi";
import axios from "axios";
import "css/TopPage.css";

// import Auth from "./Auth";

function TopPage() {
	const [wishItems, setWishItems] = useState([]);
	const [tagItems, setTagItems] = useState({});
	const [search, setSearch] = useState("mens");
	const [friends, setFriends] = useState([]);
	const [myTags, setMyTags] = useState([]);

	const getItemsFromTag = async (tags) => {
		const items = {};
		for (const tag of tags) {
			const params = { tag: tag["id"] };
			try {
				const res = await axios.get("/api/products/", { params });
				items[tag["id"]] = res.data;
			} catch (e) {
				console.error(e);
			}
		}
		setTagItems(items);
	};

	useEffect(() => {
		const userId = "tanaka1";
		axios
			.get(`/api/users/${userId}`)
			.then((res) => {
				const data = res.data;
				const wi = data["wishlists"].map((x) => x["products"]).flat();
				setWishItems(wi);
				setMyTags(data["tags"]);
				getItemsFromTag(data["tags"]);
				setFriends(data["friends"]);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	const Tags = [];
	for (const tag of myTags) {
		if (
			tagItems.hasOwnProperty(tag["id"]) &&
			tagItems[tag["id"]].length !== 0
		) {
			Tags.push(
				<div className="mt-2">
					<TagsList
						items={tagItems[tag["id"]]}
						tagName={tag["name"]}
					/>
				</div>
			);
		}
	}

	return (
		<div>
			{/* <Auth/> */}
			<Header setSearch={setSearch} />
			<ToastProvider>
				<AddMyWishItemList search={search} />
			</ToastProvider>
			<div className="body">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-3">
							<FriendsList friends={friends} />
              <OkurimonoNavi />
						</div>
						<div className="col-md-9">
							<div className="mt-5">
								<WishList items={wishItems} />
							</div>
							<div className="mt-5">
								<h4>Tag list</h4>
								{Tags}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopPage;
