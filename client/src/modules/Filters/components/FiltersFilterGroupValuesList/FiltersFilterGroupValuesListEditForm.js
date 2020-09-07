import React from 'react';
import PropTypes from 'prop-types';

import Form, { Field } from '../../../../baseComponents/Form';
import { GridLayoutRow, GridLayout } from '../../../../baseComponents/GridLayout';
import { Textbox } from '../../../../baseComponents/Form/Adapters';

import { EDIT_FILTER_GROUP_VALUE_FORM } from '../../consts';

const FiltersFilterGroupValuesListEditForm = (
	{
		id,
		initialValues,
		handleEditFilterGroupValue
	}
) => {
	return (
		<Form
			resetFormValues={false}
			initialValues={initialValues}
			onSubmit={handleEditFilterGroupValue}
			name={`${EDIT_FILTER_GROUP_VALUE_FORM}-${id}`}
		>
			<GridLayout>
				<GridLayoutRow
					gridColumn={15}
					grid="8-_1-5-_1"
					alignItems="end"
				>
					<Field
						component={Textbox}
						name="value"
					/>
					<Field
						component={Textbox}
						name="sortOrder"
						validate={{
							number: true
						}}
					/>
				</GridLayoutRow>
			</GridLayout>
		</Form>
	);
};

FiltersFilterGroupValuesListEditForm.propTypes = {
	id: PropTypes.number,
	handleEditFilterGroupValue: PropTypes.func,
};

export default FiltersFilterGroupValuesListEditForm;
