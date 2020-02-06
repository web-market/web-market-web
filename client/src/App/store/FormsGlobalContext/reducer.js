import { omitProperty } from '../../../utils';

import {
	ADD_FORM_IN_GLOBAL_CONTEXT,
	REMOVE_FORM_IN_GLOBAL_CONTEXT
} from './consts';

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
		case REMOVE_FORM_IN_GLOBAL_CONTEXT:
			return {
				...state,
				forms: omitProperty(state.forms, payload.form)
			};
		default:
			throw new Error();
	}
};
