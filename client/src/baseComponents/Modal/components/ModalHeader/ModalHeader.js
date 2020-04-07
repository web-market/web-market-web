import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon';
import HeaderText from '../../../HeaderText';
import classes from './styles/index.scss';
import { close } from '../../../../icons';

const ModalHeader = (
	{
		label,
		handleClose
	}
	) => {
	const handleCloseModal = useCallback((e) => {
		const { code, keyCode } = e;

		if (code === 'Escape' || keyCode === 27) {
			handleClose();
		}
	}, [handleClose]);

	useEffect(() => {
		window.addEventListener('keyup', handleCloseModal);

		return () => {
			window.removeEventListener('keyup', handleCloseModal);
		};
	}, [handleCloseModal]);

    return (
        <div className={classes.modalHeader}>
            <HeaderText bold>
                { label }
            </HeaderText>
			<Icon
				icon={close}
				className={classes.modalHeader_closeButton}
				onClick={handleClose}
			/>
        </div>
    );
};

ModalHeader.propTypes = {
    label: PropTypes.string,
	handleClose: PropTypes.func.isRequired
};

export { ModalHeader };
