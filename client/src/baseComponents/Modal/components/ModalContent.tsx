import React from 'react';
import PropTypes from 'prop-types';

import ScrollContainer from '../../ScrollContainer';

import classes from '../styles/index.scss';
import ClassNames from 'classnames';
import { PendingCloak } from '../../PendingCloak/PendingCloak';

const ModalContent = (
	{
		children,
		isPending,
		className,
		autoHeight
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.modalContent_autoHeight]: autoHeight
		},
		classes.modalContent,
		className
	);

	return (
		<div className={componentClassName}>
			{
				isPending && (
					<PendingCloak />
				)
			}
			<ScrollContainer>
				{ children }
			</ScrollContainer>
		</div>
	);
};

ModalContent.propTypes = {
	isPending: PropTypes.bool,
	autoHeight: PropTypes.bool,
	className: PropTypes.string
};

export { ModalContent };
