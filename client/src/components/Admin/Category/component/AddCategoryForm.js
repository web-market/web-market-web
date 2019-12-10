import React, { useContext } from 'react';
import { AppContext as GlobalContext } from '../../../../App/store/AppContext';

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
import { number, required } from '../../../../utils/validators';

const AddCategoryForm = () => {
	const { forms } = useContext(GlobalContext);

	const addCategory = (val) => {

	};

	const remoteSubmit = () => {
		forms.addCategoryForm.submitForm();
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
		<>
		<Form
			onSubmit={addCategory}
			name={ADD_CATEGORY_FORM_NAME}
		>
			<Field
				component={Textbox}
				name="age"
				label="!Название категории"
				required
				validate={[number, required]}
			/>
			<Field
				component={Dropdown}
				name="dropdown"
			/>
			<Field
				component={Dropdown}
				name="dropeqweqwdown"
			/>
			<Field
				component={Dropdown}
				name="test"
			/>
			<FormLayoutFooter>
				<ButtonGroup rightButtons={rightSectionButtons} />
			</FormLayoutFooter>
		</Form>
			{/*<Form*/}
				{/*onSubmit={addCategory}*/}
				{/*name="TEST_FORM"*/}
			{/*>*/}
				{/*<FormLayout>*/}
					{/*<FormLayoutHeader title="!!! Тестовая форма" />*/}
					{/*<FormLayoutItemGroup>*/}
						{/*<FormLayoutItem>*/}
							{/*<Field*/}
								{/*component={Textbox}*/}
								{/*name="age"*/}
								{/*label="!Название категории"*/}
								{/*required*/}
								{/*validate={[number]}*/}
							{/*/>*/}
						{/*</FormLayoutItem>*/}
						{/*<FormLayoutItem>*/}
							{/*<Field*/}
								{/*component={Dropdown}*/}
								{/*name="dropdown"*/}
							{/*/>*/}
						{/*</FormLayoutItem>*/}
					{/*</FormLayoutItemGroup>*/}
					{/*<FormLayoutFooter>*/}
						{/*<ButtonGroup rightButtons={rightSectionButtons} />*/}
					{/*</FormLayoutFooter>*/}
				{/*</FormLayout>*/}
			{/*</Form>*/}
		</>
	);
};

export default AddCategoryForm;
