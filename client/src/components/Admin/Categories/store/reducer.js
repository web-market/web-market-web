import {
	SET_CATEGORIES,
	SET_PENDING,
	SET_UPDATED_CATEGORY
} from './consts';

export const initialState = {
	categories: [],
	isPending: false,
	updatedCategoryId: null
};

export const reducer = (state, payload) => {
	if (payload.type !== SET_PENDING) console.log(payload.type);

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
		case SET_UPDATED_CATEGORY:
			return {
				...state,
				updatedCategoryId: payload.id
			};
		default:
			throw new Error();
	}
};
