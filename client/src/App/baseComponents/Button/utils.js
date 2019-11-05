const typeMap = [
	'primary',
	'secondary',
	'success',
	'danger',
	'warning',
	'info',
	'light',
	'dark'
];

export const getType = (props) => {
	let hasType = false;
	let t = null;

	typeMap.forEach(type => {
		if (props[type] && !hasType) {
			hasType = true;

			t = type;
		}
	});

	return t;
};
