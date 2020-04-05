import React, { useReducer } from 'react';
import { reducer } from './reducer';

import {
	initialState,
	NavigationGlobalContext,
	SET_NAVIGATION_COLLAPSED,
} from './consts';

export const NavigationGlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const collapseNavigation = (isCollapsed) => {
		dispatch({
			type: SET_NAVIGATION_COLLAPSED,
			isCollapsed
		});
	};

	return (
		<NavigationGlobalContext.Provider
			value={{
				...state,
				collapseNavigation,
			}}
		>
			{children}
		</NavigationGlobalContext.Provider>
	);
};
