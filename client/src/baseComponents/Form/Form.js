import React, { useEffect, useContext } from 'react';
import { ContextForm } from './store/FormContext';
import { AppContext as GlobalContext } from '../../App/store/AppContext';
import { usePrevious } from '../../hooks';

const Form = ({ children, name, onSubmit }) => {
	const { addFormToGlobalContext, forms } = useContext(GlobalContext);
	const { initForm, formValues, validateForm } = useContext(ContextForm);

	const prevFormValues = usePrevious(formValues);

	useEffect(() => {
		initForm({ children, name });
		}, []);

	const submitForm = () => {
		validateForm()
			.then(() => onSubmit(formValues))
			.catch(e => console.log(e));
	};

	useEffect(() => {
		if (formValues === prevFormValues) return;

		addFormToGlobalContext({ [name]: { submitForm } });
	}, [formValues]);

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
