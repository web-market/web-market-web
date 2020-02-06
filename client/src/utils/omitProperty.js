export const omitProperty = (object, property) => {
	return Object.keys(object).reduce((acc, key) => {
		if (key !== property) {
			acc[key] = object[key];
		}

		return acc;
	}, {});
};
