import React, { useContext, useRef, useCallback, useEffect } from 'react';
import { ContextForm } from './store/FormContext';

import { getValidationResult } from './utils';
import { isUndefined } from '../../utils';

const Field = (props) => {
	const { name, component, validate } = props;
	const { registerField, setFieldValue, formValues } = useContext(ContextForm);

	const isValid = useRef(true);
	const errorMessages = useRef([]);

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

		const validationResult = getValidationResult(val, validate);

		isValid.current = validationResult.isValid;
		errorMessages.current = validationResult.errorMessages;
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
			errorMessages={errorMessages.current}
			onFieldChange={handleChange}
			value={formValues[name]}
			{...props}
		/>
	);
};

export { Field };
