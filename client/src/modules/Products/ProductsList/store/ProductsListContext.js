import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

import { ProductsContext } from './consts';

export const ProductsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<ProductsContext.Provider
			value={{
				...state,
				...moduleActions(dispatch),
				dispatch,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
