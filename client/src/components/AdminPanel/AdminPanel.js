import React from 'react';

// import AdminNavigation from '../AdminNavigation';
import AdminNavigationCollapsed from '../AdminNavigationCollapsed';
import AdminControl from '../AdminControl';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminPanel = () => {
	const componentClassName = classNames(
		classes.adminPanel
	);

	return (
		<div className={componentClassName}>
			{/*<AdminNavigation />*/}
			<AdminNavigationCollapsed />
			<AdminControl />
		</div>
	);
};

export { AdminPanel };
