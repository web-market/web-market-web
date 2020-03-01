import { actionLogger } from '../../../utils';

import {
	SET_FILTERS,
	SET_PENDING,
	SET_FILTER_GROUP_HAS_ADDED_VALUE,
	SET_FILTER_GROUP_GET_VALUES_HANDLER
} from './consts';

export const initialState = {
	filtersItems: [],
	isPending: false,
	filterGroupValueHandler: {},
	hasFilterGroupValues: {}
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, SET_PENDING);

	switch (payload.type) {
		case SET_FILTERS:
			return {
				...state,
				filtersItems: [...payload.filtersItems]
			};
		case SET_FILTER_GROUP_GET_VALUES_HANDLER:
			state.filterGroupValueHandler[payload.handlerMetadata.handlerId] = payload.handlerMetadata.handler;

			return {
				...state,
				filterGroupValueHandler: { ...state.filterGroupValueHandler }
			};
		case SET_FILTER_GROUP_HAS_ADDED_VALUE:
			//eslint-disable-next-line
			state.hasFilterGroupValues[payload.filterGroupMetadata.filterGroupId] = payload.filterGroupMetadata.hasValue;

			return {
				...state,
				hasFilterGroupValues: { ...state.hasFilterGroupValues }
			};
		case SET_PENDING:
			return {
				...state,
				isPending: payload.pending
			};
		default:
			throw new Error();
	}
};
