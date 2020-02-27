import {
	getFiltersGroup as getFiltersGroupAPI,
	addFilterGroup as addFilterGroupAPI,
	deleteFilterGroup as deleteFilterGroupAPI,
	addFilterValueGroup as addFilterValueGroupAPI,
	addFilterGroupValue as addFilterGroupValueAPI,
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

		return getFiltersGroupAPI()
			.then(({ data }) => setFilters(data))
			.catch(e => console.log(e))
			.finally(() => setPending(false));
	};

	const addFilter = (data) => {
		setPending(true);

		return addFilterGroupAPI(data)
			.then(() => getFiltersList())
			.catch(e => console.log(e))
			.finally(() => setPending(false));
	};

	const deleteFilter = (id) => {
		return deleteFilterGroupAPI(id)
			.then(() => getFiltersList());
	};

	const addFilterValue = (data) => {
		return addFilterValueGroupAPI(data);
	};

	//FilterGroupValue

	const addFilterGroupValue = (data) => {
		addFilterGroupValueAPI(data);
	};

	return {
		addFilter,
		getFiltersList,
		deleteFilter,
		addFilterValue,
		addFilterGroupValue
	};
};
