//userpage
import Header from "components/Header";
import { ToastProvider } from "react-toast-notifications";
import AddMyWishItemList from "components/AddMyWishItemList";

import { Image, Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";

import defaultUserIcon from "assets/person.png";
import Profile from "components/Profile";
import UserPageWishList from "components/UserPageWishList";
import { useHistory } from "react-router-dom";
import "css/UserPage.css";
import { useGlobalState } from "App";
import axios from "axios";

const IconImage = true ? defaultUserIcon : "url_link";

function UserPage(props) {
	const [wishItems, setWishItems] = useState([]);
	const history = useHistory();
	const [search, setSearch] = useState("mens");

	const [userData, setUserData] = useState({
		firstname: "",
		lastname: "",
		birthday: "",
		zipcode: "",
		loginid: "",
		username: "",
		address: "",
		tags: [],
	});
	const [globalUserId, setglobalUserId] = useGlobalState("userId");

	const userId = props.match.params.userId;

	useEffect(() => {
		axios.get(`/api/users/${userId}`).then((res) => {
			setUserData(res.data);
			const wi = res.data["wishlists"].map((x) => x["products"]).flat();
			setWishItems(wi);
		});
	}, []);

	return (
		<>
			<Header setSearch={setSearch} />
			{/* <ToastProvider>
				<AddMyWishItemList search={search} />
			</ToastProvider> */}
			<div className="container">
				<div className="row justify-content-center mx-1 mt-3">
					<div className="py-1 col col-md-8">
						<table className="table-background table table-borderless p-0 m-0">
							<tbody class="p-0 m-0">
								<tr class="p-0 m-0">
									<td class="p-0 m-0">
										<Image
											src={IconImage}
											roundedCircle
											className="icon-width"
										/>
									</td>
									<td class="align-middle p-0 m-0 pl-1 pt-1 name-width">
										<div className="name-width">
											<div className="name-place">
												<div className="float-start">
													<big>
														{userData["username"]}
													</big>
													<p>
														@{userData["loginid"]}
													</p>
												</div>
											</div>
											<div className="style">
												{props.match.params.userId ===
													globalUserId && (
													<button
														className="btn btn-outline-secondary float-end btn-sm"
														onClick={() => {
															history.push(
																"/registration"
															);
														}}
													>
														modify
													</button>
												)}
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<Tabs
							defaultActiveKey="profile"
							id="uncontrolled-tab-example"
							className="mb-3"
						>
							<Tab eventKey="profile" title="Profile">
								<Profile data={userData} />
							</Tab>
							<Tab eventKey="wishlist" title="Wish List">
								<UserPageWishList items={wishItems} />
							</Tab>
						</Tabs>
					</div>
				</div>
			</div>
		</>
	);
}

export default UserPage;
