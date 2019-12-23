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

export const objectToArray = (obj) => {
	const array = [];

	for (const item in obj) {
		if (obj.hasOwnProperty(item)) {
			array.push({
				name: item,
				value: obj[item]
			});
		}
	}

	return array;
};
