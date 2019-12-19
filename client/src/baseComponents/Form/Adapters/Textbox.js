import React, { Component } from 'react';
import Texbox from '../../Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class TextboxAdapter extends Component {
	render () {
		const {
			label,
			required,
			isValid,
			initialValue
		} = this.props;

		return (
			<FieldBox
				label={label}
				required={required}
				isValid={isValid}
				initialValue={initialValue}
			>
				<Texbox
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export default TextboxAdapter;
