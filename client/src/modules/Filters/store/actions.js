import {
	getFiltersGroup as getFiltersGroupAPI,
	updateFilterGroup as updateFilterGroupAPI,
	addFilterGroup as addFilterGroupAPI,
	deleteFilterGroup as deleteFilterGroupAPI,
	addFilterGroupValue as addFilterGroupValueAPI,
	getFilterGroupValue as getFilterGroupValueAPI,
	deleteFilterGroupValue as deleteFilterGroupValueAPI
} from '../api';

import {
	SET_FILTERS,
	SET_PENDING,
	SET_FILTER_GROUP_HAS_ADDED_VALUE,
	SET_FILTER_GROUP_GET_VALUES_HANDLER
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
			type: SET_FILTER_GROUP_GET_VALUES_HANDLER,
			handlerMetadata: {
				handler,
				handlerId,
			}
		});
	};

	const setFilterGroupHasValue = (hasValue, filterGroupId) => {
		dispatch({
			type: SET_FILTER_GROUP_HAS_ADDED_VALUE,
			filterGroupMetadata: {
				hasValue,
				filterGroupId
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

	const updateFilterGroup = (data) => {
		return updateFilterGroupAPI(data);
	};

	const addFilterGroup = (data) => {
		setPending(true);

		return addFilterGroupAPI(data)
			.catch(e => console.log(e))
			.finally(() => setPending(false));
	};

	const deleteFilter = (id) => {
		return deleteFilterGroupAPI(id)
			.then(() => getFiltersList());
	};

	//FilterGroupValue
	const getFilterGroupValue = (id) => {
		return getFilterGroupValueAPI(id);
	};

	const addFilterGroupValue = (data) => {
		return addFilterGroupValueAPI(data);
	};

	const deleteFilterGroupValue = (data) => {
		return deleteFilterGroupValueAPI(data);
	};

	return {
		addFilterGroup,
		deleteFilter,
		getFiltersList,
		addFilterGroupValue,
		getFilterGroupValue,
		setFilterGroupHasValue,
		setFilterGroupValueHandler,
		deleteFilterGroupValue,
		updateFilterGroup
	};
};
