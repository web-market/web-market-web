import React, { Component } from 'react';
import { Dropdown as DropdownComponent } from '../../Dropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Dropdown extends Component {
	render () {
		const {
			label,
			required,
			isValid,
			errorMessages
		} = this.props;

		return (
			<FieldBox
				label={label}
				required={required}
				isValid={isValid}
				errorMessages={errorMessages}
			>
				<DropdownComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Dropdown };
