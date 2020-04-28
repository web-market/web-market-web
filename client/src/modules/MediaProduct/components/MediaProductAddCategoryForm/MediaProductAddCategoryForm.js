import React, { useContext } from 'react';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import { Textbox } from '../../../../baseComponents/Form/Adapters';
import Form, { Field } from '../../../../baseComponents/Form';
import FormLayout, { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';

import { ADD_MEDIA_CATEGORY_FORM, MediaProductContext } from '../../consts';

const MediaProductAddCategoryForm = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { addMediaCategory, getMediaCategories } = useContext(MediaProductContext);

	const handleAddMediaCategory = (values) => {
		addMediaCategory(values)
			.then(() => getMediaCategories());
	};

	return (
		<>
			<Form
				name={ADD_MEDIA_CATEGORY_FORM}
				onSubmit={handleAddMediaCategory}
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
								label="!!!Имя категории"
								required
								validate={{
									required: true,
									length: {
										max: 64
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
