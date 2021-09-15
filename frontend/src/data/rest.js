import axios from "axios";
import mock from "./mock/$mock";

const rest = (() => {
	const client = axios.create({
		baseURL: process.env.BASE_URL || "http://localhost:3000",
		timeout: 15000,
	});

	return {
		client,
		get: (url) => {
			return client.get(url);
		},
		post: (url, data) => {
			return client.post(url, data);
		},
	};
})();

const useMock = true;
if (useMock) {
	mock(rest.client).enableLog().setDelayTime(500);
}

export { rest };
