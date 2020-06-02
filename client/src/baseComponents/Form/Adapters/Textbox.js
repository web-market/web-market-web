import React, { Component } from 'react';
import { Textbox as TexboxComponent } from '../../Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Textbox extends Component {
	render () {
		const {
			label,
			width,
			isValid,
			required,
			hasFocus,
			hasBorder,
			labelBold,
			hasTooltip,
			toolTipIcon,
			displayInline,
			errorMessages,
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
				<TexboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textbox };
