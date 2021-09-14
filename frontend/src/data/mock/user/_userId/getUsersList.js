const dateFormat = {
	_fmt: {
		yyyy: function (date) {
			return date.getFullYear() + "";
		},
		MM: function (date) {
			return ("0" + (date.getMonth() + 1)).slice(-2);
		},
		dd: function (date) {
			return ("0" + date.getDate()).slice(-2);
		},
		hh: function (date) {
			return ("0" + date.getHours()).slice(-2);
		},
		mm: function (date) {
			return ("0" + date.getMinutes()).slice(-2);
		},
		ss: function (date) {
			return ("0" + date.getSeconds()).slice(-2);
		},
	},
	_priority: ["yyyy", "MM", "dd", "hh", "mm", "ss"],
	format: function (date, format) {
		return this._priority.reduce(
			(res, fmt) => res.replace(fmt, this._fmt[fmt](date)),
			format
		);
	},
};

const getUsersList = {
	get: async () => {
		const data = [];
		for (let i = 0; i < 10; i++) {
			const friend = {
				loginId: `user ${i}`,
				username: `username ${i}`,
				firstname: `firstname ${i}`,
				lastname: `lastname ${i}`,
				iconimage:
					"https://lh3.googleusercontent.com/ogw/ADea4I7bQJQeuMPW2JparIxNw-p7md6ug5TC1xNHECmY=s64-c-mo",
				birthday: dateFormat.format(
					new Date(2017, i, 15, 22, 30),
					"yyyy-MM-dd"
				),
			};
			data.push(friend);
		}
		return [200, { data }]; // 200 はステータスコード
	},
};

export default getUsersList; // ここは `default export` にしないと動かない
