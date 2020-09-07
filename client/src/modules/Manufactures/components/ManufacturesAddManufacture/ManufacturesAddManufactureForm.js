import React from 'react';
import PropTypes from 'prop-types';

import { ADD_MANUFACTURE_FORM } from '../../consts';
import {
	FormLayoutFooter,
	FormLayoutHeader,
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import Form, { Field } from '../../../../baseComponents/Form';
import { Textbox, Textarea } from '../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';

const ManufacturesAddManufactureForm = (
	{
		rightSectionButtons,
		handleAddManufacture
	}
) => {
	return (
		<Form
			name={ADD_MANUFACTURE_FORM}
			onSubmit={handleAddManufacture}
		>
			<FormLayoutHeader title="!!!Добавить производителя" />
			<FormLayoutItemGroup>
				<FormLayoutItem>
					<Field
						component={Textbox}
						name="name"
						label="!!!Название производителя"
						validate={{
							required: true,
							length: {
								min: 5,
								max: 64
							}
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						component={Textarea}
						name="description"
						label="!!!Описание"
						validate={{
							length: {
								max: 256
							}
						}}
					/>
				</FormLayoutItem>
			</FormLayoutItemGroup>
			<FormLayoutFooter>
				<ButtonGroup rightButtons={rightSectionButtons} />
			</FormLayoutFooter>
		</Form>
	);
};

ManufacturesAddManufactureForm.propTypes = {
	handleAddManufacture: PropTypes.func,
	rightSectionButtons: PropTypes.object
};

export default ManufacturesAddManufactureForm;
