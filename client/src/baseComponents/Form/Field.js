import React, { useContext, useRef, useCallback, useEffect } from 'react';
import { ContextForm } from './store/FormContext';

import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate, value } = props;
	const { registerField, setFieldValue } = useContext(ContextForm);

	const isValid = useRef(true);

	const fieldValue = isUndefined(value) ? null : value;

	useEffect(() => {
		registerField({
			name,
			validate,
			value: fieldValue,
			isTouched: false,
			hasValidationError: false
		});
	}, []);

	const validateField = useCallback((val) => {
		if (isUndefined(validate)) return;

		const r = validate.map(f => f(val));

		isValid.current = !r.includes(false);
	}, [validate]);

	const handleChange = useCallback(value => {
		validateField(value);

		setFieldValue({
			[name]: value
		});
	}, [name, setFieldValue, validate, validateField]);

	const Component = component;

	//initialValue develepment

	return (
		<Component
			isValid={isValid.current}
			onFieldChange={handleChange}
			{...props}
		/>
	);
};

export { Field };
