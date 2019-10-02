import React, { Component } from 'react';
import TextArea from '../formFields/TextArea';

class TextareaAdapter extends Component {
	render () {
		return (
			<TextArea
				{...this.props}
			/>
		);
	}
}

export default TextareaAdapter;
