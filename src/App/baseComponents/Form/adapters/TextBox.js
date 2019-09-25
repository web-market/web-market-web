import React, { Component } from 'react';
import TexBox from '../formFields/TextBox';

class TextBoxAdapter extends Component {
	render () {
		console.log(this.props.isValid);
		return (
			<TexBox
				{...this.props}
			/>
		);
	}
}

export default TextBoxAdapter;
