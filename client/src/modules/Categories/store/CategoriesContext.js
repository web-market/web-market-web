import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

import { CategoriesContext } from '../consts';

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
