import React, { Component } from 'react';

import Dropdown from '../baseComponents/Form/formFields/Dropdown';
import { Form, Field } from '../baseComponents/Form';
import Textbox from '../baseComponents/Form/adapters/Textbox';

class Sandbox extends Component {
	render () {
		return (
			<>
			<Form
				name="testForm"
			>
				<Field
					component={Textbox}
					name="age"
				/>

			</Form>
			<Dropdown />
			</>
		);
	}
}

export default Sandbox;
