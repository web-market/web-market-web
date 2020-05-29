import React, { useContext } from 'react';

import Form from '../../../../../baseComponents/Form';
import GridLayout, { GridLayoutRow } from '../../../../../baseComponents/GridLayout';
import { CREATE_PRODUCT_FORM } from '../../consts';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { CreateProductFormGeneralSection } from './CreateProductFormGeneralSection';
import { CreateProductFormDescriptionSection } from './CreateProductFormDescriptionSection';
import { CreateProductFormMediaSection } from './CreateProductFormMediaSection';
import { CreateProductContext } from '../../store/consts';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';

const CreateProductForm = () => {
	const { createProduct } = useContext(CreateProductContext);

	const handleCreateProduct = (values) => {
		createProduct(values);
	};

	return (
		<MarginBox small>
			<Form
				onSubmit={handleCreateProduct}
				name={CREATE_PRODUCT_FORM}
			>
				<GridLayout>
					<GridLayoutRow gridColumn={17} grid="5-_1-5-_1-5">
						<CreateProductFormGeneralSection />
						<CreateProductFormDescriptionSection />
						<CreateProductFormMediaSection />
					</GridLayoutRow>
				</GridLayout>
			</Form>
		</MarginBox>
	);
};

export { CreateProductForm };
