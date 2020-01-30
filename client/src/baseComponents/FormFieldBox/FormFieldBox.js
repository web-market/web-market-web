import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

import classNames from 'classnames';
import classes from './styles/index.scss';

const FormFieldBox = (
	{
		children,
		label,
		required,
		hasErrors,
		errorMessages,
		hasBorder,
		hasTooltip,
		toolTipIcon,
		toolTipMessage,
		hasFocus
	}
) => {
	const fieldWrapperClassName = classNames(
		{
			[classes.formFieldBox_fieldWrapper__hasError]: hasErrors,
			[classes.formFieldBox_fieldWrapper]: hasBorder,
			[classes.formFieldBox_fieldWrapper__hasFocus]: hasFocus
		}
	);

	const getErrors = () => {
		return errorMessages.map(message => {
			return (
				<div key={message}>{message}</div>
			);
		});
	};

	return (
		<>
			<div className={classes.formFieldBox_labelWrapper}>
				{label}
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
							tooltipClassName={classes.formFieldBox_tooltip}
						/>
					)
				}
			</div>
			<div className={fieldWrapperClassName}>
				{
					hasErrors && (
						<Tooltip
							icon={toolTipIcon}
							message={getErrors()}
							tooltipClassName={classes.formFieldBox_ErrorTooltip}
							position="left"
							type="danger"
						/>
					)
				}
				{children}
			</div>
		</>
	);
};

FormFieldBox.defaultProps = {
	hasBorder: true,
	hasTooltip: false,
	hasFocus: false,
};

FormFieldBox.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
	required: PropTypes.bool,
	hasErrors: PropTypes.bool,
	hasBorder: PropTypes.bool,
	hasFocus: PropTypes.bool,
	hasTooltip: PropTypes.bool,
	toolTipIcon: PropTypes.string,
	toolTipMessage: PropTypes.string,
};

export { FormFieldBox };
