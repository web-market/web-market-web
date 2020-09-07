import React, { useContext } from 'react';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { ManufacturesContext } from '../../consts';

import { AdminControlContentBox } from '../../../../components/AdminControlContentBox/AdminControlContentBox';
import { Button } from '../../../../baseComponents/Button/Button';

import ManufacturesAddManufactureForm from './ManufacturesAddManufactureForm';


const ManufacturesAddManufacture = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { addManufacture, getAllManufactures } = useContext(ManufacturesContext);

	const handleAddManufacture = (values) => {
		addManufacture(values)
			.then(() => getAllManufactures());
	};

	const rightSectionButtons = (
		<>
			<Button
				label="!!добавить"
				type="primary"
				actionHandler={() => forms.ADD_MANUFACTURE_FORM.submitForm()}
			/>
		</>
	);

	return (
		<AdminControlContentBox>
			<ManufacturesAddManufactureForm
				rightSectionButtons={rightSectionButtons}
				handleAddManufacture={handleAddManufacture}
			/>
		</AdminControlContentBox>
	);
};

export { ManufacturesAddManufacture };
