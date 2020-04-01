import React, { useContext } from 'react';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';
import { ManufacturesContext } from '../../consts';

import AdminControlContentBox from '../../../../components/AdminControlContentBox';
import Button from '../../../../baseComponents/Button';

import ManufacturesAddManufactureForm from './ManufacturesAddManufactureForm';


const ManufacturesAddManufacture = () => {
	const { forms } = useContext(FormsGlobalContext);
	const { addManufacture, getManufactures } = useContext(ManufacturesContext);

	const handleAddManufacture = (values) => {
		console.log(values);
		addManufacture(values)
			.then(() => getManufactures());
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
		<AdminControlContentBox
			margin={{ tLarge: true, rLarge: true }}
		>
			<ManufacturesAddManufactureForm
				rightSectionButtons={rightSectionButtons}
				handleAddManufacture={handleAddManufacture}
			/>
		</AdminControlContentBox>
	);
};

export { ManufacturesAddManufacture };
