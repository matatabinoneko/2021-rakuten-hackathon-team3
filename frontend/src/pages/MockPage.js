import { getUsersList, getWishList } from "data/api/mock";

function MockPage() {
	const _getUsersList = (userId) => {
		getUsersList(userId)
			.then((res) => {
				console.log(res.data);
			})
			.catch((e) => {
				console.error(e);
			});
	};
	const _getWishList = async (userId) => {
		try {
			const res = await getWishList(userId);
			console.log(res.data);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<div class="container">
			<div class="row justify-content-center my-5">
				<div class="col col-md-10">
					<table class="table">
						<tbody>
							<tr>
								<td>
									<h5>フレンドユーザーリスト取得API</h5>
								</td>
								<td>
									<button
										className="btn-primary btn-sm"
										onClick={() => _getUsersList("hoge")}
									>
										button
									</button>
								</td>
							</tr>
							<tr>
								<td>
									<h5>Wish List取得API</h5>
								</td>
								<td>
									<button
										className="btn-primary btn-sm"
										onClick={() => _getWishList("hoge")}
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

export default MockPage;
