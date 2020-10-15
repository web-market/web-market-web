import React, { useEffect, useContext, useRef, memo, useCallback, FC } from 'react';
import PropTypes from 'prop-types';

import { ContextForm } from './store/consts';
import { FormsGlobalContext } from '../../App/store/FormsGlobalContext';

import { isNull, actionLoggerWarning, actionLogger, isObjectsEqual } from '../../utils';
import { FormPropsType } from './types';

const Form:FC<FormPropsType> = memo((
	{
		name,
		children,
		onSubmit,
		initialValues,
		formData,
        noValuesOnInitInContext,
		resetFormValues: resetFormValuesFromProps
	}
) => {
	const {
		addFormToGlobalContext,
		removeFormFromGlobalContext,
        addFormValuesToGlobalContext
	} = useContext(FormsGlobalContext);

    const {
		fields,
		initForm,
		formValues,
		validateForm,
		setFormValues,
		resetFormValues,
        setFieldValidationResult
	} = useContext(ContextForm);

	const valuesRef = useRef({});
	const fieldsRef = useRef({});

	const handleErrors = useCallback((fields) => {
		const errors = fields.map(field => {
			return `\n${field.field}: ${field.errorMessages}`;
		});

		actionLoggerWarning(`Field validation error: ${errors.join(';')};`);

		return errors;
	}, []);

	const handleSuccess = useCallback((values) => {
		onSubmit(values, formData);
		actionLogger(`SUBMIT FROM: "${name}"`);

		if (resetFormValuesFromProps) {
			resetFormValues();
			actionLogger(`RESET FROM: "${name}"`);
		}
	}, [formData, name, onSubmit, resetFormValues, resetFormValuesFromProps]);

	const submitForm = useCallback(() => {
		validateForm(fieldsRef.current, valuesRef.current)
		.then(values => handleSuccess(values))
		.catch(fields => handleErrors(fields));
	}, [handleSuccess, handleErrors, validateForm]);

    const addFormValues = useCallback((values) => {
        addFormValuesToGlobalContext({
            formName: name,
            values
        });
    }, [setFormValues]);

	const handleSubmitOnEnter = useCallback((e) => {
		const { keyCode } = e;

		if (keyCode === 13) {
			submitForm();
		}
	}, [submitForm]);

	useEffect(() => {
		window.addEventListener('keyup', handleSubmitOnEnter);

		return () => {
			window.removeEventListener('keyup', handleSubmitOnEnter);
		};
	}, [handleSubmitOnEnter]);

	useEffect(() => {
		initForm({ name });

		return () => {
			setFormValues({});
			initForm({});
		};
	}, []);

    useEffect(() => {
        let timeOut;

        if (!isNull(initialValues)) {
            timeOut = setTimeout(() => {
                setFormValues(initialValues);
            }, 50);
        }

        return () => {
            clearTimeout(timeOut);
            setFormValues({});
        };
    }, [initialValues]);

    useEffect(() => {
        if (isObjectsEqual(formValues, valuesRef.current) || noValuesOnInitInContext) return;

        addFormValuesToGlobalContext({
            formName: name,
            values: formValues
        });
    }, [formValues, noValuesOnInitInContext]);

	useEffect(() => {
		valuesRef.current = formValues;
		fieldsRef.current = fields;
	}, [formValues, fields]);

	//set submit function to global context on init
	useEffect(() => {
		addFormToGlobalContext({
            [name]: {
                submitForm,
                addFormValues,
                setFieldValidationResult
            }
		});

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
	resetFormValues: true,
    noValuesOnInitInContext: false,
};

Form.propTypes = {
	initialValues: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
	children: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array
	]),
	name: PropTypes.string.isRequired,
	onSubmit: PropTypes.func,
	resetFormValues: PropTypes.bool,
    noValuesOnInitInContext: PropTypes.bool,
};

export { Form };
