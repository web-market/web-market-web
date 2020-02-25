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
			displayInline,
			hasFocus
		} = this.props;

		return (
			<FieldBox
				label={label}
				required={required}
				hasErrors={!isValid}
				displayInline={displayInline}
				errorMessages={errorMessages}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
				hasFocus={hasFocus}
			>
				<TexboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textbox };
