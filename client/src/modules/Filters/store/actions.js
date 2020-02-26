import {
	getFilters as getFiltersAPI,
	addFilter as addFilterAPI,
	deleteFilter as deleteFilterAPI,
	addFilterValue as addFilterValueAPI
} from '../api';

import {
	SET_FILTERS,
	SET_PENDING
} from './consts';

export default (dispatch) => {
	const setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const setFilters = (filtersItems) => {
		dispatch({
			type: SET_FILTERS,
			filtersItems
		});
	};

	const getFiltersList = () => {
		setPending(true);

		return getFiltersAPI()
			.then(({ data }) => setFilters(data))
			.catch(e => console.log(e))
			.finally(() => setPending(false));
	};

	const addFilter = (data) => {
		setPending(true);

		return addFilterAPI(data)
			.then(() => getFiltersList())
			.catch(e => console.log(e))
			.finally(() => setPending(false));
	};

	const deleteFilter = (id) => {
		return deleteFilterAPI(id)
			.then(() => getFiltersList());
	};

	const addFilterValue = (data) => {
		return addFilterValueAPI(data);
	};

	return {
		addFilter,
		getFiltersList,
		deleteFilter,
		addFilterValue
	};
};
