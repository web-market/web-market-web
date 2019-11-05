import React, { Component } from 'react';
import ImageUploader from '../../ImageUploader';

class TextboxAdapter extends Component {
	render () {
		return (
			<ImageUploader
				{...this.props}
			/>
		);
	}
}

export default TextboxAdapter;
