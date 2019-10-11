import React from 'react';

import Form, { Field } from '../../baseComponents/Form';
import Textbox from '../../baseComponents/Form/Adapters/Textbox';
import Dropdown from '../../baseComponents/Form/Adapters/Dropdown';

export const DevForm = () => {
	return (
		<Form
			name="testForm"
		>
			<Field
				component={Textbox}
				name="age"
			/>
			<Field
				component={Dropdown}
				name="dropdown"
			/>
		</Form>
	);
};
