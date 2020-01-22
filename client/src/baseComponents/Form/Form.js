import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';

import { ContextForm } from './store/FormContext';
import { FormsGlobalContext } from '../../App/store/FormsGlobalContext';

import { isNull } from '../../utils';

const Form = ({ children, name, onSubmit, initialValues }) => {
	const { addFormToGlobalContext } = useContext(FormsGlobalContext);
	const {
		initForm,
		validateForm,
		setFormValues,
		formValues,
		fields,
	} = useContext(ContextForm);

	const valuesRef = useRef();
	const fieldsRef = useRef();

	useEffect(() => {
		initForm({ name });
	}, [initForm, name]);

	useEffect(() => {
		if (!isNull(initialValues)) {
			setFormValues(initialValues);
		}
	}, [setFormValues, initialValues]);

	useEffect(() => {
		valuesRef.current = formValues;
		fieldsRef.current = fields;
	}, [formValues, fields]);

	const submitForm = () => {
		validateForm(fieldsRef.current, valuesRef.current)
			.then(() => {
				onSubmit(valuesRef.current);
			})
			.catch(() => console.warn('Field validation error'));
	};

	//set submit function to global context on init
	useEffect(() => {
		addFormToGlobalContext({ [name]: { submitForm } });
	}, []);

	//submit for button type=submit
	const handleFormSubmit = e => {
		e.preventDefault();

		validateForm()
			.then(() => onSubmit(formValues))
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
};

Form.defaultProps = {
	initialValues: null,
};

Form.propTypes = {
	initialValues: PropTypes.object,
	children: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired
};

export { Form };
