import React, { Component } from 'react';
import { ContextFormProvider } from './FormContext';
import { Form } from './Form';

class FormProviderComponent extends Component {
	render () {
		return (
			<ContextFormProvider>
				<Form {...this.props} />
			</ContextFormProvider>
		);
	}
}

export { FormProviderComponent };
