import React from 'react';

import ProductsContextProvider from './store';
import AdminControlHeader from '../../components/AdminControlHeader';
import AdminControlContentBox from '../../components/AdminControlContentBox';
import { ProductsListWithListContext } from './components/ProductsList/ProductsList';

const Products = () => {
	return (
		<>
			<AdminControlHeader label="!!Товары" />
			<AdminControlContentBox>
				<ProductsListWithListContext />
			</AdminControlContentBox>
		</>
	);
};

const ProductsWithProviders = () => (
	<ProductsContextProvider>
		<Products />
	</ProductsContextProvider>
);

export { ProductsWithProviders };
