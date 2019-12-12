export const merge = (prevValues, newValue) => {
	const mergeValues = [];

	if (prevValues.length === 0) {
		mergeValues.push(newValue);
	} else {
		prevValues.forEach(prevValue => {
			const valueKey = Object.keys(newValue);
			const prevValueKey = Object.keys(prevValue);

			if (valueKey[0] === prevValueKey[0]) {
				return mergeValues.push(newValue);
			}

			return mergeValues.push(prevValue);
		});
	}

	return [...mergeValues];
};
