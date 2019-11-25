const _getNestedCategories = (categories, list) => {
	if (categories.childCategories.length !== 0) {
		categories.childCategories.forEach(category => {
			list.push(category);

			if (category.childCategories.length !== 0) {
				_getNestedCategories(category, list);
			}
		});
	}
};

export const getSingleLevelCategoriesList = (categories) => {
	const list = [];

	categories.forEach((category) => {
		_getNestedCategories(category, list);

		list.push({ ...category });
	});

	return list;
};
