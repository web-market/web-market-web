import { createContext } from 'react';

export const initialState = {
	isCollapsed: false
};

export const NavigationGlobalContext = createContext(initialState);

export const SET_NAVIGATION_COLLAPSED = 'SET_NAVIGATION_COLLAPSED';
