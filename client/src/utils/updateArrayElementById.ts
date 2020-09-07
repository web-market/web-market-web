export const updateArrayElementById = (array: any[], id: string | number, newElement: any) => {
	const index = array.findIndex(item => {
		return item.id === id;
	});

	array.splice(index, 1, newElement);

	return array;
};
