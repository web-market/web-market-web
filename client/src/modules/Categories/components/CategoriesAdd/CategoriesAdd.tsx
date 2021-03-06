import React, { useContext } from 'react';
import { CategoriesContext } from '../../consts';

import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import CategoriesAddForm from './CategoriesAddForm';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { Button } from '../../../../baseComponents/Button/Button';

const CategoriesAdd = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { addCategory, getCategoriesList } = useContext(CategoriesContext);

	const handleAddCategory = (val) => {
		addCategory(val)
			.then(() => getCategoriesList());
	};

	const rightSectionButtons = (
		<>
			<Button
				label="!!добавить"
				type="primary"
				actionHandler={() => forms.ADD_CATEGORY_FORM.submitForm()}
			/>
		</>
	);

	return (
		<AdminControlContentBox margin={{ tSmall: true, rSmall: true }}>
			<CategoriesAddForm
				addCategory={handleAddCategory}
				rightSectionButtons={rightSectionButtons}
			/>
		</AdminControlContentBox>
	);
};

export { CategoriesAdd };
