const getWishList = {
	get: async () => {
		const data = [];
		for (let i = 0; i < 10; i++) {
			const wishItem = {
				itemname: `hoge ${i}`,
				price: i * 50,
				urlimage:
					"https://tshop.r10s.jp/thinkrich/cabinet/muryou_20/s20018.jpg",
				url: "https://item.rakuten.co.jp/thinkrich/p00639/",
			};
			data.push(wishItem);
		}
		return [200, { data }];
	},
};

export default getWishList;
