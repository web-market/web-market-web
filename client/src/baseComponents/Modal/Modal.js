import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import className from 'classnames';
import classes from './styles/index.scss';

import { MODAL_PORTAL } from './const';

const modalPortalNode = document.getElementsByClassName(MODAL_PORTAL)[0];

const Modal = (
	{
		render,
		isOpen,
		handleClose,
		size
	}
) => {
	const componentClassName = className(
		classes.modal,
		{
			[classes.modal_small]: size === 'small',
			[classes.modal_medium]: size === 'medium',
			[classes.modal_large]: size === 'large'
		}
	);

	const ModalComponent = isOpen
		? (
			<div
				className={classes.modal_overlay}
				onClick={handleClose}
			>
				<div className={componentClassName}>
					{ render({ handleClose }) }
				</div>
			</div>
		) : null;

	return createPortal(
		ModalComponent,
		modalPortalNode
	);
};

Modal.defaultProps = {
	isOpen: false,
	size: 'medium',
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
	render: PropTypes.func,
	handleClose: PropTypes.func,
	size: PropTypes.string
};

export { Modal };
