export const parsedLocation = (location) => {
	const l = location.pathname.substring(1);
	const parsedLocation = l.split('/');

	return {
		root: parsedLocation[0],
		activeMenu: parsedLocation[1],
		activeSubMenu: parsedLocation[2]
	};
};
