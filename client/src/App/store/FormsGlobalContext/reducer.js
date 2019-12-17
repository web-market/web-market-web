import { ADD_FORM_IN_GLOBAL_CONTEXT } from './consts';

export const initialState = {
	forms: {}
};

export const reducer = (state, payload) => {
	switch (payload.type) {
		case ADD_FORM_IN_GLOBAL_CONTEXT:
			return {
				...state,
				forms: { ...payload.form, ...state.forms }
			};
		default:
			throw new Error();
	}
};
