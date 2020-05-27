import React, { Component } from 'react';
import { Textarea as TextareaComponent } from '../../Textarea';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Textarea extends Component {
	render () {
		const {
			label,
			width,
			isValid,
			hasFocus,
			required,
			hasBorder,
			labelBold,
			hasTooltip,
			toolTipIcon,
			errorMessages,
			displayInline,
			toolTipMessage,
		} = this.props;

		return (
			<FieldBox
				label={label}
				width={width}
				hasFocus={hasFocus}
				required={required}
				hasErrors={!isValid}
				labelBold={labelBold}
				hasBorder={hasBorder}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				displayInline={displayInline}
				errorMessages={errorMessages}
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
