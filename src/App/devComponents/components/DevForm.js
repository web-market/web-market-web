import React from 'react';

import { Form, Field } from '../../baseComponents/Form';
import Textbox from '../../baseComponents/Form/Adapters/Textbox';

export const DevForm = () => {
	return (
		<Form
			name="testForm"
		>
			<Field
				component={Textbox}
				name="age"
			/>
		</Form>
	);
};
