import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

export const FiltersContext = createContext(initialState);

export const FiltersContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<FiltersContext.Provider
			value={{
				...state,
				...moduleActions(dispatch),
				dispatch,
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
};
