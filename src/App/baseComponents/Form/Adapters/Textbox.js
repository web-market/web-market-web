import React, { Component } from 'react';
import Texbox from '../../Textbox';

class TextboxAdapter extends Component {
	render () {
		return (
			<Texbox
				{...this.props}
			/>
		);
	}
}

export default TextboxAdapter;
