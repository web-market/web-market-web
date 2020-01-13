import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

import classNames from 'classnames';
import classes from './styles/index.scss';

const FormFieldBox = ({
						children,
						label,
						required,
						isValid,
						errorMessages,
						hasBorder,
						hasTooltip,
						toolTipIcon,
						toolTipMessage
}) => {
	const fieldWrapperClassName = classNames(
		{
			[classes.formFieldBox_fieldWrapper__hasError]: !isValid,
			[classes.formFieldBox_fieldWrapper]: hasBorder
		}
	);

	return (
		<>
			<div className={classes.formFieldBox_labelWrapper}>
				<span className={classes.formFieldBox_label}>{label}</span>
				{
					required && (
						<span className={classes.formFieldBox_required}>*</span>
					)
				}
				{
					hasTooltip && (
						<Tooltip
							icon={toolTipIcon}
							message={toolTipMessage}
						/>
					)
				}
			</div>
			<div className={fieldWrapperClassName}>{children}</div>
			{
				!isValid && (
					<div>
						{
							errorMessages.map(message => {
								return (
									<div key={message}>{message}</div>
								);
							})
						}

					</div>
				)
			}
		</>
	);
};

FormFieldBox.defaultProps = {
	hasBorder: true,
	hasTooltip: false
};

FormFieldBox.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
	required: PropTypes.bool,
	isValid: PropTypes.bool,
	hasBorder: PropTypes.bool,
	hasTooltip: PropTypes.bool,
	toolTipIcon: PropTypes.string,
	toolTipMessage: PropTypes.string,
};

export { FormFieldBox };
