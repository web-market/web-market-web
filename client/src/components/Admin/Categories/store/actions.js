import { addCategory, getAllCategories } from '../api';

export default ({ setCategories, setPending }) => {
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
		}
	};
};
