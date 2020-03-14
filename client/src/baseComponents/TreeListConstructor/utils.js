let GLOBAL;

function _isRootElem (value) {
	return value === null || value === undefined || value === 0;
}

export const buildTree = (list) => {
	const { idKey, referenceKey, childrenListKey } = GLOBAL;
	const TREE_LIST = [];

	const reverseList = list.reverse();

	const listWithChildrenListKey = reverseList.reduce((acc, elem) => {
		elem[childrenListKey] = [];
		acc.push(elem);

		return acc;
	}, []);

	listWithChildrenListKey.forEach(elem => {
		const isRootElem = _isRootElem(elem[referenceKey]);

		if (!isRootElem) {
			listWithChildrenListKey.forEach((listElement, index) => {
				if (listElement[idKey] === elem[referenceKey]) {
					listWithChildrenListKey[index][childrenListKey].push(elem);
				}
			});
		} else {
			TREE_LIST.push(elem);
		}
	});

	return TREE_LIST;
};

export const initBuildTree = (options) => {
	GLOBAL = { ...options };
};
