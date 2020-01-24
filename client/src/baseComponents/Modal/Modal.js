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
		isOpen
	}
) => {
	const componentClassName = className(
		classes.modal
	);

	const ModalComponent = isOpen
		? (
			<div className={componentClassName}>
				{ render() }
			</div>
		) : null;

	return createPortal(
		ModalComponent,
		modalPortalNode
	);
};

Modal.defaultProps = {
	isOpen: false
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
	render: PropTypes.func
};

export { Modal };
