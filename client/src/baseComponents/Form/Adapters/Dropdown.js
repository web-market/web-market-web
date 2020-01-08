import React, { Component } from 'react';
import Dropdown from '../../Dropdown';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class DropdownAdapter extends Component {
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
				<Dropdown
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export default DropdownAdapter;
