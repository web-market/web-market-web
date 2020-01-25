import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

export const CategoriesContext = createContext(initialState);

export const CategoriesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CategoriesContext.Provider
			value={{
				...state,
				...moduleActions(dispatch),
				dispatch,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};
