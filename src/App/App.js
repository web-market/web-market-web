import React, { Component } from 'react';

import { Form, Field } from './baseComponents/Form';
import TextBox from './baseComponents/Form/adapters/TextBox';
import { required } from './utils/validators';

import { ContextFormProvider } from './baseComponents/Form/store/FormContext';

class App extends Component {
	handleSubmit = (value) => {
		console.log(value);
	};

	render () {
		return (
			<ContextFormProvider>
				<Form
					name="testForm"
					onSubmit={this.handleSubmit}
				>
					<Field
						component={TextBox}
						name="age"
						validate={[required]}
					/>
					<Field
						component={TextBox}
						name="city"
					/>
					<button type="submit">Submit</button>
				</Form>
			</ContextFormProvider>
		);
	}
}

export default App;
