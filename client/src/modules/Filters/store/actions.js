import {
	getFiltersGroup as getFiltersGroupAPI,
	updateFilterGroup as updateFilterGroupAPI,
	addFilterGroup as addFilterGroupAPI,
	deleteFilterGroup as deleteFilterGroupAPI,
	addFilterGroupValue as addFilterGroupValueAPI,
	getFilterGroupValue as getFilterGroupValueAPI,
	getFilterGroup as getFilterGroupAPI,
	deleteFilterGroupValue as deleteFilterGroupValueAPI,
	getEditFilterGroupValue as getEditFilterGroupValueAPI,
	updateFiltersGroupValue as updateFiltersGroupValueAPI
} from '../api';

import {
	SET_FILTERS,
	SET_PENDING,
	SET_FILTER_GROUP_HAS_ADDED_VALUE,
	SET_FILTER_GROUP_GET_VALUES_HANDLER,
	SET_FILTER_GROUP_VALUE_EDIT_MODE_HANDLER
} from './consts';

export default (dispatch) => {
	const _setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const _setFilters = (filtersItems) => {
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

	const setFilterGroupValueEditModeHandler = (handler) => {
		dispatch({
			type: SET_FILTER_GROUP_VALUE_EDIT_MODE_HANDLER,
			handler
		});
	};

	const getFiltersList = () => {
		_setPending(true);

		return getFiltersGroupAPI()
			.then(({ data }) => _setFilters(data))
			.catch(e => console.log(e))
			.finally(() => _setPending(false));
	};

	const getFilterGroup = (data) => {
		return getFilterGroupAPI(data);
	};

	const updateFilterGroup = (data) => {
		return updateFilterGroupAPI(data);
	};

	const addFilterGroup = (data) => {
		_setPending(true);

		return addFilterGroupAPI(data)
			.catch(e => console.log(e))
			.finally(() => _setPending(false));
	};

	const deleteFilter = (id) => {
		return deleteFilterGroupAPI(id)
			.then(() => getFiltersList());
	};

	//FilterGroupValue
	const getFilterGroupValue = (id) => {
		return getFilterGroupValueAPI(id);
	};

	const getEditFilterGroupValue = (id) => {
		return getEditFilterGroupValueAPI(id);
	};

	const updateFiltersGroupValue = (data) => {
		return updateFiltersGroupValueAPI(data);
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
		updateFilterGroup,
		getFilterGroup,
		getEditFilterGroupValue,
		updateFiltersGroupValue,
		setFilterGroupValueEditModeHandler
	};
};
