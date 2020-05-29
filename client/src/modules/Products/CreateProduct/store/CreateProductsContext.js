import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

import { CreateProducts } from './consts';

export const CreateProductsContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<CreateProducts.Provider
			value={{
				...state,
				...moduleActions(dispatch),
				dispatch,
			}}
		>
			{children}
		</CreateProducts.Provider>
	);
};
