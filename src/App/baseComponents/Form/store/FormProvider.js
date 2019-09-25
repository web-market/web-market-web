import React, { Component } from 'react';
import { Form } from '../Form';

class FormProviderComponent extends Component {
	render () {
		return (
			<Form {...this.props} />
		);
	}
}

export { FormProviderComponent };
