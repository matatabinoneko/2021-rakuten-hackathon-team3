function AddMyWishItemList() {
	const hoge = [];
	for (let i = 0; i < 10; i++) {
		hoge.push(<p>add my wish list</p>);
	}
	return <div className="bg-warning">{hoge}</div>;
}

export default AddMyWishItemList;
