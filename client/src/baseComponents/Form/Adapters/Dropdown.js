import React, { Component } from 'react';
import { Dropdown as DropdownComponent } from '../../Dropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Dropdown extends Component {
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
			errorMessages,
			displayInline,
			toolTipMessage
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
				errorMessages={errorMessages}
				displayInline={displayInline}
				toolTipMessage={toolTipMessage}
			>
				<DropdownComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Dropdown };
