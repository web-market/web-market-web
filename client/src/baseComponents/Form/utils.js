export const merge = (prevValues, newValue) => {
	const mergeValues = [];

	if (prevValues.length === 0) {
		mergeValues.push(newValue);
	} else {
		prevValues.forEach(prevValue => {
			if (prevValue.name === newValue.name) {
				return mergeValues.push(newValue);
			}

			return mergeValues.push(prevValue);
		});
	}

	return [mergeValues];
};

export const arrayToObject = (array) => array.reduce((memo, item) => {
	return { ...memo, ...item };
}, {});
