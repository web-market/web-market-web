import React, { Component } from 'react';
import { Checkbox as CheckboxComponent } from '../../Checkbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Checkbox extends Component {
	render () {
		const {
			label,
			hasTooltip,
			toolTipMessage,
			toolTipIcon,
		} = this.props;

		return (
			<FieldBox
				label={label}
				isValid
				hasBorder={false}
				hasTooltip={hasTooltip}
				toolTipIcon={toolTipIcon}
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
