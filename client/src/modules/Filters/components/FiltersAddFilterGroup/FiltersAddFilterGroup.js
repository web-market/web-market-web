import React, { useContext } from 'react';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import { FiltersAddFilterGroupForm } from './FiltersAddFilterGroupForm';
import { Button } from '../../../../baseComponents/Button/Button';

import { FiltersContext } from '../../consts';

const FiltersAddFilterGroup = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { addFilterGroup, getFiltersList } = useContext(FiltersContext);

	const handleAddFilter = (val) => {
		addFilterGroup(val)
			.then(() => getFiltersList());
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
		<AdminControlContentBox margin={{ tSmall: true, rSmall: true }}>
			<FiltersAddFilterGroupForm
				handleAddFilter={handleAddFilter}
				rightSectionButtons={rightSectionButtons}
			/>
		</AdminControlContentBox>
	);
};

export { FiltersAddFilterGroup };
