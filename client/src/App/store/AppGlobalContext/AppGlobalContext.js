import React, { useState, useReducer } from 'react';

import { reducer } from './reducer';

import {
	initialState,
	AppGlobalContext,
	SHOW_NOTIFICATION,
	REMOVE_NOTIFICATION,
	ADD_UPLOADER_TO_GLOBAL_CONTEXT,
	REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT
} from './consts';

export const AppGlobalContextProvider = ({ children }) => {
	const [showOverlayCloak, setShowOverlayCloak] = useState(false);
	const [handleOverlayClose, setHandleOverlayClose] = useState(() => {});

	const [state, dispatch] = useReducer(reducer, { ...initialState });

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

	const addUploaderToGlobalContext = (upLoader) => {
		dispatch({
			type: ADD_UPLOADER_TO_GLOBAL_CONTEXT,
			upLoader
		});
	};

	const removeUploaderFromGlobalContext = (upLoader) => {
		dispatch({
			type: REMOVE_UPLOADER_FROM_GLOBAL_CONTEXT,
			upLoader
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
				handleShowOverlayCloak,
				addUploaderToGlobalContext,
				removeUploaderFromGlobalContext
			}}
		>
			{children}
		</AppGlobalContext.Provider>
	);
};
