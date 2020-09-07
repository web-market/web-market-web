import { actionLogger, removeObjectProperty } from '../../../utils';

import {
	ADD_FORM_TO_GLOBAL_CONTEXT,
    ADD_FORM_VALUES_TO_GLOBAL_CONTEXT,
	REMOVE_FORM_FROM_GLOBAL_CONTEXT
} from './const';

export const initialState = {
	forms: {},
    addFormToGlobalContext: () => {},
    removeFormFromGlobalContext: () => {},
    addFormValuesToGlobalContext: () => {},
};

export const reducer = (state, payload) => {
	actionLogger(payload.type, payload);

	switch (payload.type) {
		case ADD_FORM_TO_GLOBAL_CONTEXT:
			return {
				...state,
				forms: { ...state.forms, ...payload.form }
			};
        case ADD_FORM_VALUES_TO_GLOBAL_CONTEXT:
            const { formName, values } = payload.formData;

            const updatedForm = {
                [formName]: {
                    ...state.forms[formName],
                    values
                }
            };

            return {
                ...state,
                forms: { ...state.forms, ...updatedForm }
            };
		case REMOVE_FORM_FROM_GLOBAL_CONTEXT:
			return {
				...state,
				forms: removeObjectProperty(state.forms, payload.form)
			};
		default:
			throw new Error();
	}
};
