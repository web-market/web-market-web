import React, { createContext, useReducer } from 'react';

import { reducer, initialState } from './reducer';
import moduleActions from './actions';

import { MediaProductContext } from '../consts';

export const MediaProducContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<MediaProductContext.Provider
			value={{
				...state,
				...moduleActions(dispatch),
				dispatch,
			}}
		>
			{children}
		</MediaProductContext.Provider>
	);
};
