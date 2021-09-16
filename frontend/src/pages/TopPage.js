import Header from "components/Header";
import FriendsList from "components/FriendsList";
import WishList from "components/WishList";
import TagsList from "components/TagsList";
import AddMyWishItemList from "components/AddMyWishItemList";
import { useEffect, useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import OkurimonoNavi from "components/OkurimonoNavi";
import { useGlobalState } from "App";

import axios from "axios";
import "css/TopPage.css";

// import Auth from "./Auth";

function TopPage() {

	const [wishItems, setWishItems] = useState([]);
	const [tagItems, setTagItems] = useState({});
	const [search, setSearch] = useState("mens");
	const [friends, setFriends] = useState([]);
	const [friendTags, setFriendTags] = useState([]);
	const [userId] = useGlobalState("userId");
	const [friendUserId, setFriendUserId] = useState("");

	const getItemsFromTag = async (tags) => {
		const items = {};
		for (const tag of tags) {
			const params = { tag: tag["id"] };
			try {
				const res = await axios.get("/api/products/", { params });
				// console.log(res.data);
				items[tag["id"]] = res.data;
			} catch (e) {
				console.error(e);
			}
		}
		setTagItems(items);
	};


	// const getUser = async (uid) => {
	// 	try {
	// 		const res = await axios.get(`/api/users/${uid}`);
	// 		return res.data;
	// 	} catch (e) {
	// 		console.error(e);
	// 	}
	// };

	// const refreshPage = async () => {
	// const userData = await getUser(userId);
	// const friendData = await getUser(friendUserId);
	// console.log(friendData);
	// const wi = friendData["wishlists"].map((x) => x["products"]).flat();
	// setWishItems(wi);
	// setFriendTags(friendData["tags"]);
	// getItemsFromTag(friendData["tags"]);
	// setFriends(userData["friends"]);
	// };

	const refreshFriendInfo = () => {

		axios
			.get(`/api/users/${friendUserId}`)
			.then((res) => {
				const data = res.data;
				const wi = data["wishlists"].map((x) => x["products"]).flat();
				setWishItems(wi);

				setFriendTags(data["tags"]);
				getItemsFromTag(data["tags"]);
			})
			.catch((e) => {
				console.error(e);
			});
	};

	const refreshFriendsList = () => {
		axios
			.get(`/api/users/${userId}`)
			.then((res) => {
				const data = res.data;
				setFriends(data["friends"]);

				if (0 < data["friends"].length) {
					setFriendUserId(data["friends"][0]["loginid"]);
				}

			})
			.catch((e) => {
				console.error(e);
			});
	};

	useEffect(() => {
		refreshFriendInfo();
	}, [friendUserId]);

	useEffect(() => {
		// console.log("friendTags", friendTags);
		// console.log("tagItems", tagItems);
		Tags = [];
		for (const tag of friendTags) {
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
	}, [tagItems]);

	useEffect(() => {
		refreshFriendsList();
		refreshFriendInfo();
	}, []);

	let Tags = [];
	// for (const tag of friendTags) {
	// 	if (
	// 		tagItems.hasOwnProperty(tag["id"]) &&
	// 		tagItems[tag["id"]].length !== 0
	// 	) {
	// 		Tags.push(
	// 			<div className="mt-2">
	// 				<TagsList
	// 					items={tagItems[tag["id"]]}
	// 					tagName={tag["name"]}
	// 				/>
	// 			</div>
	// 		);
	// 	}
	// }

	return (
		<div>
			{/* <Auth/> */}
			<Header setSearch={setSearch} />
			<ToastProvider>
				<AddMyWishItemList search={search} />
			</ToastProvider>
			<div className="body">
				<div className="container">
					<div className="row justify-content-center pt-3">
						<div className="col-md-3">
							<FriendsList
								friends={friends}
								setFriendUserId={setFriendUserId}
							/>
							<OkurimonoNavi />
						</div>
						<div className="col-md-9">
							<div className="mt-5">
								<h4>{friendUserId}'s WishList</h4>
								<WishList items={wishItems} />
							</div>
							<div className="mt-5">
								<h4>{friendUserId}'s Tag list</h4>
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
