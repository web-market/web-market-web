import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Filters from '../Filters';
import UserProfile from '../UserProfile';
import Categories from '../Categories';
import MediaProduct from '../MediaProduct';
import Manufactures from '../Manufactures';

import { URL } from '../consts';

const AdminControlRoutes = () => {
	return (
		<Switch>
			<Route path={URL.FILTERS.ROOT} component={Filters} />
			<Route path={URL.USER_PROFILE} component={UserProfile} />
			<Route path={URL.CATEGORY.ROOT} component={Categories} />
			<Route path={URL.MEDIA.PRODUCTS} component={MediaProduct} />
			<Route path={URL.CATALOG.MANUFACTURES} component={Manufactures} />
		</Switch>
	);
};

export default AdminControlRoutes;
