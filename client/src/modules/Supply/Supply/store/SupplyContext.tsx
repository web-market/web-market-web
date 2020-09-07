import React, { useReducer } from 'react';

import { reducer } from './reducer';
import moduleActions from './actions';

import { SupplyContext, initialState } from './const';

const SupplyContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
        <SupplyContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
                dispatch,
            }}
        >
            {children}
        </SupplyContext.Provider>
	);
};

export { SupplyContextProvider };
