import React, { useReducer, useRef } from 'react';
import { reducer } from './reducer';

import {
	initialState,
	NavigationGlobalContext,
	SET_NAVIGATION_COLLAPSED,
} from './consts';

export const NavigationGlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const hasCollapsedOnce = useRef(false);

	const collapseNavigation = (isCollapsed) => {
		hasCollapsedOnce.current = true;

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
				hasCollapsedOnce: hasCollapsedOnce.current
			}}
		>
			{children}
		</NavigationGlobalContext.Provider>
	);
};
