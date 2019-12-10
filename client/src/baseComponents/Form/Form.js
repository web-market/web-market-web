import React, { useEffect, useContext, useRef } from 'react';
import { ContextForm } from './store/FormContext';
import { AppContext as GlobalContext } from '../../App/store/AppContext';
import { usePrevious } from '../../hooks';

const Form = ({ children, name, onSubmit }) => {
	const { addFormToGlobalContext } = useContext(GlobalContext);
	const { initForm, formValues, validateForm, fields } = useContext(ContextForm);

	const valuesRef = useRef();
	const fieldsRef = useRef();

	useEffect(() => {
		initForm({ children, name });
	}, []);

	useEffect(() => {
		valuesRef.current = formValues;
		fieldsRef.current = fields;
	}, [formValues, fields]);

	const submitForm = () => {
		validateForm(fieldsRef.current)
			.then(() => onSubmit(valuesRef.current))
			.catch(() => console.warn('Field validation error'));
	};

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

export { Form };
