export const removeArrayElement = (items, itemId) => {
	return items.splice(items.findIndex(item => {
		return item.id === itemId;
	}), 1);
};
