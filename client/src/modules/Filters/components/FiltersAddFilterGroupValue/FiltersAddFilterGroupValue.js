import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FiltersContext } from '../../store';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import FiltersAddFilterGroupValueForm from './FiltersAddFilterGroupValueForm';
import { ADD_FILTER_VALUE_FORM } from '../../consts';

const FiltersAddFilterGroupValue = ({ id }) => {
	const { forms } = useContext(FormsGlobalContext);
	const { addFilterGroupValue, filterGroupValueHandler, setFilterGroupHasValue } = useContext(FiltersContext);

	const handleAddFilterValue = (values) => {
		addFilterGroupValue({ filterId: id, ...values })
			.then(() => {
				filterGroupValueHandler[id]();
				setFilterGroupHasValue(true, id);
			});
	};

	return (
		<FiltersAddFilterGroupValueForm
			id={id}
			handleAddFilterValue={handleAddFilterValue}
			handleSubmit={() => forms[`${ADD_FILTER_VALUE_FORM}-${id}`].submitForm()}
		/>
	);
};

FiltersAddFilterGroupValue.propTypes = {
	id: PropTypes.number
};

export { FiltersAddFilterGroupValue };
