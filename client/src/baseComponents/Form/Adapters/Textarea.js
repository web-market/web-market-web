import React, { Component } from 'react';
import { Textarea as TextareaComponent } from '../../Textarea';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class Textarea extends Component {
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
				<TextareaComponent
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export { Textarea };
