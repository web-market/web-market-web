import React, { useEffect, useContext, useRef } from 'react';
import { ContextForm } from './store/FormContext';
import { FormsGlobalContext } from '../../App/store/FormsGlobalContext';
import { arrayToObject } from './utils';

const Form = ({ children, name, onSubmit }) => {
	const { addFormToGlobalContext } = useContext(FormsGlobalContext);
	const {
		initForm,
		validateForm,
		setFormValues,
		changeField,
		formValues,
		fields,
	} = useContext(ContextForm);

	const valuesRef = useRef();
	const fieldsRef = useRef();

	useEffect(() => { initForm({ name }); }, [initForm, name]);
	useEffect(() => { setFormValues(fields); }, [setFormValues, fields]);

	useEffect(() => {
		valuesRef.current = formValues;
		fieldsRef.current = fields;
	}, [formValues, fields]);

	const submitForm = () => {
		validateForm(fieldsRef.current)
			.then(() => {
				const formValues = arrayToObject(valuesRef.current);

				console.log(formValues);

				onSubmit(formValues);
			})
			.catch(() => console.warn('Field validation error'));
	};

	//set submit function to global context
	useEffect(() => {
		addFormToGlobalContext({ [name]: { submitForm, changeField } });
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

export { Form };
