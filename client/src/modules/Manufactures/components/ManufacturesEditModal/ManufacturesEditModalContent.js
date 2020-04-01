import React, { useContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import { FormsGlobalContext } from '../../../../App/store/FormsGlobalContext';

import { ModalHeader, ModalContent, ModalFooter } from '../../../../baseComponents/Modal';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';

import ManufacturesEditModalForm from './ManufacturesEditModalForm';

import { ManufacturesContext } from '../../consts';

const ManufacturesEditModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const { forms } = useContext(FormsGlobalContext);
	const { updateManufacture, getManufacture } = useContext(ManufacturesContext);

	useEffect(() => {
		getManufacture(modalData.id)
			.then(({ data }) => setData(data));
	}, []);

	const [data, setData] = useState({});

	const handleEditManufacture = (values) => {
		updateManufacture({ id: modalData.id, ...values })
			.then(() => handleClose());
	};

	const leftButtons = (
		<Button
			actionHandler={handleClose}
			label="!!Закрыть"
			type="secondary"
		/>
	);

	const rightButtons = (
		<Button
			actionHandler={() => forms.EDIT_MANUFACTURE_FORM.submitForm()}
			label="!!Редактировать"
			type="primary"
		/>
	);

	const initialValues = useMemo(() => {
		return {
			name: data.name,
			description: data.description
		};
	}, [data]);

	return (
		<>
			<ModalHeader
				handleClose={handleClose}
				label="ModalName"
			/>
			<ModalContent>
				<ManufacturesEditModalForm
					initialValues={initialValues}
					handleEditManufacture={handleEditManufacture}
				/>
			</ModalContent>
			<ModalFooter>
				<ButtonGroup
					leftButtons={leftButtons}
					rightButtons={rightButtons}
				/>
			</ModalFooter>
		</>
	);
};

ManufacturesEditModalContent.propTypes = {
	modalData: PropTypes.object,
	handleClose: PropTypes.func,
};

export default ManufacturesEditModalContent;
