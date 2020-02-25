import React, { createContext, useState } from 'react';

export const AppGlobalContext = createContext();

export const AppGlobalContextProvider = ({ children }) => {
	const [showOverlayCloak, setShowOverlayCloak] = useState(false);
	const [handleOverlayClose, setHandleOverlayClose] = useState(() => {});

	const handleShowOverlayCloak = (show) => {
		setShowOverlayCloak(show);
	};

	return (
		<AppGlobalContext.Provider
			value={{
				showOverlayCloak,
				handleOverlayClose,
				setHandleOverlayClose,
				handleShowOverlayCloak
			}}
		>
			{children}
		</AppGlobalContext.Provider>
	);
};
