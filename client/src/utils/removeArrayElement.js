export const removeArrayElement = (items, itemId) => {
	const index = items.findIndex(item => {
		return item.id === itemId;
	});

	items.splice(index, 1);

	return items;
};
