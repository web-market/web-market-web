import React, { useContext } from 'react';

import AppContextProvider, { AppGlobalContext } from '../../App/store/AppGlobalContext';
import { NavigationGlobalContext } from '../../App/store/NavigationGlobalContext';
import FormsContextProvider from '../../App/store/FormsGlobalContext';

import Notification from '../../baseComponents/Notification';
import OverlayCloak from '../../baseComponents/OverlayCloak';

import AdminControlRoutes from './AdminControlRoutes';

import ClassNames from 'classnames';
import classes from './styles/index.scss';

const AdminControl = () => {
	const { showOverlayCloak, handleOverlayClose } = useContext(AppGlobalContext);
	const { isCollapsed, hasCollapsedOnce } = useContext(NavigationGlobalContext);

	const componentClassName = ClassNames(
		{
			[classes.adminControl_primaryNavigationCollapsed]: isCollapsed === 'true',
			[classes.adminControl_inCollapseProgress]: hasCollapsedOnce
		},
		classes.adminControl
	);

	return (
		<div className={componentClassName}>
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
