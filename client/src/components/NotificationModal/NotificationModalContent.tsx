import React from 'react';
import PropTypes from 'prop-types';

import { ModalContent, ModalFooter, ModalHeader } from '../../baseComponents/Modal';
import { Button } from '../../baseComponents/Button/Button';
import ButtonGroup from '../../baseComponents/ButtonGroup';

import classes from './styles/index.scss';

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
		rightButtonLabel,
        onSuccess,
        onError,
	} = modalData;

	const handleSubmit = () => {
		handleSubmitFromModalData()
			.then(() => {
                handleClose();
                if (onSuccess) {
                    onSuccess();
                }
            })
            .catch(e => onError(e));
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
			<ModalContent
				autoHeight
				className={classes.notificationModalContent}
			>
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
    onSuccess: PropTypes.func,
	handleSubmit: PropTypes.func
};

export default NotificationModalContent;
