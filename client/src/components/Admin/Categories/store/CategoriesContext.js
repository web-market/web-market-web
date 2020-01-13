import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import { ADD_CATEGORIES } from './consts';

export const CategoriesContext = createContext(initialState);

export const CategoriesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addCategories = (categories) => {
		dispatch({
			type: ADD_CATEGORIES,
			categories
		});
	};

	return (
		<CategoriesContext.Provider
			value={{
				...state,
				addCategories
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};
