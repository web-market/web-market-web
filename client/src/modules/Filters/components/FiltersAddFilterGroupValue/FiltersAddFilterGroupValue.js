import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FiltersContext } from '../../store';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import FiltersAddFilterGroupValueForm from './FiltersAddFilterGroupValueForm';

const FiltersAddFilterGroupValue = ({ id }) => {
	const { forms } = useContext(FormsGlobalContext);
	const { addFilterGroupValue } = useContext(FiltersContext);

	const handleAddFilterValue = (values) => {
		addFilterGroupValue({ filterId: id, ...values });
	};

	return (
		<FiltersAddFilterGroupValueForm
			handleAddFilterValue={handleAddFilterValue}
			handleSubmit={() => forms.ADD_FILTER_VALUE_FORM.submitForm()}
		/>
	);
};

FiltersAddFilterGroupValue.propTypes = {
	id: PropTypes.number
};

export { FiltersAddFilterGroupValue };
