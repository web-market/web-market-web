import React from 'react';
import { Form } from './Form';

import { FormContextProvider } from './store/FormContext';

const FromProvider = (props) => {
	console.log(props);
	return (
		<FormContextProvider>
			<Form {...props} />
		</FormContextProvider>
	);
};

export { FromProvider };
