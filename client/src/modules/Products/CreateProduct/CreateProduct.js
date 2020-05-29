import React from 'react';

import CreateProductContextProvider from './store';
import AdminControlContentBox, { AdminControlContentBoxFooter } from '../../../components/AdminControlContentBox';
import { CreateProductsHeader } from './components/CreateProductsHeader/CreateProductsHeader';
import { CreateProductForm } from './components/CreateProductForm/CreateProductForm';
import { CreateProductFooter } from './components/CreateProductFooter/CreateProductFooter';

const CreateProduct = () => {
	return (
		<>
			<CreateProductsHeader />
			<AdminControlContentBox>
				<CreateProductForm />
				<AdminControlContentBoxFooter>
					<CreateProductFooter />
				</AdminControlContentBoxFooter>
			</AdminControlContentBox>
		</>
	);
};

const CreateProductWithProviders = () => (
	<CreateProductContextProvider>
		<CreateProduct />
	</CreateProductContextProvider>
);

export { CreateProductWithProviders };
