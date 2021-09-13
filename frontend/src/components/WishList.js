function WishList() {
	const wishList = [];
	for (let i = 0; i < 10; i++) {
		wishList.push(<p className="text-white text-center">wish list</p>);
	}
	return <div className="bg-success">{wishList}</div>;
}

export default WishList;
