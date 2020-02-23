import React from 'react';
import PropTypes from 'prop-types';

import { ADD_FILTER_FORM } from '../../consts';
import FormLayout, {
	FormLayoutFooter,
	FormLayoutHeader,
	FormLayoutItem,
	FormLayoutItemGroup
} from '../../../../../baseComponents/FormLayout';
import Form, { Field } from '../../../../../baseComponents/Form';
import { Textbox } from '../../../../../baseComponents/Form/Adapters';
import ButtonGroup from '../../../../../baseComponents/ButtonGroup';

const FiltersAddForm = (
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
				<FormLayoutHeader title="!!!Добавить фильтр" />
				<FormLayoutItemGroup>
					<FormLayoutItem>
						<Field
							component={Textbox}
							name="name"
							label="!!!Название фильтра в магазине"
							required
							validate={{
								required: true
							}}
						/>
						<Field
							component={Textbox}
							name="displayName"
							label="!!!Название фильтра а админ панеле"
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
							label="!!!Порядок отображения"
							hasTooltip
							toolTipMessage="!!!Место фильтра в общем списке фильтров (например: '5')"
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

FiltersAddForm.propTypes = {
	handleAddFilter: PropTypes.func,
	rightSectionButtons: PropTypes.object
};

export { FiltersAddForm };
