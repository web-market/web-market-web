import React, { Component } from 'react';

import { Form, Field } from './components/baseComponents/Form';
import TextBox from './components/baseComponents/Form/adapters/TextBox';

class App extends Component {
	render () {
		return (
			<>
				<Form>
					<Field
						component={TextBox}
					/>
				</Form>
			</>
		);
	}
}

export default App;
