import { actionLogger } from '../../../../utils';

import {
	SET_FILTERS,
	SET_PENDING
} from './consts';

export const initialState = {
	categories: [],
	isPending: false,
	updatedCategoryId: null
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, SET_PENDING);
	console.log(payload.filters);
	switch (payload.type) {
		case SET_FILTERS:
			return {
				...state,
				filters: [...payload.filters]
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
