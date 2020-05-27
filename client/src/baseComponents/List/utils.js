import { isUndefined } from '../../utils';

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

export const getContentWidth = (listMatrix, listState) => {
	const itemList = [...listMatrix];
	let rowWidth = 0;
	if (isUndefined(listState)) return;

	const activeItemList = itemList.filter(item => {
		return listState[item.itemName];
	});

	activeItemList.forEach(item => {
		rowWidth += item.width;
	});

	//16 - padding: 8
	const activeItemListOffsetWidth = activeItemList.length * 16;

	return rowWidth + activeItemListOffsetWidth;
};
