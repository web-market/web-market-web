import React, { useContext } from 'react';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import { Textbox } from '../../../../baseComponents/Form/Adapters';
import Form, { Field } from '../../../../baseComponents/Form';
import { FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';

import { ADD_MEDIA_CATEGORY_FORM } from '../../consts';
import { MediaProductContext } from '../../store/consts';

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
				<FormLayoutItemGroup padding={{
					vrNormal: true
				}}
				>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="name"
							label="!!!Имя категории"
							validate={{
								required: true,
								length: {
									max: 64
								}
							}}
						/>
					</FormLayoutItem>
				</FormLayoutItemGroup>
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
