import React, { useContext, useRef, useCallback, useEffect } from 'react';
import { ContextForm } from './store/FormContext';

import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const { registerField, setFieldValue, formValues } = useContext(ContextForm);

	const isValid = useRef(true);

	useEffect(() => {
		registerField({
			name,
			validate,
			value: null,
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
			value={formValues[name]}
			{...props}
		/>
	);
};

export { Field };
