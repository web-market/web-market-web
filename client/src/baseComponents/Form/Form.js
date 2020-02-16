import React, { useEffect, useContext, useRef, memo } from 'react';
import PropTypes from 'prop-types';

import { ContextForm } from './store/FormContext';
import { FormsGlobalContext } from '../../App/store/FormsGlobalContext';

import { isNull, actionLoggerWarning, actionLogger } from '../../utils';

const Form = memo((
	{
		name,
		children,
		onSubmit,
		initialValues,
		restFormValues
	}
	) => {
	const {
		addFormToGlobalContext,
		removeFormFromGlobalContext
	} = useContext(FormsGlobalContext);

	const {
		fields,
		initForm,
		formValues,
		validateForm,
		setFormValues,
		resetFormValues
	} = useContext(ContextForm);

	const valuesRef = useRef();
	const fieldsRef = useRef();

	useEffect(() => {
		initForm({ name });

		return () => {
			setFormValues({});
			initForm({});
		};
	}, []);

	useEffect(() => {
		if (!isNull(initialValues)) {
			setFormValues(initialValues);
		}
	}, [initialValues]);

	useEffect(() => {
		valuesRef.current = formValues;
		fieldsRef.current = fields;
	}, [formValues, fields]);

	const handleErrors = (fields) => {
		const errors = fields.map(field => {
			return `\n${field.field}: ${field.errorMessages}`;
		});

		actionLoggerWarning(`Field validation error: ${errors.join(';')};`);
	};

	const handleSuccess = (values) => {
		onSubmit(values);
		actionLogger(`FROM "${name}" HAS SUBMITTED`);

		if (restFormValues) {
			resetFormValues();
			actionLogger(`FROM "${name}" HAS RESETED`);
		}
	};

	const submitForm = () => {
		validateForm(fieldsRef.current, valuesRef.current)
			.then(values => handleSuccess(values))
			.catch(fields => handleErrors(fields));
	};

	//set submit function to global context on init
	useEffect(() => {
		addFormToGlobalContext({ [name]: { submitForm } });

		return () => {
			removeFormFromGlobalContext(name);
		};
	}, []);

	//submit for button type=submit
	const handleFormSubmit = e => {
		e.preventDefault();

		validateForm(fieldsRef.current, valuesRef.current)
			.then((values) => onSubmit(values))
			.catch(e => console.log(e));
	};

	return (
		<form
			name={name}
			onSubmit={handleFormSubmit}
		>
			{children}
		</form>
	);
});

Form.defaultProps = {
	initialValues: null,
	restFormValues: true,
};

Form.propTypes = {
	initialValues: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]),
	name: PropTypes.string.isRequired,
	onSubmit: PropTypes.func,
	restFormValues: PropTypes.bool,
};

export { Form };
