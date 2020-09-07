import React, { useContext, useState } from 'react';

import Form from '../../../../../baseComponents/Form';
import { GridLayoutRow, GridLayout } from '../../../../../baseComponents/GridLayout';
import { CREATE_PRODUCT_FORM } from '../../consts';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { CreateProductFormGeneralSection } from './CreateProductFormGeneralSection';
import { CreateProductFormDescriptionSection } from './CreateProductFormDescriptionSection';
import { CreateProductFormMediaSection } from './CreateProductFormMediaSection';
import { CreateProductContext } from '../../store/consts';

const CreateProductForm = () => {
	const [description, setDescription] = useState('');
	const { createProduct } = useContext(CreateProductContext);

	const handleCreateProduct = (values) => {
		createProduct({
			...values,
			description
		});
	};

	return (
		<MarginBox small>
			<Form
				onSubmit={handleCreateProduct}
				name={CREATE_PRODUCT_FORM}
			>
				<GridLayout>
					<GridLayoutRow gridColumn={13} grid="6-_1-6">
						<CreateProductFormGeneralSection />
						<CreateProductFormMediaSection />
					</GridLayoutRow>
				</GridLayout>
				<CreateProductFormDescriptionSection setDescription={setDescription} />
			</Form>
		</MarginBox>
	);
};

export { CreateProductForm };
