import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { FiltersContext } from '../../store';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import FiltersAddFilterGroupValueForm from './FiltersAddFilterGroupValueForm';
import { ADD_FILTER_VALUE_FORM } from '../../consts';

const FiltersAddFilterGroupValue = ({ id }) => {
	const [isPending, setIsPending] = useState(false);
	const { forms } = useContext(FormsGlobalContext);
	const { addFilterGroupValue, filterGroupValueHandler, setFilterGroupHasValue } = useContext(FiltersContext);

	const handleAddFilterValue = (values) => {
		setIsPending(true);

		addFilterGroupValue({ filterId: id, ...values })
			.then(() => {
				return filterGroupValueHandler[id]();
			})
			.then(() => {
				setFilterGroupHasValue(true, id);
				setIsPending(false);
			});
	};

	return (
		<FiltersAddFilterGroupValueForm
			id={id}
			isPending={isPending}
			handleAddFilterValue={handleAddFilterValue}
			handleSubmit={() => forms[`${ADD_FILTER_VALUE_FORM}-${id}`].submitForm()}
		/>
	);
};

FiltersAddFilterGroupValue.propTypes = {
	id: PropTypes.number
};

export { FiltersAddFilterGroupValue };
