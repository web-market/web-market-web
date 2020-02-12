import React from 'react';

import PropTypes from 'prop-types';
import Classnames from 'classnames';
import classes from '../../styles/index.scss';

const Icon = ({ icon, className, onClick }) => {
	const componentClassName = Classnames(
		className,
		icon,
		classes.ti
	);

	return (
		<span
			className={componentClassName}
			onClick={onClick}
		>
		</span>
	);
};

Icon.defaultProps = {
	onClick: () => {}
};

Icon.propTypes = {
	icon: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func
};

export { Icon };
