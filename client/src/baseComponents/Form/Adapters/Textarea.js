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
			>
				<TextareaComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textarea };
