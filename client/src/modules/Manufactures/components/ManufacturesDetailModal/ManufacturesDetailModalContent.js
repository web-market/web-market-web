import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ModalContent, ModalFooter, ModalHeader } from '../../../../baseComponents/Modal';
import ButtonGroup from '../../../../baseComponents/ButtonGroup';
import Button from '../../../../baseComponents/Button';

import { ManufacturesContext } from '../../consts';
import { PaddingBox } from '../../../../baseComponents/PaddingBox/PaddingBox';

import classes from './styles/index.scss';

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
					<PaddingBox
						vrSmall
						className={classes.manufacturesDetailModalContent_informationItem}
					>
						<div className={classes.manufacturesDetailModalContent_rowName}>
							!!производитель:
						</div>
						<div>
							{data.name}
						</div>
					</PaddingBox>
				)
			}
			{
				data.description && (
					<PaddingBox
						vrSmall
						className={classes.manufacturesDetailModalContent_informationItem}
					>
						<div className={classes.manufacturesDetailModalContent_rowName}>
							!!описание:
						</div>
						<div>
							{data.description}
						</div>
					</PaddingBox>
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
