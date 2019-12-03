import React, { Component } from 'react';
import Texbox from '../../Textbox';

import { FormFieldBox as Box } from '../../FormFieldBox';

class TextboxAdapter extends Component {
	render () {
		const {
			label,
			required,
			isValid
		} = this.props;

		return (
			<Box
				label={label}
				required={required}
				isValid={isValid}
			>
				<Texbox
					{...this.props}
				/>
			</Box>
		);
	}
}

export default TextboxAdapter;
