import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import { Button } from '../../../../baseComponents/Button/Button';

import { ManufacturesContext } from '../../consts';
import { PreviewField } from '../../../../baseComponents/PreviewField/PreviewField';

const ManufacturesDetailModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const { getManufacture } = useContext(ManufacturesContext);
	const [data, setData] = useState({ name: null, description: null });

	useEffect(() => {
		getManufacture(modalData.id)
			.then(({ data }) => setData(data));
	}, []);

	return (
	<>
		<ModalHeader
			handleClose={handleClose}
			label={`!производитель: ${data.name}`}
		/>
		<ModalContent>
			{
				data.name && (
					<PreviewField
						alignment="horizontal"
						label="!!производитель:"
						value={data.name}
					/>
				)
			}
			{
				data.description && (
					<PreviewField
						alignment="horizontal"
						label="!!описание:"
						value={data.description}
					/>
				)
			}
		</ModalContent>
		<ModalFooter>
			<ButtonGroup
				rightButtons={(
					<Button
						actionHandler={handleClose}
						label="!!Закрыть"
						type="secondary"
					/>
				)}
			/>
		</ModalFooter>
	</>
	);
};

ManufacturesDetailModalContent.propTypes = {
	modalData: PropTypes.object,
	handleClose: PropTypes.func,
};

export default ManufacturesDetailModalContent;
