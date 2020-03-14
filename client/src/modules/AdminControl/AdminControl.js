import React from 'react';

import { Switch, Route } from 'react-router-dom';
import UserProfile from '../UserProfile';
import Categories from '../Categories';
import Filters from '../Filters';
import MediaProduct from '../MediaProduct';

import classes from './styles/index.scss';
import { URL } from '../consts';

const AdminControl = () => {
	return (
		<div className={classes.adminControl}>
			<Switch>
				<Route path={URL.FILTERS.ROOT} component={Filters} />
				<Route path={URL.USER_PROFILE} component={UserProfile} />
				<Route path={URL.CATEGORY.ROOT} component={Categories} />
				<Route path={URL.MEDIA.PRODUCTS} component={MediaProduct} />
			</Switch>
		</div>
	);
};

export { AdminControl };
