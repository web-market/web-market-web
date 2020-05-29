import React from 'react';

import CreateProductsContext from './store';
import AdminControlContentBox from '../../../components/AdminControlContentBox';
import { CreateProductsHeader } from './components/CreateProductsHeader/CreateProductsHeader';

const CreateProduct = () => {
	return (
		<>
			<CreateProductsHeader />
			<AdminControlContentBox>
				{/*<ProductsListWithListContext />*/}
			</AdminControlContentBox>
		</>
	);
};

const CreateProductWithProviders = () => (
	<CreateProductsContext>
		<CreateProduct />
	</CreateProductsContext>
);

export { CreateProductWithProviders };
