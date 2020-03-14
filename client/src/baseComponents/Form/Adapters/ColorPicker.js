import React, { Component } from 'react';
import { ColorPicker as ColorPickerComponent } from '../../ColorPicker';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class ColorPicker extends Component {
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
				<ColorPickerComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { ColorPicker };
