import { ADD_CATEGORIES } from './consts';

export const initialState = {
	categories: []
};

export const reducer = (state, payload) => {
	switch (payload.type) {
		case ADD_CATEGORIES:
			return {
				...state,
				categories: [...payload.categories, ...state.categories]
			};
		default:
			throw new Error();
	}
};
