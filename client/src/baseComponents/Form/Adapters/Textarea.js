import React, { Component } from 'react';
import { Textarea as TextareaComponent } from '../../Textarea';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Textarea extends Component {
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
				errorMessages={errorMessages}
				displayInline={displayInline}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				toolTipMessage={toolTipMessage}
				hasFocus={hasFocus}
			>
				<TextareaComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textarea };
