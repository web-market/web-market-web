import React, { Component } from 'react';
import { Checkbox as CheckboxComponent } from '../../Checkbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Checkbox extends Component {
	render () {
		const {
			label,
			isValid,
			hasTooltip,
			toolTipIcon,
			displayInline,
			toolTipMessage
		} = this.props;

		return (
			<FieldBox
				label={label}
				hasBorder={false}
				hasErrors={!isValid}
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
