import React, { useReducer } from 'react';

import { reducer } from './reducer';
import moduleActions from './actions';

import { StoreContext, initialState } from './const';

const StoreContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
        <StoreContext.Provider
            value={{
                ...state,
                ...moduleActions(dispatch),
                dispatch,
            }}
        >
            {children}
        </StoreContext.Provider>
	);
};

export { StoreContextProvider };
