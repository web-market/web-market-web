import React, { createContext, useState } from 'react';

export const AppGlobalContext = createContext();

export const AppGlobalContextProvider = ({ children }) => {
	const [showOverlayCloak, setShowOverlayCloak] = useState(false);
	const [handleClose, setHandleClose] = useState(() => {});

	const handleShowOverlayCloak = (show) => {
		setShowOverlayCloak(show);
	};

	return (
		<AppGlobalContext.Provider
			value={{
				showOverlayCloak,
				handleShowOverlayCloak,
				handleClose,
				setHandleClose
			}}
		>
			{children}
		</AppGlobalContext.Provider>
	);
};
