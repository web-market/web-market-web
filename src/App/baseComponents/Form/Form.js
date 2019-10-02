import React, { useEffect, useContext } from 'react';
import { ContextForm } from './store/FormContext';

const Form = ({ children, name, onSubmit }) => {
	const { initForm, formValues, validateForm } = useContext(ContextForm);

	useEffect(() => {
		const initData = {
			children,
			name
		};

		initForm(initData)
			.then((fields) => {
				return validateForm(fields, false);
			})
			.catch(e => { console.log(e); });
	}, [name, initForm, children]);

	const handleFormSubmit = e => {
		e.preventDefault();

		validateForm()
			.then(() => onSubmit(formValues))
			.catch(e => console.log(e));
	};

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

export { Form };
