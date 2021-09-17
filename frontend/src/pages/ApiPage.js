import axios from "axios";
import { useGlobalState } from "App";
import React, { useState, useEffect } from 'react'

function ApiPage() {
	const [userId, setUserId] = useGlobalState("userId");
	const [wishlistId, setWishlistId] = useState("")

	const getUsersList = () => {
		axios.get("/api/users/").then((res) => {
			const data = res.data;
			console.log(data);
		});
	};

	

	// const getUser = () => {
	// 	axios.get("/api/users/tanaka1").then((res) => {
	// 		console.log(res.data);
	// 	});
	// };
	

	// const getUser = () => {
	// 	axios.get(`/api/users/${userId}`).then((res) => {
	// 		console.log(res.data.wishlists[0].id);
	// 		// setWishlistId(res.data.wishlists[0].id)
	// 	});
	// };

	const getUser = () => {
		axios.get(`/api/users/${userId}`).then((res) => {
			console.log(res.data);
			if (res.data.wishlists = []){
				console.log("none")
			}else{
				console.log("yes")
			}
			// setWishlistId(res.data.wishlists[0].id)
		});
	};

	const createUser = () => {
		const params = {
			loginid: "rakuten1",
			password: "rakutenrakuten",
			username: "t-naka",
			firstname: "rakuten",
			lastname: "keisuke",
			iconimage: null,
			birthday: "1997-08-02",
			zipcode: "111-2345",
			address: "東京都xx区〇〇",
			is_recommend: false,
			tag_id: [],
		};
		axios.post("/api/users/create/", params).then((res) => {
			console.log(res);
		});
	};

	const createUserFriend = () => {
		const params = { friendid: ["tanaka1", "watanabe1"] };
		axios.post("/api/users/tanaka1/friend/", params).then((res) => {
			console.log(res);
		});
	};

	const deleteUserFriend = () => {
		const data = { friendid: ["tanaka1", "watanabe1"] };
		axios.delete("/api/users/tanaka1/friend/", { data }).then((res) => {
			console.log(res);
		});
	};

	const getTag = () => {
		axios.get("/api/preferencetags/").then((res) => {
			console.log(res);
		});
	};

	const createTag = () => {
		const params = { tagid: [1, 2] };
		axios.post("/api/users/tanaka1/tag/", params).then((res) => {
			console.log(res);
		});
	};

	const deleteTag = () => {
		const data = { tagid: [1, 2] };
		axios.delete("/api/users/tanaka1/tag/", { data }).then((res) => {
			console.log(res);
		});
	};

	const getWishList = () => {
		axios.get(`/api/wishlists/`).then((res) => {
			console.log(res);
		});
	};

	// const getWishList = () => {
	// 	axios.get("/api/wishlists/30").then((res) => {
	// 		console.log(res);
	// 	});
	// };

	// const getSelectedWishList = () => {
	// 	axios.delete("/api/wishlists/1").then((res) => {
	// 		console.log(res);
	// 	});
	// };

	const getSelectedWishList = () => {
		// axios.get(`/api/wishlists/${wishlistId}/`).then((res) => {
		axios.get("/api/wishlists/28/").then((res) => {
			console.log(res);
		});
	};

	// const createNewWishList = () => {
	// 	const params = { name: "コーヒーの日に", products: [] };
	// 	axios.post("/api/wishlists/create/", params).then((res) => {
	// 		console.log(res);
	// 	});
	// };

	const createNewWishList = () => {
		const params = { name: "コーヒーの日に", products: [] };
		axios.post(`/api/wishlists/create/`, params).then((res) => {
			console.log(userId);
			console.log(res);
		});
	};



	

	const addWishList = () => {
		console.log(userId);
		const params = { productid: [116] };
		axios.post(`/api/wishlists/${wishlistId}/product/`, params).then((res) => {
			console.log(res);
			
		});
	};


	// const addWishList = () => {
	// 	const params = { productid: [116] };
	// 	console.log(userId);
	// 	axios.post("/api/wishlists/30/product/", params).then((res) => {
	// 		console.log(res);
	// 	});
	// };

	const deleteWishList = () => {
		const data = { wishlistid: [1] };
		axios.delete("/api/users/tanaka1/wishlist/", { data }).then((res) => {
			console.log(res);
		});
	};

	const getProduct = () => {
		axios.get("/api/products/").then((res) => {
			console.log(res.data);
		});
	};

	const getSelectedProduct = () => {
		const params = { tag: 1 };
		axios.get("/api/products/", { params }).then((res) => {
			console.log(res.data);
		});
	};

	const createProduct = () => {
		const params = {
			name: "コーヒー",
			tag_id: [1, 3, 5],
			url: "coffee.com",
		};
		axios.post("/api/products/create/", params).then((res) => {
			console.log(res);
		});
	};

	const getOkurimonoNavi = () => {
		axios.get("api/navi").then((res) => {
			console.log(res);
		});
	};

	return (
		<div class="container">
			<div class="row justify-content-center my-5">
				<div class="col col-md-10">
					<table class="table">
						<tbody>
							<h4>ユーザーAPI</h4>
							<tr>
								<td>
									<h5>get users list</h5>
									<p className="text-mute m-0">/api/users/</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getUsersList}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>get specific user info</h5>
									<p className="text-mute">
										/api/users/tanaka1
									</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getUser}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>create user</h5>
									<p className="text-mute">
										/api/users/create/
									</p>
									<p className="text-mute m-0">POST</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={createUser}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>create friend relation </h5>
									<p className="text-mute">
										/api/users/(loginid)/friend/
									</p>
									<p className="text-mute m-0">POST</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={createUserFriend}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>delete friend relation </h5>
									<p className="text-mute">
										/api/users/(loginid)/friend/
									</p>
									<p className="text-mute m-0">Delete</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={deleteUserFriend}
									>
										button
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<h4>tag API</h4>
							<tr>
								<td>
									<h5>get tag relation </h5>
									<p className="text-mute">
										/api/preferencetags/
									</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getTag}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>create tag relation </h5>
									<p className="text-mute">
										/api/users/(loginid)/tag/
									</p>
									<p className="text-mute m-0">POST</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={createTag}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>delete tag relation </h5>
									<p className="text-mute">
										/api/users/(loginid)/tag/
									</p>
									<p className="text-mute m-0">Delete</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={deleteTag}
									>
										button
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<h4>wishList API</h4>
							<tr>
								<td>
									<h5>get wish list </h5>
									<p className="text-mute">/api/wishlists/</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getWishList}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>get selected wish list </h5>
									<p className="text-mute">
										/api/wishlists/(wishlists id)/
									</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getSelectedWishList}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>create new wish list </h5>
									<p className="text-mute">
										/api/wishlists/create/
									</p>
									<p className="text-mute m-0">POST</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={createNewWishList}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>add product to wish list </h5>
									<p className="text-mute">
										/api/wishlists/(wishlists id)/product/
									</p>
									<p className="text-mute m-0">POST</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={addWishList}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>delete wish list </h5>
									<p className="text-mute">
										/api/users/(loginid)/wishlist/
									</p>
									<p className="text-mute m-0">Delete</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={deleteWishList}
									>
										button
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<h4>product API</h4>
							<tr>
								<td>
									<h5>get product</h5>
									<p className="text-mute">/api/products/</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getProduct}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>get selected product from tag</h5>
									<p className="text-mute">
										/api/products/?tag=(tag)
									</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getSelectedProduct}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>create product</h5>
									<p className="text-mute">
										/api/products/create/
									</p>
									<p className="text-mute m-0">POST</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={createProduct}
									>
										button
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<h4>okurimono API</h4>
							<tr>
								<td>
									<h5>get okurimono navi</h5>
									<p className="text-mute">/api/navi</p>
									<p className="text-mute m-0">GET</p>
								</td>
								<td>
									<button
										className="btn btn-primary btn-sm"
										onClick={getOkurimonoNavi}
									>
										button
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default ApiPage;
