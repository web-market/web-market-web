import React from 'react';
import PropTypes from 'prop-types';

import ScrollContainer from '../../../ScrollContainer';

import classes from './styles/index.scss';
import ClassNames from 'classnames';

const ModalContent = (
	{
		children,
		className,
		autoHeight
	}
) => {
	console.log(autoHeight);
	const componentClassName = ClassNames(
		{
			[classes.modalContent_autoHeight]: autoHeight
		},
		classes.modalContent,
		className
	);

	return (
		<div className={componentClassName}>
			<ScrollContainer>
				{ children }
			</ScrollContainer>
		</div>
	);
};

ModalContent.propTypes = {
	autoHeight: PropTypes.bool,
	className: PropTypes.string
};

export { ModalContent };
