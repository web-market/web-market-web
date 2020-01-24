import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import { SET_CATEGORIES, SET_PENDING } from './consts';
import moduleActions from './actions';

export const CategoriesContext = createContext(initialState);

export const CategoriesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const setCategories = (categories) => {
		dispatch({
			type: SET_CATEGORIES,
			categories
		});
	};

	const setPending = (pending) => {
		dispatch({
			type: SET_PENDING,
			pending
		});
	};

	const reducerActions = {
		setPending,
		setCategories
	};

	return (
		<CategoriesContext.Provider
			value={{
				...state,
				...reducerActions,
				...moduleActions(reducerActions),
				dispatch,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};
