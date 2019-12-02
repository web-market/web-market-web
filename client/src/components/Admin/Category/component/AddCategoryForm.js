import React from 'react';
import Form, { Field } from '../../../../baseComponents/Form';
import Textbox from '../../../../baseComponents/Form/Adapters/Textbox';
import Dropdown from '../../../../baseComponents/Form/Adapters/Dropdown';
// import PropTypes from 'prop-types';

import { ADD_CATEGORY_FORM_NAME } from '../consts';

const AddCategoryForm = () => {
	return (
		<Form
			name={ADD_CATEGORY_FORM_NAME}
		>
			<Field
				component={Textbox}
				name="age"
			/>
			<Field
				component={Dropdown}
				name="dropdown"
			/>
		</Form>
	);
};

// NAME.defaultProps = {};

// NAME.propTypes = {};

export default AddCategoryForm;
