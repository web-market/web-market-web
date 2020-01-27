import React, { useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import className from 'classnames';
import classes from './styles/index.scss';
import { MODAL_PORTAL_CLASS } from './consts';
import { AppGlobalContext } from '../../App/store/AppGlobalContext';

const modalPortalNode = document.getElementsByClassName(MODAL_PORTAL_CLASS)[0];

const Modal = (
	{
		render,
		isOpen,
		handleClose,
		size
	}
) => {
	const { handleShowOverlayCloak, setHandleClose, showOverlayCloak } = useContext(AppGlobalContext);

	useEffect(() => {
		if (isOpen) {
			setHandleClose(() => handleClose);
		} else {
			setHandleClose(() => {});
		}

		handleShowOverlayCloak(isOpen);
	}, [isOpen]);

	const componentClassName = className(
		classes.modal,
		{
			[classes.modal_small]: size === 'small',
			[classes.modal_medium]: size === 'medium',
			[classes.modal_large]: size === 'large'
		}
	);

	const ModalComponent = isOpen && showOverlayCloak
		? (
			<>
				<div className={componentClassName}>
					{ render({ handleClose }) }
				</div>
			</>

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
