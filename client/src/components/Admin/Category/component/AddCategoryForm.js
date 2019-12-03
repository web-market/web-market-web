import React from 'react';
import Form, { Field } from '../../../../baseComponents/Form';
import Textbox from '../../../../baseComponents/Form/Adapters/Textbox';
import Dropdown from '../../../../baseComponents/Form/Adapters/Dropdown';
import FormLayout, { FormLayoutHeader, FormLayoutFooter, FormLayoutItem, FormLayoutItemGroup } from '../../../../baseComponents/FormLayout';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';

// import PropTypes from 'prop-types';

import { ADD_CATEGORY_FORM_NAME } from '../consts';

const AddCategoryForm = () => {
	const rightSectionButtons = (
		<>
			<Button
				label="!!добавить"
				type="primary"
			/>
		</>
	);

	return (
		<Form
			name={ADD_CATEGORY_FORM_NAME}
		>
			<FormLayout>
				<FormLayoutHeader title="!!! Добавить категорию" />
				<FormLayoutItemGroup>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="age"
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

// NAME.defaultProps = {};

// NAME.propTypes = {};

export default AddCategoryForm;
