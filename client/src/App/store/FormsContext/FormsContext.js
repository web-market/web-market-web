import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import { ADD_FORM_IN_GLOBAL_CONTEXT } from './consts';

export const FormsContext = createContext(initialState);

export const FormsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addFormToGlobalContext = (form) => {
		dispatch({
			type: ADD_FORM_IN_GLOBAL_CONTEXT,
			form
		});
	};

	return (
		<FormsContext.Provider
			value={{
				...state,
				addFormToGlobalContext
			}}
		>
			{children}
		</FormsContext.Provider>
	);
};
