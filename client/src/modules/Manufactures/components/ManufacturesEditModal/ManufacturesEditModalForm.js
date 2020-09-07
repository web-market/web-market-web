import React from 'react';
import PropTypes from 'prop-types';

import {
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import { Textarea, Textbox } from '../../../../baseComponents/Form/Adapters';
import Form, { Field } from '../../../../baseComponents/Form';

import { EDIT_MANUFACTURE_FORM } from '../../consts';

const ManufacturesEditModalForm = (
	{
		initialValues,
		handleEditManufacture
	}
) => {
	return (
		<Form
			name={EDIT_MANUFACTURE_FORM}
			initialValues={initialValues}
			onSubmit={handleEditManufacture}
		>
			<FormLayoutItemGroup>
				<FormLayoutItem>
					<Field
						component={Textbox}
						name="name"
						label="!!!Название производителя"
						validate={{
							length: { max: 64 }
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						component={Textarea}
						name="description"
						label="!!!Описание"
						validate={{
							length: { max: 256 }
						}}
					/>
				</FormLayoutItem>
			</FormLayoutItemGroup>
		</Form>
	);
};

ManufacturesEditModalForm.propTypes = {
	initialValues: PropTypes.object,
	handleEditManufacture: PropTypes.func
};

export default ManufacturesEditModalForm;
