import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import {
	FormsGlobalContext,
	ADD_FORM_IN_GLOBAL_CONTEXT,
	REMOVE_FORM_IN_GLOBAL_CONTEXT
} from './consts';

export const FormsGlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addFormToGlobalContext = (form) => {
		dispatch({
			type: ADD_FORM_IN_GLOBAL_CONTEXT,
			form
		});
	};

	const removeFormFromGlobalContext = (form) => {
		dispatch({
			type: REMOVE_FORM_IN_GLOBAL_CONTEXT,
			form
		});
	};

	return (
		<FormsGlobalContext.Provider
			value={{
				...state,
				removeFormFromGlobalContext,
				addFormToGlobalContext
			}}
		>
			{children}
		</FormsGlobalContext.Provider>
	);
};
