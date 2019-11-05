import React, { Component } from 'react';
import Textarea from '../../TextArea';

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
