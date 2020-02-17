import React, { Component } from 'react';
import { AjaxDropdown as AjaxDropdownComponent } from '../../AjaxDropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class AjaxDropdown extends Component {
	render () {
		const {
			label,
			required,
			isValid,
			errorMessages,
			hasTooltip,
			toolTipMessage,
			toolTipIcon,
			hasFocus
		} = this.props;

		return (
			<FieldBox
				label={label}
				required={required}
				hasErrors={!isValid}
				errorMessages={errorMessages}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
				hasFocus={hasFocus}
			>
				<AjaxDropdownComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { AjaxDropdown };
