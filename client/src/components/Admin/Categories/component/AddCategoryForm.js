import React, { useContext } from 'react';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { CategoriesContext } from '../store';

import Form, { Field } from '../../../../baseComponents/Form';

import {
	Checkbox,
	Textbox,
	Dropdown
} from '../../../../baseComponents/Form/Adapters';

import FormLayout, {
	FormLayoutHeader,
	FormLayoutFooter,
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';

import { ADD_CATEGORY_FORM_NAME } from '../consts';

const AddCategoryForm = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { categories } = useContext(CategoriesContext);

	const addCategory = (val) => {
		console.log(val);
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

	const categoriesItems = () => {
		return categories.map(category => {
			return {
				id: category.id,
				value: category.name
			};
		});
	};

	return (
		<Form
			onSubmit={addCategory}
			name={ADD_CATEGORY_FORM_NAME}
		>
			<FormLayout>
				<FormLayoutHeader title="!!Добавить категорию" />
				<FormLayoutItemGroup>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="age"
							label="!Название категории"
							required
						/>
					</FormLayoutItem>
					<FormLayoutItem>
						<Field
							component={Dropdown}
							name="dropdown"
							label="!Родительская категория"
							items={categoriesItems()}
						/>
					</FormLayoutItem>
					<FormLayoutItem>
						<Field
							component={Checkbox}
							name="isActive"
							label="!Активная категория"
						/>
					</FormLayoutItem>
				</FormLayoutItemGroup>
				<FormLayoutFooter>
					<ButtonGroup rightButtons={rightSectionButtons} />
				</FormLayoutFooter>
			</FormLayout>
		</Form>
	);
};

export default AddCategoryForm;
