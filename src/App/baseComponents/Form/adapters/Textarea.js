import React, { Component } from 'react';
import Textarea from '../formFields/TextArea';

class TextareaAdapter extends Component {
	render () {
		return (
			<Textarea
				{...this.props}
			/>
		);
	}
}

export default TextareaAdapter;
