import React, { useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

import { FiltersContext } from '../consts';

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
