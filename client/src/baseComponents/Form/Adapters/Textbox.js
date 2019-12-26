import React, { Component } from 'react';
import Texbox from '../../Textbox';

import { FormFieldBox as FieldBox } from '../../FormFieldBox';

class TextboxAdapter extends Component {
	render () {
		const {
			label,
			required,
			isValid
		} = this.props;

		return (
			<FieldBox
				label={label}
				required={required}
				isValid={isValid}
			>
				<Texbox
					{...this.props}
				/>
			</FieldBox>
		);
	}
}

export default TextboxAdapter;
