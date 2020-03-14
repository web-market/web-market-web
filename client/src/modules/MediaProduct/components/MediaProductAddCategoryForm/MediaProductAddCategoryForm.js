import React, { useContext } from 'react';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import { Textbox, ColorPicker } from '../../../../baseComponents/Form/Adapters';
import Form, { Field } from '../../../../baseComponents/Form';
import FormLayout, { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';

import { ADD_MEDIA_CATEGORY_FORM } from '../../consts';

const MediaProductAddCategoryForm = () => {
	const { forms } = useContext(FormsGlobalContext);

	const handleUpdateFilter = (values) => {
		console.log(values);
	};

	return (
		<>
			<Form
				name={ADD_MEDIA_CATEGORY_FORM}
				onSubmit={handleUpdateFilter}
			>
				<FormLayout>
					<FormLayoutItemGroup padding={{
							vrNormal: true
						}}
					>
						<FormLayoutItem>
							<Field
								component={Textbox}
								name="name"
								label="!!!Имя каталога"
								required
								validate={{
									required: true
								}}
							/>
						</FormLayoutItem>
						<FormLayoutItem>
							<Field
								defaultColor="#008eae"
								component={ColorPicker}
								name="color"
								label="!!!Цвет категории"
								validate={{
									length: {
										equal: 7,
									}
								}}
							/>
						</FormLayoutItem>
					</FormLayoutItemGroup>
				</FormLayout>
			</Form>
			<ButtonGroup
				rightButtons={(
					<Button
						type="primary"
						label="!добавить"
						actionHandler={() => forms.ADD_MEDIA_CATEGORY_FORM.submitForm()}
					/>
				)}
			/>
		</>
	);
};

export { MediaProductAddCategoryForm };
