import React from 'react';

import ProductsContextProvider from './store';
import AdminControlContentBox from '../../../components/AdminControlContentBox';
import { ProductsListWithListContext } from './components/ProductsList/ProductsList';
import { ProductsHeader } from './components/ProductsHeader/ProductsHeader';

const ProductsList = () => {
	return (
		<>
			<ProductsHeader />
			<AdminControlContentBox>
				<ProductsListWithListContext />
			</AdminControlContentBox>
		</>
	);
};

const ProductsWithProviders = () => (
	<ProductsContextProvider>
		<ProductsList />
	</ProductsContextProvider>
);

export { ProductsWithProviders };
