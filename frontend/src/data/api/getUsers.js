import { rest } from "../rest";

const getUsersList = async (userId) => {
	const url = `/user/${userId}/getUsersList`;
	try {
		const { data } = await rest.get(url);
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export { getUsersList };
