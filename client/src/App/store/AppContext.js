import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import { ADD_FORM_IN_GLOBAL_CONTEXT } from './consts';

const AppContext = createContext(initialState);

const AppContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addFormToGlobalContext = (form) => {
		dispatch({
			type: ADD_FORM_IN_GLOBAL_CONTEXT,
			form
		});
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				addFormToGlobalContext
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppContextProvider };
