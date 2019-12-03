import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';
import { isUndefined } from '../../utils';

const ButtonGroup = ({
	className,
	singleButton,
	leftButtons,
	rightButtons,
}) => {
	const hasSingleButton = !isUndefined(singleButton);
	const hasLeftButtons = !isUndefined(leftButtons);
	const hasRightButtons = !isUndefined(rightButtons);

	const buttonGroupRowClassName = classNames(
		classes.buttonGroupRow,
		{
			[classes.buttonGroupRow_onlyRight]: hasRightButtons && !hasLeftButtons
		}
	);

	return (
		<div className={className}>
			{
				hasSingleButton && (
					<div>{ singleButton }</div>
				)
			}
			{(hasLeftButtons || hasRightButtons) && (
				<div className={buttonGroupRowClassName}>
					{
						hasLeftButtons && (
							<div className={classes.leftButtons}>{ leftButtons }</div>
						)
					}
					{
						hasRightButtons && (
							<div className={classes.rightButtons}> { rightButtons }</div>
						)
					}
				</div>
			)}
		</div>
	);
};

ButtonGroup.defaultProps = {
	className: ''
};

ButtonGroup.propTypes = {
	singleButton: PropTypes.object,
	leftButtons: PropTypes.object,
	rightButtons: PropTypes.object,
	className: PropTypes.string
};

export { ButtonGroup };
