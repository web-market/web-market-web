import React, { Component } from 'react';

import { Form, Field } from './components/baseComponents/Form';
import TextBox from './components/baseComponents/Form/adapters/TextBox';
import { required } from './utils/validators';

class App extends Component {
	handleSubmit = (value) => {
		console.log(value);
	};

	render () {
		return (
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
		);
	}
}

export default App;
