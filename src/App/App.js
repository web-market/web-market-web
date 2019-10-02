import React, { Component } from 'react';

import { Form, Field } from './baseComponents/Form';
import Textbox from './baseComponents/Form/adapters/Textbox';
import Textarea from './baseComponents/Form/adapters/Textarea';
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
						component={Textbox}
						name="age"
						validate={[required, number]}
					/>
					<Field
						component={Textbox}
						name="city"
						validate={[required]}
					/>
					<Field
						component={Textarea}
						name="textarea"
						validate={[required]}
					/>
					<button type="submit">Submit</button>
				</Form>
			</FormContextProvider>
		);
	}
}

export default App;
