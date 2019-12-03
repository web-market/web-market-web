import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const FormFieldBox = ({ children, label, required, isValid }) => {
	const fieldWrapperClassName = classNames(
		classes.formFieldBox_fieldWrapper,
		{
			[classes.formFieldBox_fieldWrapper__hasError]: !isValid
		}
	);

	return (
		<>
			<div className={classes.formFieldBox_label}>
				{ label }
				{
					required && (
						<span className={classes.formFieldBox_required}>*</span>
					)
				}
			</div>
			<div className={fieldWrapperClassName}>{ children }</div>
		</>
	);
};

FormFieldBox.propTypes = {
	label: PropTypes.string.isRequired,
	children: PropTypes.object.isRequired,
	required: PropTypes.bool,
	isValid: PropTypes.bool,
};

export { FormFieldBox };
