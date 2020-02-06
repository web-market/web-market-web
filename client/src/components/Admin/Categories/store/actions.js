import {
	addCategory as addCategoryAPI,
	getAllCategories as getAllCategoriesAPI,
	deleteCategory as deleteCategoryAPI,
	updateCategory as updateCategoryAPI,
	getCategory
} from '../api';
import {
	SET_CATEGORIES,
	SET_PENDING,
	SET_UPDATED_CATEGORY
} from './consts';

export default (dispatch) => {
	const setCategories = (categories) => {
		dispatch({
			type: SET_CATEGORIES,
			categories
		});
	};

	const setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	//for other child category fetch if add some category into parent
	const setUpdateCategory = (id) => {
		dispatch({
			type: SET_UPDATED_CATEGORY,
			id
		});
	};

	//for other child category fetch if add some category into parent
	const resetUpdateCategory = () => {
		dispatch({
			type: SET_UPDATED_CATEGORY,
			id: null
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
			.then(() => setUpdateCategory(val.parentCategoryId))
			.catch(error => console.log(error))
			.finally(() => setPending(false));
	};

	const updateCategory = (data) => {
		return updateCategoryAPI(data)
	.then(() => getCategoriesList())
		.catch(error => console.log(error));
	};

	const deleteCategory = (id) => {
		setPending(true);

		return deleteCategoryAPI(id)
		.catch(error => console.log(error))
		.finally(() => setPending(false));
	};

	return {
		getCategory,
		resetUpdateCategory,
		getCategoriesList,
		addCategory,
		deleteCategory,
		updateCategory,
	};
};
