import { addCategory, getAllCategories, deleteCategory } from '../api';
import { SET_CATEGORIES, SET_PENDING } from './consts';

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

	return {
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
