const typeMap = [
	'primary',
	'secondary',
	'success',
	'danger',
	'warning',
	'info',
	'light',
	'dark',
];

export const getType = (props) => {
	return typeMap.map(type => {
		if (props.hasOwnProperty(type)) {
			return type;
		}

		return null;
	});
};
