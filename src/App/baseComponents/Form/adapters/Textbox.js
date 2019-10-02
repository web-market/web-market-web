import React, { Component } from 'react';
import TexBox from '../formFields/TextBox';

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
