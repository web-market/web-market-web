import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import {
	ADD_FORM_TO_GLOBAL_CONTEXT,
    ADD_FORM_VALUES_TO_GLOBAL_CONTEXT,
	REMOVE_FORM_FROM_GLOBAL_CONTEXT
} from './const';
import { FormsGlobalContextTypes } from './types';

export const FormsGlobalContext = createContext<FormsGlobalContextTypes>(initialState);

export const FormsGlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addFormToGlobalContext = (form) => {
		dispatch({
			type: ADD_FORM_TO_GLOBAL_CONTEXT,
			form
		});
	};

    const addFormValuesToGlobalContext = (formData: { formName: string; values: {} }) => {
        dispatch({
            type: ADD_FORM_VALUES_TO_GLOBAL_CONTEXT,
            formData
        });
    };

	const removeFormFromGlobalContext = (form) => {
		dispatch({
			type: REMOVE_FORM_FROM_GLOBAL_CONTEXT,
			form
		});
	};

	return (
		<FormsGlobalContext.Provider
			value={{
				...state,
				removeFormFromGlobalContext,
				addFormToGlobalContext,
                addFormValuesToGlobalContext
			}}
		>
			{children}
		</FormsGlobalContext.Provider>
	);
};
