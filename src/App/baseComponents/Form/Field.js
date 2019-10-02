import React, { useContext, useRef } from 'react';
import { ContextForm } from './store/FormContext';

import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const { changeField, setFormValues } = useContext(ContextForm);
	const isValid = useRef(true);

	const handleValidate = (val) => {
		if (isUndefined(validate)) return;

		const r = validate.map(f => f(val));

		isValid.current = !r.includes(false);
	};

	const handleChange = (value) => {
		handleValidate(value);

		const payload = {
			name,
			validationRules: validate,
			value,
			isValid: isValid.current
		};

		changeField(payload);
		setFormValues([payload]);
	};

	const Component = component;

	return (
		<Component
			isValid={isValid.current}
			onChange={handleChange}
			{...props}
		/>
	);
};

export { Field };
