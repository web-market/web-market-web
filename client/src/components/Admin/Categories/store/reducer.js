import { SET_CATEGORIES, SET_PENDING } from './consts';

export const initialState = {
	categories: [],
	isPending: false
};

export const reducer = (state, payload) => {
	switch (payload.type) {
		case SET_CATEGORIES:
			return {
				...state,
				categories: [...payload.categories]
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
