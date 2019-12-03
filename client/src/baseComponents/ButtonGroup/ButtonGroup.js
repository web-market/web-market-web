import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const ButtonGroup = ({
	className,
	singleButton,
	leftButtons,
	rightButtons,
}) => {
	const hasSingleButton = singleButton.length !== 0;
	const hasLeftButtons = leftButtons.length !== 0;
	const hasRightButtons = rightButtons.length !== 0;

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
							<div className={classes.rightButtons}>{ leftButtons }</div>
						)
					}
					{
						hasRightButtons && (
							<div className={classes.leftButtons}> { rightButtons }</div>
						)
					}
				</div>
			)}
		</div>
	);
};

ButtonGroup.defaultProps = {
	singleButton: [],
	leftButtons: [],
	rightButtons: [],
	className: ''
};

ButtonGroup.propTypes = {
	singleButton: PropTypes.array,
	leftButtons: PropTypes.array,
	rightButtons: PropTypes.array,
	className: PropTypes.string
};

export { ButtonGroup };
