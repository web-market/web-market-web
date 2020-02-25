import React from 'react';
import PropTypes from 'prop-types';

import { ModalContent, ModalFooter, ModalHeader } from '../../baseComponents/Modal';
import Button from '../../baseComponents/Button';
import ButtonGroup from '../../baseComponents/ButtonGroup';

const NotificationModalContent = (
	{
		modalData,
		handleClose
	}
) => {
	const {
		content,
		modalTitle,
		handleSubmit: handleSubmitFromModalData,
		rightButtonLabel
	} = modalData;

	const handleSubmit = () => {
		handleSubmitFromModalData()
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
			actionHandler={handleSubmit}
			label={rightButtonLabel}
			type="danger"
		/>
	);

	return (
		<>
			<ModalHeader
				label={modalTitle}
				handleClose={handleClose}
			/>
			<ModalContent>
				{content}
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

NotificationModalContent.propTypes = {
	modalData: PropTypes.object,
	handleClose: PropTypes.func,
	handleSubmit: PropTypes.func
};

export default NotificationModalContent;
