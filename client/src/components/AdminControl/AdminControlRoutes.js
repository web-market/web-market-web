import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Filters from '../../modules/Filters';
import UserProfile from '../../modules/UserProfile';
import Categories from '../../modules/Categories';
import MediaProduct from '../../modules/MediaProduct';
import Manufactures from '../../modules/Manufactures';
import Products from '../../modules/Products';

import { URL } from '../consts';

const AdminControlRoutes = () => {
	return (
		<Switch>
			<Route path={URL.FILTERS.ROOT} component={Filters} />
			<Route path={URL.USER_PROFILE} component={UserProfile} />
			<Route path={URL.CATEGORY.ROOT} component={Categories} />
			<Route path={URL.MEDIA.PRODUCTS} component={MediaProduct} />
			<Route path={URL.CATALOG.MANUFACTURES} component={Manufactures} />
			<Route path={URL.CATALOG.PRODUCT_MANAGER} component={Products} />
		</Switch>
	);
};

export default AdminControlRoutes;
