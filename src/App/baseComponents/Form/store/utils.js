export const merge = (prevValues, newValues) => {
	const mergeValues = [];

	newValues.forEach(value => {
		if (prevValues.length === 0) {
			mergeValues.push(value);
		} else {
			prevValues.forEach(prevValue => {
				const valueKey = Object.keys(value);
				const prevValueKey = Object.keys(prevValue);

				if (valueKey[0] === prevValueKey[0]) {
					return mergeValues.push(value);
				}

				return mergeValues.push(prevValue);
			});
		}
	});

	return [...mergeValues];
};
