import React, { useEffect, useContext } from 'react';
import { ContextForm } from './store/FormContext';

const Form = ({ children, name, onSubmit }) => {
	const { fields, initForm, validateForm } = useContext(ContextForm);

	useEffect(() => {
		const initData = {
			children,
			name
		};

		initForm(initData)
			.then((fields) => {
				return validateForm(fields);
			})
			.catch(e => { console.log(e); });
	}, [name, initForm, children]);

	const handleFormSubmit = e => {
		e.preventDefault();

		validateForm()
			.then(() => {
				onSubmit(fields);
			})
			.catch(e => { console.log(e); });
	};

	return (
		<form onSubmit={handleFormSubmit}>
			{children}
		</form>
	);
};

export { Form };
