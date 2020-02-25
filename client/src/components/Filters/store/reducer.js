import { actionLogger } from '../../../utils';

import {
	SET_FILTERS,
	SET_PENDING
} from './consts';

export const initialState = {
	filtersItems: [],
	isPending: false
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, SET_PENDING);

	switch (payload.type) {
		case SET_FILTERS:
			return {
				...state,
				filtersItems: [...payload.filtersItems]
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
