import React, { Component } from 'react';
import TexBox from '../Fields/TextBox';

class TextboxAdapter extends Component {
	render () {
		return (
			<TexBox
				{...this.props}
			/>
		);
	}
}

export default TextboxAdapter;
