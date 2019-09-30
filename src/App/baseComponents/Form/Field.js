import React, { useContext, useState } from 'react';
import { ContextForm } from './store/FormContext';

import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const { changeFieldValue } = useContext(ContextForm);
	const [isValid, setValid] = useState(true);

	const handleValidate = (val) => {
		if (isUndefined(validate)) return;

		const r = validate.map(f => f(val));

		setValid(!r.includes(false));
	};

	const handleChange = (value) => {
		changeFieldValue(
			{
				name,
				validationRules: validate,
				value
			}
		);

		handleValidate(value);
	};

	const Component = component;

	return (
		<Component
			isValid={isValid}
			onChange={handleChange}
			{...props}
		/>
	);
};

export { Field };
