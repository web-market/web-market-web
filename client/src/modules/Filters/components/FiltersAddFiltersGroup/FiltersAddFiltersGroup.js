import React, { useContext } from 'react';

import { FiltersContext } from '../../store';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import { FiltersAddFiltersGroupForm } from './FiltersAddFiltersGroupForm';
import Button from '../../../../baseComponents/Button';

const FiltersAddFiltersGroup = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { addFilter } = useContext(FiltersContext);

	const handleAddFilter = (val) => {
		addFilter(val);
	};

	const rightSectionButtons = (
		<>
			<Button
				label="!!добавить"
				type="primary"
				actionHandler={() => forms.ADD_FILTER_FORM.submitForm()}
			/>
		</>
	);

	return (
		<AdminControlContentBox margin={{ tLarge: true, rLarge: true }}>
			<FiltersAddFiltersGroupForm
				handleAddFilter={handleAddFilter}
				rightSectionButtons={rightSectionButtons}
			/>
		</AdminControlContentBox>
	);
};

export { FiltersAddFiltersGroup };
