export const getListInitials = (listMatrix) => {
	return listMatrix.reduce((acc, item) => {
		acc[item.itemName] = item.show;

		return acc;
	}, {});
};

export const getListHeaderTooltipItems = (listMatrix) => {
	return listMatrix.reduce((acc, item) => {
		if (item.displayInTooltip) {
			acc.push(item);
		}

		return acc;
	}, []);
};
