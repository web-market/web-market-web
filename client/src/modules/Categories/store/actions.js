import {
	addCategory as addCategoryAPI,
	getAllCategories as getAllCategoriesAPI,
	deleteCategory as deleteCategoryAPI,
	updateCategory as updateCategoryAPI,
	getCategory as getCategoryAPI
} from '../api';

import {
	SET_CATEGORIES,
	RESET_CATEGORIES,
	SET_PENDING
} from './consts';

export default (dispatch) => {
	const _setCategories = (categories) => {
		dispatch({
			type: SET_CATEGORIES,
			categories
		});
	};

	const _resetCategories = () => {
		dispatch({
			type: RESET_CATEGORIES
		});
	};

	const _setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const getCategoriesList = () => {
		_setPending(true);

		return getAllCategoriesAPI()
			.then(({ data }) => _setCategories(data))
			.catch(error => console.log(error))
			.finally(() => _setPending(false));
	};

	const addCategory = (val) => {
		_setPending(true);

		return addCategoryAPI(val)
			.then(() => {})
			.catch(error => console.log(error))
			.finally(() => _setPending(false));
	};

	const updateCategory = (data) => {
		return updateCategoryAPI(data)
			.then(() => _resetCategories())
			.then(() => getCategoriesList())
			.catch(error => console.log(error));
	};

	const deleteCategory = (id) => {
		_setPending(true);

		return deleteCategoryAPI(id)
			.then(() => _resetCategories())
			.catch(error => console.log(error))
			.finally(() => _setPending(false));
	};

	return {
		getCategoryAPI,
		getCategoriesList,
		addCategory,
		deleteCategory,
		updateCategory,
	};
};
