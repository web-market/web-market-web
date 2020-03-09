import React, { useState, useReducer } from 'react';
import { initialState, reducer } from './reducer';

import { AppGlobalContext, SHOW_NOTIFICATION, REMOVE_NOTIFICATION } from './consts';

export const AppGlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [showOverlayCloak, setShowOverlayCloak] = useState(false);
	const [handleOverlayClose, setHandleOverlayClose] = useState(() => {});

	const showNotification = (notification) => {
		dispatch({
			type: SHOW_NOTIFICATION,
			notification
		});
	};

	const removeNotification = (notificationId) => {
		dispatch({
			type: REMOVE_NOTIFICATION,
			notificationId
		});
	};

	const handleShowOverlayCloak = (show) => {
		setShowOverlayCloak(show);
	};

	return (
		<AppGlobalContext.Provider
			value={{
				...state,
				showNotification,
				showOverlayCloak,
				removeNotification,
				handleOverlayClose,
				setHandleOverlayClose,
				handleShowOverlayCloak
			}}
		>
			{children}
		</AppGlobalContext.Provider>
	);
};
