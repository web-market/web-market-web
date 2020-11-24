import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Filters from '../../modules/Filters';
import UserProfile from '../../modules/UserProfile';
import Categories from '../../modules/Categories';
import MediaProduct from '../../modules/MediaProduct';
import Manufactures from '../../modules/Manufactures';
import ProductsList from '../../modules/Products/ProductsList';
import CreateProduct from '../../modules/Products/CreateProduct';
import { Stores } from '../../modules/Stores/Stores';
import { StoreDetail } from '../../modules/StoreDetail/StoreDetail';
import { SupplyList } from '../../modules/Supply/SupplyList/SupplyList';
import { SupplyAdd } from '../../modules/Supply/SupplyAdd/SupplyAdd';
import { SupplyDetail } from '../../modules/Supply/SupplyDetail/SupplyDetail';
import { RawProductsWithContext } from '../../modules/RawProducts/RawProducts';

import { URL } from '../consts';

const AdminControlRoutes = () => {
	return (
		<Switch>
			<Route path={URL.FILTERS.ROOT} component={Filters} />
			<Route path={URL.USER_PROFILE} component={UserProfile} />
			<Route path={URL.CATEGORY.ROOT} component={Categories} />
			<Route path={URL.MEDIA.PRODUCTS} component={MediaProduct} />
			<Route path={URL.CATALOG.PRODUCT_MANAGER} component={ProductsList} />
			<Route path={URL.CATALOG.CREATE_PRODUCT} component={CreateProduct} />
			<Route path={URL.STORE.MANUFACTURES} component={Manufactures} />
			<Route path={URL.STORE.STORES} component={Stores} />
			<Route path={URL.STORE_DETAIL.ID} component={StoreDetail} />
			<Route path={URL.SUPPLY.SUPPLY_LIST} component={SupplyList} />
			<Route path={URL.SUPPLY.ADD_SUPPLY} component={SupplyAdd} />
			<Route path={URL.SUPPLY.SUPPLY_DETAIL_ID} component={SupplyDetail} />
			<Route path={URL.STORE.RAW_PRODUCT} component={RawProductsWithContext} />
		</Switch>
	);
};

export default AdminControlRoutes;
