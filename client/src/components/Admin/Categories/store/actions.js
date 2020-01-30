import { addCategory, getAllCategories, deleteCategory } from '../api';
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

	//TODO: deprecate method after categories list refactoring(to one level list)
	const setUpdateCategory = (id) => {
		dispatch({
			type: SET_UPDATED_CATEGORY,
			id
		});
	};

	//TODO: deprecate method after categories list refactoring(to one level list)
	const resetUpdateCategory = () => {
		dispatch({
			type: SET_UPDATED_CATEGORY,
			id: null
		});
	};

	return {
		resetUpdateCategory,
		getCategoriesList: () => {
			setPending(true);

			return getAllCategories()
				.then(({ data }) => setCategories(data))
				.catch(error => console.log(error))
				.finally(() => setPending(false));
		},
		addCategory: (val) => {
			setPending(true);

			return addCategory(val)
				.then(() => setUpdateCategory(val.parentCategoryId))
				.catch(error => console.log(error))
				.finally(() => setPending(false));
		},
		deleteCategory: (id) => {
			setPending(true);

			return deleteCategory(id)
				.catch(error => console.log(error))
				.finally(() => setPending(false));
		}
	};
};
