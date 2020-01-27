import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon';
import HeaderText from '../../../HeaderText';
import classes from './styles/index.scss';
import { close } from '../../../../icons';

const ModalHeader = (
	{
		handleClose,
		label
	}
	) => {
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
    label: PropTypes.string.isRequired,
	handleClose: PropTypes.func.isRequired
};

export { ModalHeader };
