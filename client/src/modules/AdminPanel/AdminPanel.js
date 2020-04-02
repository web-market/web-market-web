import React from 'react';

import AdminNav from '../AdminNav';
import AdminControl from '../AdminControl';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminPanel = () => {
	const componentClassName = classNames(
		classes.adminPanel
	);

	return (
		<div className={componentClassName}>
			<AdminNav />
			<AdminControl />
		</div>
	);
};

export { AdminPanel };
