import {
	getFiltersGroup as getFiltersGroupAPI,
	addFilterGroup as addFilterGroupAPI,
	deleteFilterGroup as deleteFilterGroupAPI,
	addFilterValueGroup as addFilterValueGroupAPI,
	addFilterGroupValue as addFilterGroupValueAPI,
	getFilterGroupValue as getFilterGroupValueAPI,
} from '../api';

import {
	SET_FILTERS,
	SET_PENDING,
	SET_FILTER_GROUP_VALUE_HANDLER
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

	const setFilterGroupValueHandler = (handler, handlerId) => {
		dispatch({
			type: SET_FILTER_GROUP_VALUE_HANDLER,
			handlerMetadata: {
				handler,
				handlerId,
			}
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
	const getFilterGroupValue = (id) => {
		return getFilterGroupValueAPI(id);
	};

	const addFilterGroupValue = (data) => {
		return addFilterGroupValueAPI(data);
	};

	return {
		addFilter,
		deleteFilter,
		getFiltersList,
		addFilterValue,
		addFilterGroupValue,
		getFilterGroupValue,
		setFilterGroupValueHandler
	};
};
