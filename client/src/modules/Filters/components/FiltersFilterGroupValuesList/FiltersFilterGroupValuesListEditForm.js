import React from 'react';
import PropTypes from 'prop-types';

import Form, { Field } from '../../../../baseComponents/Form';
import GridLayout, { GridLayoutRow } from '../../../../baseComponents/GridLayout';
import { Textbox } from '../../../../baseComponents/Form/Adapters';

import { EDIT_FILTER_GROUP_VALUE_FORM } from '../../consts';

const FiltersFilterGroupValuesListEditForm = (
	{
		id,
		handleEditFilterGroupValue
	}
) => {
	return (
		<Form
			name={`${EDIT_FILTER_GROUP_VALUE_FORM}-${id}`}
			onSubmit={handleEditFilterGroupValue}
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
