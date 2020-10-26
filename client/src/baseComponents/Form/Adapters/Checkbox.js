import React, { Component } from 'react';
import { Checkbox as CheckboxComponent } from '../../Checkbox/Checkbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Checkbox extends Component {
	render () {
		const {
			label,
			width,
			isValid,
			labelBold,
			hasTooltip,
			toolTipIcon,
			displayInline,
			toolTipMessage
		} = this.props;

		return (
			<FieldBox
				label={label}
				width={width}
				hasBorder={false}
				hasErrors={!isValid}
				labelBold={labelBold}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
				displayInline={displayInline}
				toolTipMessage={toolTipMessage}
			>
				<CheckboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Checkbox };
