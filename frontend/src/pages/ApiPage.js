import axios from "axios";

function ApiPage() {
	const getUsersList = () => {
		axios.get("/api/users/").then((res) => {
			const data = res.data;
			console.log(data);
		});
	};

	const getUser = () => {
		axios.get("/api/users/tanaka1").then((res) => {
			console.log(res.data);
		});
	};

	const createUser = () => {
		const params = {
			loginid: "rakuten",
			password: "rakutenrakuten",
			username: "t-naka",
			firstname: "rakuten",
			lastname: "keisuke",
			iconimage: null,
			birthday: "1997-08-02",
			zipcode: "111-2345",
			address: "東京都xx区〇〇",
			is_recommend: false,
			friends: [],
			tags: [],
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
		const params = { friendid: ["tanaka1", "watanabe1"] };
		axios.delete("/api/users/tanaka1/friend/", params).then((res) => {
			console.log(res);
		});
	};

	const getTag = () => {
		axios.get("/api/users/tanaka1/tag/").then((res) => {
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
		const params = { tagid: [1, 2] };
		axios.delete("/api/users/tanaka1/tag/", params).then((res) => {
			console.log(res);
		});
	};

	const deleteWishList = () => {
		const params = { wishlistid: [1] };
		axios.delete("/api/users/tanaka1/wishlist/", params).then((res) => {
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
		axios.get("/api/products/", params).then((res) => {
			console.log(res.data);
		});
	};

	const createProduct = () => {
		const params = { name: "hoge", tags: [{ id: "2" }] };
		axios.post("/api/users/tanaka1/tag/", params).then((res) => {
			console.log(res);
		});
	};

	return (
		<div class="container">
			<div class="row justify-content-center my-5">
				<div class="col col-md-10">
					<table class="table">
						<tbody>
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
							<tr>
								<td>
									<h5>get tag relation </h5>
									<p className="text-mute">
										/api/users/(loginid)/tag/
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
					</table>
				</div>
			</div>
		</div>
	);
}

export default ApiPage;
