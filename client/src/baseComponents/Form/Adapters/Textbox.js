import React, { Component } from 'react';
import Texbox from '../../Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class TextboxAdapter extends Component {
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
				<Texbox
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export default TextboxAdapter;
