import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '../Tooltip';

import classNames from 'classnames';
import classes from './styles/index.scss';
import { Typography } from '../Typography/Typography';

const FormFieldBox = (
	{
		children,
		label,
		labelBold,
		required,
		hasErrors,
		errorMessages,
		hasBorder,
		hasTooltip,
		toolTipIcon,
		toolTipMessage,
		hasFocus,
		displayInline,
		width
	}
) => {
	const componentClassName = classNames(
		{
			[classes.formFieldBox_displayInline]: displayInline
		}
	);

	const fieldWrapperClassName = classNames(
		{
			[classes.formFieldBox_fieldWrapper__hasError]: hasErrors,
			[classes.formFieldBox_fieldWrapper]: hasBorder,
			[classes.formFieldBox_fieldWrapper__hasFocus]: hasFocus,
			[classes.formFieldBox_fieldWrapper__displayInline]: displayInline
		}
	);

	const getErrors = () => {
		return errorMessages?.map(message => {
			return (
				<div key={message}>{message}</div>
			);
		});
	};

	return (
		<div
			style={{ width }}
			className={componentClassName}
		>
			{
				label && (
					<div className={classes.formFieldBox_labelWrapper}>
						<div>
							<Typography bold={labelBold} variant="14">{label}</Typography>
							{
								required && (
									<span className={classes.formFieldBox_required}>*</span>
								)
							}
						</div>
						{
							hasTooltip && (
								<Tooltip
									position="top-left"
									icon={toolTipIcon}
									message={toolTipMessage}
									tooltipClassName={classes.formFieldBox_tooltip}
									tooltipIconClassName={classes.formFieldBox_tooltipIcon}
								/>
							)
						}
					</div>
				)
			}
			<div className={fieldWrapperClassName}>
				{
					hasErrors && (
						<Tooltip
							icon={toolTipIcon}
							message={getErrors()}
							tooltipClassName={classes.formFieldBox_errorTooltip}
							tooltipIconClassName={classes.formFieldBox_errorTooltipIcon}
							position="left"
							type="danger"
						/>
					)
				}
				{children}
			</div>
		</div>
	);
};

FormFieldBox.defaultProps = {
	hasBorder: true,
	hasFocus: false,
	hasTooltip: false,
	labelBold: '400',
	displayInline: false,
};

FormFieldBox.propTypes = {
	label: PropTypes.string,
	children: PropTypes.object.isRequired,
	required: PropTypes.bool,
	hasErrors: PropTypes.bool,
	hasBorder: PropTypes.bool,
	hasFocus: PropTypes.bool,
	hasTooltip: PropTypes.bool,
	displayInline: PropTypes.bool,
	labelBold: PropTypes.string,
	toolTipIcon: PropTypes.string,
	width: PropTypes.string,
	toolTipMessage: PropTypes.string,
};

export { FormFieldBox };
