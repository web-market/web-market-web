import React, { Component } from 'react';
import TexBox from '../formFields/TextBox';

class TextBoxAdapter extends Component {
	render () {
		return (
			<TexBox
				{...this.props}
			/>
		);
	}
}

export default TextBoxAdapter;
