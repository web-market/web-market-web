import React from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../../baseComponents/PaddingBox/PaddingBox';

import classNames from 'classnames';
import classes from './styles/index.scss';

const AdminControlContentHeader = (
	{
		padding,
		children,
		className
	}
) => {
	const componentClass = classNames(
		classes.adminControlContentHeader,
		className
	);

	const ChildComponent = () => children;

	return (
		<PaddingBox
			{...padding}
			className={componentClass}
		>
			<ChildComponent />
		</PaddingBox>
	);
};

AdminControlContentHeader.defaultProps = {
	className: '',
};

AdminControlContentHeader.propTypes = {
	children: PropTypes.any,
	padding: PropTypes.object,
	className: PropTypes.string
};

export { AdminControlContentHeader };
