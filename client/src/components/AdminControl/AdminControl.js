import React, { useContext } from 'react';
import AppContextProvider, { AppGlobalContext } from '../../App/store/AppGlobalContext';
import FormsContextProvider from '../../App/store/FormsGlobalContext';

import Notification from '../../baseComponents/Notification';
import OverlayCloak from '../../baseComponents/OverlayCloak';

import AdminControlRoutes from './AdminControlRoutes';

import classes from './styles/index.scss';

const AdminControl = () => {
	const { showOverlayCloak, handleOverlayClose } = useContext(AppGlobalContext);

	return (
		<div className={classes.adminControl}>
			<AdminControlRoutes />
			<OverlayCloak
				show={showOverlayCloak}
				handleOverlayClose={handleOverlayClose}
			/>
			<Notification />
		</div>
	);
};

const AdminControlWithContexts = () => (
	<AppContextProvider>
		<FormsContextProvider>
			<AdminControl />
		</FormsContextProvider>
	</AppContextProvider>
);

export { AdminControlWithContexts };
