import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles/index.scss';
import ClassNames from 'classnames';

const ModalContent = (
	{
		children,
		className
	}
) => {
	const componentClassName = ClassNames(
		classes.modalContent,
		className
	);

	return (
		<div className={componentClassName}>{ children }</div>
	);
};

ModalContent.propTypes = {
	className: PropTypes.string
};

export { ModalContent };
