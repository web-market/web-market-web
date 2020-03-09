export const getRandomId = () => {
	//eslint-disable-next-line
	return '_' + Math.random().toString(36).substr(2, 9);
};
