import React from 'react';
import PropTypes from 'prop-types';

import { ADD_FILTER_FORM } from '../../consts';
import {
	FormLayoutFooter,
	FormLayoutHeader,
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import Form, { Field } from '../../../../baseComponents/Form';
import { Textbox } from '../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';

const FiltersAddFilterGroupForm = (
	{
		handleAddFilter,
		rightSectionButtons
	}
) => {
	return (
		<Form
			name={ADD_FILTER_FORM}
			onSubmit={handleAddFilter}
		>
			<FormLayoutHeader title="!!!Добавить группу фильтров" />
			<FormLayoutItemGroup>
				<FormLayoutItem>
					<Field
						component={Textbox}
						name="name"
						label="!!!Имя группы фильтров в админ панеле"
						validate={{
							required: true
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						component={Textbox}
						name="displayName"
						label="!!!Имя группы фильтров в магазине"
						validate={{
							required: true
						}}
					/>
				</FormLayoutItem>
				<FormLayoutItem>
					<Field
						component={Textbox}
						name="sortOrder"
						label="!!!Порядок сортировки"
						hasTooltip
						toolTipMessage="!!!Место группы в общем списке груп фильтров (например: '5')"
						validate={{
							number: true
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

FiltersAddFilterGroupForm.propTypes = {
	handleAddFilter: PropTypes.func,
	rightSectionButtons: PropTypes.object
};

export { FiltersAddFilterGroupForm };
