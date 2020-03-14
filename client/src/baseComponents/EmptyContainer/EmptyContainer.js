import React from 'react';
import PropTypes from 'prop-types';

import { PaddingBox } from '../PaddingBox/PaddingBox';

import classes from './styles/index.scss';
import ClassNames from 'classnames';

const EmptyContainer = (
	{
		children,
		hasCenteredContent
	}
) => {
	const componentClassName = ClassNames(
		{
			[classes.emptyContainer_hasCenteredContent]: hasCenteredContent
		},
		classes.emptyContainer
	);

	return (
		<PaddingBox small>
			<div className={componentClassName}>{ children }</div>
		</PaddingBox>
	);
};

EmptyContainer.defaultProps = {
	hasCenteredContent: false
};

EmptyContainer.propTypes = {
	children: PropTypes.any,
	hasCenteredContent: PropTypes.bool
};

export { EmptyContainer };
