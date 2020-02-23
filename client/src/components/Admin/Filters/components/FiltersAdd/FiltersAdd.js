import React, { useContext } from 'react';
import { FiltersContext } from '../../store';

import AdminControlContentBox from '../../../AdminControlContentBox';
import { FiltersAddForm } from './FiltersAddForm';
import Button from '../../../../../baseComponents/Button';
import { FormsGlobalContext } from '../../../../../App/store/FormsGlobalContext';

const FiltersAdd = () => {
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
			<FiltersAddForm
				handleAddFilter={handleAddFilter}
				rightSectionButtons={rightSectionButtons}
			/>
		</AdminControlContentBox>
	);
};

export { FiltersAdd };
