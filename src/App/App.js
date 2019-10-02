import React, { Component } from 'react';

import { Form, Field } from './baseComponents/Form';
import TextBox from './baseComponents/Form/adapters/TextBox';
import { required, number } from './utils/validators';

import { FormContextProvider } from './baseComponents/Form/store/FormContext';

class App extends Component {
	handleSubmit = (value) => {
		console.log(value);
	};

	render () {
		return (
			<FormContextProvider>
				<Form
					name="testForm"
					onSubmit={this.handleSubmit}
				>
					<Field
						component={TextBox}
						name="age"
						validate={[required, number]}
					/>
					<Field
						component={TextBox}
						name="city"
					/>
					<button type="submit">Submit</button>
				</Form>
			</FormContextProvider>
		);
	}
}

export default App;
