function FriendsList() {
	const frinendList = [];
	for (let i = 0; i < 10; i++) {
		frinendList.push(
			<p className="text-white text-center">friends list</p>
		);
	}
	return <div className="bg-primary">{frinendList}</div>;
}

export default FriendsList;
