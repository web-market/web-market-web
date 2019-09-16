import React, { Component } from 'react';

import { Form, Field } from './components/baseComponents/Form';
import TextBox from './components/baseComponents/Form/adapters/TextBox';

class App extends Component {
	handleSubmit = (value) => {
		console.log(value);
	};

	render () {
		return (
			<>
				<Form onSubmit={this.handleSubmit}>
					<Field
						component={TextBox}
						name="age"
					/>
					<Field
						component={TextBox}
						name="city"
					/>
					<button type="submit">Submit</button>
				</Form>
			</>
		);
	}
}

export default App;
