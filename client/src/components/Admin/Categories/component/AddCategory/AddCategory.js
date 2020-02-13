import React, { useContext } from 'react';

import AdminControlContentBox from '../../../AdminControlContentBox';
import AddCategoryForm from './AddCategoryForm';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';
import { CategoriesContext } from '../../store';
import Button from '../../../../../baseComponents/Button';

const AddCategory = () => {
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
				actionHandler={() => forms.addCategoryForm.submitForm()}
			/>
		</>
	);

	return (
		<AdminControlContentBox margin={{ tLarge: true, rLarge: true }}>
			<AddCategoryForm
				addCategory={handleAddCategory}
				rightSectionButtons={rightSectionButtons}
			/>
		</AdminControlContentBox>
	);
};

export { AddCategory };
