import React, { Component } from 'react';
import { Textbox as TexboxComponent } from '../../Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Textbox extends Component {
	render () {
		const {
			label,
			required,
			isValid,
			errorMessages,
			hasTooltip,
			toolTipMessage,
			toolTipIcon,
		} = this.props;

		return (
			<FieldBox
				label={label}
				required={required}
				isValid={isValid}
				errorMessages={errorMessages}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
			>
				<TexboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textbox };
