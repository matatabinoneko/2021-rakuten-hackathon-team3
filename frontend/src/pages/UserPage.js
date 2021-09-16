import "css/UserPage.css";
import { Image, Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getWishList } from "data/api/mock";

import defaultUserIcon from "assets/person.png";
import Profile from "components/Profile";
import UserPageWishList from "components/UserPageWishList";
import { useHistory } from "react-router-dom";

const IconImage = true ? defaultUserIcon : "url_link";

function UserPage(props) {
	const [wishItems, setWishItems] = useState([]);
	const history = useHistory();

	useEffect(() => {
		getWishList("hoge")
			.then((res) => {
				setWishItems(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	}, []);

	const profileData = {
		firstname: "first hoge",
		lastname: "last hoge",
		birthday: "1998-09-21",
		zipcode: "9812234",
		address: "ほげ県ふが市ほげほげ町",
	};

	return (
		<div className="container">
			<div className="row justify-content-center mx-1 mt-3">
				<div className="py-1 col col-md-8">
					<table class="table table-borderless p-0 m-0">
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
										<div className="float-start">
											<big>user name</big>
											<p>@user id</p>
										</div>
										<button
											className="btn btn-outline-secondary float-end btn-sm"
											onClick={() => {
												history.push("/registration");
											}}
										>
											modify
										</button>
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
							<Profile data={profileData} />
						</Tab>
						<Tab eventKey="wishlist" title="Wish List">
							<UserPageWishList items={wishItems} />
						</Tab>
					</Tabs>
				</div>
			</div>
		</div>
	);
}

export default UserPage;
