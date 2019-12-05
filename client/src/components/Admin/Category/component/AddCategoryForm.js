import React from 'react';
import Form, { Field } from '../../../../baseComponents/Form';
import Textbox from '../../../../baseComponents/Form/Adapters/Textbox';
import Dropdown from '../../../../baseComponents/Form/Adapters/Dropdown';
import FormLayout, {
	FormLayoutHeader,
	FormLayoutFooter,
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';

import { ADD_CATEGORY_FORM_NAME } from '../consts';
import { number } from '../../../../utils/validators';

const AddCategoryForm = () => {
	const addCategory = (val) => {
		console.log(val);
	};

	const remoteSubmit = () => {
		// call from global context
	};

	const rightSectionButtons = (
		<>
			<Button
				label="!!добавить"
				type="primary"
				actionHandler={remoteSubmit}
			/>
		</>
	);

	return (
		<Form
			onSubmit={addCategory}
			name={ADD_CATEGORY_FORM_NAME}
		>
			<FormLayout>
				<FormLayoutHeader title="!!! Добавить категорию" />
				<FormLayoutItemGroup>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="age"
							label="!Название категории"
							required
							validate={[number]}
						/>
					</FormLayoutItem>
					<FormLayoutItem>
						<Field
							component={Dropdown}
							name="dropdown"
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
