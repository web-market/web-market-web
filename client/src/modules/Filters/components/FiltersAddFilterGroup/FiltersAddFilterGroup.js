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

	const success = () => {
		showNotification({
			message: 'success',
			type: 'success',
			duration: 2000
		});
	};

	const warning = () => {
		showNotification({
			message: 'warning',
			type: 'warning',
			duration: 2000
		});
	};

	const danger = () => {
		showNotification({
			message: 'danger',
			type: 'danger',
			duration: 2000
		});
	};

	const info = () => {
		showNotification({
			message: 'info',
			type: 'info',
			duration: 2000
		});
	};

	return (
		<AdminControlContentBox margin={{ tLarge: true, rLarge: true }}>
			<FiltersAddFilterGroupForm
				handleAddFilter={handleAddFilter}
				rightSectionButtons={rightSectionButtons}
			/>
			<div onClick={success}>success</div>
			<div onClick={warning}>warning</div>
			<div onClick={danger}>danger</div>
			<div onClick={info}>info</div>
		</AdminControlContentBox>
	);
};

export { FiltersAddFilterGroup };
