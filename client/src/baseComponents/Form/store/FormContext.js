// SELECTORS
// fields: array. all registered fields (name, value, validationRules);
// formValidationRules: array. all validation rules from fields, if exists;
// isFormValid: is form valid. bool.
// formValues: form values. array. { name: value }

// ACTIONS
//initForm: init form name, fields, validation rules. signature => {name, fields}
//changeField: change fields metadata. signature => {name, values, isValid, validationRules}
//validateForm: validate form. call on init and before send. signature => [{field}, {...}]
//setIsFormValid: manually set form validation state. try no to use. signature => bool

import React, { useReducer, useCallback } from 'react';
import {
	INIT_FIELDS,
	INIT_FORM_NAME,
	SET_FORM_VALID,
	SET_FORM_VALIDATION_RULES,
	SET_FIELD_VALUE
} from './consts';
import { isUndefined } from '../../../utils';

const ContextForm = React.createContext();

const initialState = {
	formName: '',
	fields: [],
	formValidationRules: [],
	formValues: {},
	isFormValid: true,
};

const reducer = (state, payload) => {
	switch (payload.type) {
		case INIT_FORM_NAME:
		return {
			...state,
			formName: payload.name
		};
		case INIT_FIELDS:
			return {
				...state,
				fields: [...state.fields, payload.field]
			};
		case SET_FIELD_VALUE:
			return {
				...state,
				formValues: { ...state.formValues, ...payload.field }
			};
		case SET_FORM_VALID:
			return {
				...state,
				isFormValid: payload.valid
			};
		case SET_FORM_VALIDATION_RULES:
			return {
				...state,
				formValidationRules: payload.initialValidationRules
			};
	}
};

function FormContextProvider (props) {
	const [state, dispatch] = useReducer(reducer, initialState);

	const registerField = (field) => {
		dispatch({
			type: INIT_FIELDS,
			field
		});

		dispatch({
			type: SET_FIELD_VALUE,
			field: { [field.name]: field.value }
		});
	};

	const setFieldValue = (field) => {
		dispatch({
			type: SET_FIELD_VALUE,
			field
		});
	};

	const setFormValues = useCallback((initialValues) => {
		for (const item in initialValues) {
			if (initialValues.hasOwnProperty(item)) {
				const field = { [item]: initialValues[item] };

				dispatch({
					type: SET_FIELD_VALUE,
					field
				});
			}
		}
	}, []);


	const _initValidationRules = useCallback((fields) => {
		const initialValidationRules = [];

		fields.forEach(field => {
			if (isUndefined(field.props.validate)) return;

			field.props.validate.forEach(f => {
				if (initialValidationRules.length === 0) {
					initialValidationRules.push(f);
				} else {
					initialValidationRules.forEach(t => {
						if (t.name !== f.name) {
							initialValidationRules.push(f);
						}
					});
				}
			});
		});

		dispatch({
			type: SET_FORM_VALIDATION_RULES,
			initialValidationRules
		});
	}, []);

	const _initFormName = useCallback((name) => {
		dispatch({
			type: INIT_FORM_NAME,
			name
		});
	}, []);

	const setIsFormValid = useCallback(valid => {
		dispatch({
			type: SET_FORM_VALID,
			valid
		});
	}, []);

	const validateForm = useCallback((fields, values) => {
		const validationResult = fields.map(f => {
			const { validate, name } = f;

			if (isUndefined(validate)) return true;

			return validate.map(validateFunction => {
				return validateFunction(values[name]);
			});
		});

		const hasError = validationResult.flat().includes(false);
		setIsFormValid(!hasError);

		return new Promise((resolve, reject) => {
			return hasError ? reject(new Error('Validation errors')) : resolve(hasError);
		});
	}, [setIsFormValid]);

	const initForm = useCallback(({ name }) => {
		_initFormName(name);
	}, [_initFormName]);

	return (
		<ContextForm.Provider value={{
			...state,
			initForm,
			validateForm,
			setFieldValue,
			setFormValues, // only on init
			registerField,
			setIsFormValid, //try not to use
		}}
		>
			{props.children}
		</ContextForm.Provider>
	);
}

export { ContextForm, FormContextProvider };
