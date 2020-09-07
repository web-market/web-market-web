import React, { useContext } from 'react';
import { Button } from '../../../../../baseComponents/Button/Button';
import { MarginBox } from '../../../../../baseComponents/MarginBox/MarginBox';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';

const CreateProductFooter = () => {
	const { forms } = useContext(FormsGlobalContext);

	return (
		<MarginBox hrSmall vrTiny>
			<Button
				label="!!Добавить товар"
				type="primary"
				actionHandler={() => forms.CREATE_PRODUCT_FORM.submitForm()}
			/>
		</MarginBox>
	);
};

export { CreateProductFooter };
