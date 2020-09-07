import React, { useReducer } from 'react';

import { reducer } from './reducer';
import moduleActions from './actions';

import { MediaProductContext, initialState } from './consts';

export const MediaProductContextProvider = ({ children }) => {
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
