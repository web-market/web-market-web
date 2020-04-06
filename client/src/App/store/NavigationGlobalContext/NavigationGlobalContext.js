import React, { useEffect, useReducer, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { reducer } from './reducer';

import {
	NavigationGlobalContext,
	SET_NAVIGATION_COLLAPSED,
} from './consts';
import { isUndefined } from '../../../utils';

export const NavigationGlobalContextProvider = ({ children }) => {
	const [get, setCookie] = useCookies();
	const { isCollapsed } = get;

	const [state, dispatch] = useReducer(reducer, { isCollapsed });
	const hasCollapsedOnce = useRef(false);

	useEffect(() => {
		if (isUndefined(isCollapsed)) {
			setCookie('isCollapsed', false, { path: '/' });
		}
	}, []);

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
