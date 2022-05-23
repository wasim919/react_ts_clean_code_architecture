export const fetchRest = async (url: string) => {
	try {
		const res = await fetch(url).then((res) => res.json());
		return res;
	} catch (error) {
		throw error;
	}
};
