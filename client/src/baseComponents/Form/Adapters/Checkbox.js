import React, { Component } from 'react';
import { Checkbox as CheckboxComponent } from '../../Checkbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Checkbox extends Component {
	render () {
		const {
			label
		} = this.props;

		return (
			<FieldBox
				label={label}
				isValid
				hasBorder={false}
			>
				<CheckboxComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Checkbox };
