import React, { useReducer } from 'react';

import { reducer } from './reducer';
import moduleActions from './actions';

import { RawProductContext, initialState } from './const';

const RawProductContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
        <RawProductContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
                dispatch,
            }}
        >
            {children}
        </RawProductContext.Provider>
	);
};

export { RawProductContextProvider };
