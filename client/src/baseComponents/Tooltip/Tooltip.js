import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { exclamationCircle } from '../../icons';

import classses from './styles/index.scss';

const Tooltip = ({ icon, message }) => {
	const onTooltipIconClick = () => {
		console.log(message);
	};

	return (
		<div className={classses.tooltip}>
			<Icon
				onClick={onTooltipIconClick}
				icon={icon}
			/>
		</div>
	);
};

Tooltip.defaultProps = {
	icon: exclamationCircle
};

Tooltip.propTypes = {
	icon: PropTypes.string,
	message: PropTypes.string
};

export { Tooltip };
