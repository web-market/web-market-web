import {
	addCategory as addCategoryAPI,
	getAllCategories as getAllCategoriesAPI,
	deleteCategory as deleteCategoryAPI,
	updateCategory as updateCategoryAPI,
	getCategory
} from '../api';
import {
	SET_CATEGORIES,
	RESET_CATEGORIES,
	SET_PENDING
} from './consts';

export default (dispatch) => {
	const setCategories = (categories) => {
		dispatch({
			type: SET_CATEGORIES,
			categories
		});
	};

	const resetCategories = () => {
		dispatch({
			type: RESET_CATEGORIES
		});
	};

	const setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const getCategoriesList = () => {
		setPending(true);

		return getAllCategoriesAPI()
			.then(({ data }) => setCategories(data))
			.catch(error => console.log(error))
			.finally(() => setPending(false));
	};

	const addCategory = (val) => {
		setPending(true);

		return addCategoryAPI(val)
			.then(() => resetCategories())
			.catch(error => console.log(error))
			.finally(() => setPending(false));
	};

	const updateCategory = (data) => {
		return updateCategoryAPI(data)
			.then(() => resetCategories())
			.then(() => getCategoriesList())
			.catch(error => console.log(error));
	};

	const deleteCategory = (id) => {
		setPending(true);

		return deleteCategoryAPI(id)
			.then(() => resetCategories())
			.catch(error => console.log(error))
			.finally(() => setPending(false));
	};

	return {
		getCategory,
		getCategoriesList,
		addCategory,
		deleteCategory,
		updateCategory,
	};
};
