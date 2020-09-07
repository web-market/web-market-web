import React, { useReducer } from 'react';

import { reducer } from './reducer';
import moduleActions from './actions';

import { SupplyAddContext, initialState } from './const';

const SupplyAddContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
        <SupplyAddContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
                dispatch,
            }}
        >
            {children}
        </SupplyAddContext.Provider>
	);
};

export { SupplyAddContextProvider };
