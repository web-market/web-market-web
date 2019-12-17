import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import { ADD_FORM_IN_GLOBAL_CONTEXT } from './consts';

export const FormsGlobalContext = createContext(initialState);

export const FormsGlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addFormToGlobalContext = (form) => {
		dispatch({
			type: ADD_FORM_IN_GLOBAL_CONTEXT,
			form
		});
	};

	return (
		<FormsGlobalContext.Provider
			value={{
				...state,
				addFormToGlobalContext
			}}
		>
			{children}
		</FormsGlobalContext.Provider>
	);
};
