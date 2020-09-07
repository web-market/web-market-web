import React from 'react';

import ProductsListContextProvider from './store';
import { AdminControlContentBox } from '../../../components/AdminControlContentBox/AdminControlContentBox';
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
	<ProductsListContextProvider>
		<ProductsList />
	</ProductsListContextProvider>
);

export { ProductsWithProviders };
