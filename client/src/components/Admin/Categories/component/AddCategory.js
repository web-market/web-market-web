import React, { useContext, useMemo } from 'react';

import AdminControlContentBox from '../../AdminControlContentBox';
import AddCategoryForm from './AddCategoryForm';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { CategoriesContext } from '../store';
import Button from '../../../../baseComponents/Button';
import { addCategory as addCategoryAPI } from '../api';

const AddCategory = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { categories } = useContext(CategoriesContext);

	const addCategory = (val) => {
		const { isActive, name, parentCategoryId, sortOrder } = val;

		const requestData = {
			isActive,
			name,
			parentCategoryId,
			sortOrder
		};

		addCategoryAPI(requestData)
			.then(e => console.log(e));
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

	const categoriesItems = useMemo(() => {
		return categories.map(category => {
			return {
				id: category.id,
				value: category.name
			};
		});
	}, [categories]);

	return (
		<AdminControlContentBox margin={{ tLarge: true, rLarge: true }}>
			<AddCategoryForm
				addCategory={addCategory}
				categoriesItems={categoriesItems}
				rightSectionButtons={rightSectionButtons}
			/>
		</AdminControlContentBox>
	);
};

export default AddCategory;
