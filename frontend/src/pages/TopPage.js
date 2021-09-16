import Header from "components/Header";
import FriendsList from "components/FriendsList";
import FriendProf from "components/FriendProf";
import WishList from "components/WishList";
import TagsList from "components/TagsList";
import AddMyWishItemList from "components/AddMyWishItemList";
import { useEffect, useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import OkurimonoNavi from "components/OkurimonoNavi";
import { useGlobalState } from "App";
import { Link } from "react-router-dom";

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
	const [friendData, setFriendData] = useState({
		loginid: "",
		username: "",
		firstname: "",
		lastname: "",
		iconimage: null,
		birthday: "",
		zipcode: "",
		address: "",
		is_recommend: false,
		tags: [],
	});

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

	const refreshFriendInfo = () => {
		axios
			.get(`/api/users/${friendUserId}`)
			.then((res) => {
				const data = res.data;
				const wi = data["wishlists"].map((x) => x["products"]).flat();
				setWishItems(wi);
				setFriendData(data);
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

	return (
		<div>
			<Header setSearch={setSearch} />
			<div className="mb-3">
				<ToastProvider>
					<AddMyWishItemList search={search} />
				</ToastProvider>
			</div>

			<div className="body">
				<div className="container">
					<div className="row justify-content-center pt-5">
						{userId && (
							<>
								<div className="col-md-3">
									<FriendsList
										friends={friends}
										setFriendUserId={setFriendUserId}
									/>
									<OkurimonoNavi />
								</div>
								<div className="col-md-9">
									<h4>Profile</h4>
									<FriendProf data={friendData} />
									<div className="mt-5">
										<h4>WishList</h4>
										<WishList items={wishItems} />
									</div>
									<div className="mt-5">
										<h4>Tag list</h4>
										{Tags}
									</div>
								</div>
							</>
						)}
						{!userId && (
							<div className="col mt-5">
								<p className="text-center">
									You have not logged in yet.
								</p>
								<p className="text-center">
									<Link to="/signin">
										please login from here
									</Link>
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopPage;
