import React, { useContext } from 'react';

import { FiltersContext } from '../../store';
import { AppGlobalContext } from '../../../../App/store/AppGlobalContext';
import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import { FiltersAddFilterGroupForm } from './FiltersAddFilterGroupForm';
import Button from '../../../../baseComponents/Button';

const FiltersAddFilterGroup = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { showNotification } = useContext(AppGlobalContext);
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

	const test = () => {
		showNotification({
			message: '2000',
			type: 'success',
			duration: 2000
		});
	};

	const test1 = () => {
		showNotification({
			message: '5000',
			type: 'success',
			duration: 5000
		});
	};

	return (
		<AdminControlContentBox margin={{ tLarge: true, rLarge: true }}>
			<FiltersAddFilterGroupForm
				handleAddFilter={handleAddFilter}
				rightSectionButtons={rightSectionButtons}
			/>
			<div onClick={test}>2000</div>
			<div onClick={test1}>5000</div>
		</AdminControlContentBox>
	);
};

export { FiltersAddFilterGroup };
