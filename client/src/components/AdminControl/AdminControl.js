import React from 'react';

import { Switch, Route } from 'react-router-dom';
import UserProfile from '../UserProfile';
import Categories from '../Categories';
import Filters from '../Filters';

import classNames from 'classnames';
import classes from './styles/index.scss';
import { URL } from '../consts';

const AdminControl = () => {
	const componentClassName = classNames(
		classes.adminControl
	);

	return (
		<div className={componentClassName}>
			<Switch>
				<Route path={URL.USER_PROFILE} component={UserProfile} />
				<Route path={URL.CATEGORY.ROOT} component={Categories} />
				<Route path={URL.FILTERS.ROOT} component={Filters} />
			</Switch>
		</div>
	);
};

export { AdminControl };
