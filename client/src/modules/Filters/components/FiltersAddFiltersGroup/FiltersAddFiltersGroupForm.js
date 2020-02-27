import React from 'react';
import PropTypes from 'prop-types';

import { ADD_FILTER_FORM } from '../../consts';
import FormLayout, {
	FormLayoutFooter,
	FormLayoutHeader,
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../baseComponents/FormLayout';
import Form, { Field } from '../../../../baseComponents/Form';
import { Textbox } from '../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';

const FiltersAddFiltersGroupForm = (
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
			<FormLayout>
				<FormLayoutHeader title="!!!Добавить группу фильтра" />
				<FormLayoutItemGroup>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="name"
							label="!!!Имя группы фильтра в админ панеле"
							required
							validate={{
								required: true
							}}
						/>
					</FormLayoutItem>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="displayName"
							label="!!!Имя группы фильтра в магазине"
							required
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
			</FormLayout>
		</Form>
	);
};

FiltersAddFiltersGroupForm.propTypes = {
	handleAddFilter: PropTypes.func,
	rightSectionButtons: PropTypes.object
};

export { FiltersAddFiltersGroupForm };
