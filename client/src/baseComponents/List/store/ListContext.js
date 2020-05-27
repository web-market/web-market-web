import React, { useReducer } from 'react';
import { reducer } from './reducer';

import {
	ListContext,
	SET_LIST_NAME,
	SET_LIST_INITIALS,
	UPDATE_LIST_ITEM_STATE
} from './consts';

export const ListContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, {});

	const setListInitials = (initialState) => {
		dispatch({
			type: SET_LIST_INITIALS,
			initialState
		});

		dispatch({
			type: SET_LIST_NAME,
			initialState
		});
	};

	const updateListItemState = (itemState) => {
		dispatch({
			type: UPDATE_LIST_ITEM_STATE,
			itemState
		});
	};

	return (
		<ListContext.Provider
			value={{
				...state,
				setListInitials,
				updateListItemState
			}}
		>
			{children}
		</ListContext.Provider>
	);
};
