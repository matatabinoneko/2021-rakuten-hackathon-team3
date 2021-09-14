import { getUsersList } from "data/api/getUsers";

function MockPage() {
	const _getUsersList = (userId) => {
		getUsersList(userId).then((res) => {
			console.log(res.data);
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
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default MockPage;
