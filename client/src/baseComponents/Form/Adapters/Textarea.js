import React, { Component } from 'react';
import Textarea from '../../TextArea';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class TextareaAdapter extends Component {
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
				<Textarea
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export default TextareaAdapter;
