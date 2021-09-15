import { useState } from 'react'
import Header from "components/Header";
import FriendsList from "components/FriendsList";
import WishList from "components/WishList";
import AddMyWishItemList from "components/AddMyWishItemList";
import { ToastProvider } from 'react-toast-notifications';

function TopPage() {
	const [search,setSearch] = useState("mens")

	return (
		<div>
			<Header setSearch={setSearch}/>
			<ToastProvider>
			<AddMyWishItemList search={search}/>
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
						<WishList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopPage;
