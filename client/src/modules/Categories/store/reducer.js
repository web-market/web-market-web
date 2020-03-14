import { actionLogger } from '../../../utils';

import {
	SET_CATEGORIES,
	RESET_CATEGORIES,
	SET_PENDING
} from './consts';

export const initialState = {
	categories: [],
	isPending: false,
	updatedCategoryId: null
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload, SET_PENDING);

	switch (payload.type) {
		case SET_CATEGORIES:
			return {
				...state,
				categories: [...payload.categories]
			};
		case RESET_CATEGORIES:
			return {
				...state,
				categories: []
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
