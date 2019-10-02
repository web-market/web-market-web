// SELECTORS
// fields: array. all registered fields (name, value, validationRules);
// formValidationRules: array. all validation rules from fields, if exists;
// isFormValid: bool. is form valid

import React, { useReducer, useCallback } from 'react';
import {
	INIT_FIELDS,
	INIT_FORM_NAME,
	CHANGE_FILED,
	SET_FORM_VALID,
	SET_FORM_VALIDATION_RULES,
	SET_FORM_VALUES
} from './consts';
import { isFunction, isUndefined } from '../../../utils';

const ContextForm = React.createContext();

const initialState = {
	formName: '',
	fields: [],
	formValidationRules: [],
	formValues: [],
	isFormValid: true,
};

function merge (prevValues, newValues) {
	const mergeValues = [];

	newValues.forEach(value => {
		if (prevValues.length === 0) {
			mergeValues.push(value);
		} else {
			prevValues.forEach(prevValue => {
				const valueKey = Object.keys(value);
				const prevValueKey = Object.keys(prevValue);

				if (valueKey[0] === prevValueKey[0]) {
					return mergeValues.push(value);
				}

				return mergeValues.push(prevValue);
			});
		}
	});

	return [...mergeValues];
}

const reducer = (state, action) => {
	switch (action.type) {
		case INIT_FIELDS:
			return {
				...state,
				fields: [...action.initialFields]
			};
		case INIT_FORM_NAME:
			return {
				...state,
				formName: action.name
			};
		case CHANGE_FILED:
			return {
				...state,
				fields: state.fields.map(f => {
					if (f.name === action.obj.name) {
						return action.obj;
					}

					return f;
				})
			};
		case SET_FORM_VALID:
			return {
				...state,
				isFormValid: action.valid
			};
		case SET_FORM_VALIDATION_RULES:
			return {
				...state,
				formValidationRules: action.initialValidationRules
			};
		case SET_FORM_VALUES:
			return {
				...state,
				formValues: merge(state.formValues, action.formValues)
			};
	}
};

function FormContextProvider (props) {
	const [state, dispatch] = useReducer(reducer, initialState);


	const setFormValues = (fields) => {
		const formValues = fields.map(field => {
			return {
				[field.name]: field.value
			};
		});

		dispatch({
			type: SET_FORM_VALUES,
			formValues
		});
	};

	const _initFields = useCallback((elems) => {
		const fields = elems.filter((e) => isFunction(e.type));

		const initialFields = [];

		fields.forEach(field => {
			const { name, validate } = field.props;

			initialFields.push({
				name,
				validationRules: validate,
				value: null,
				isValid: true
			});
		});

		setFormValues(initialFields);

		dispatch({
			type: INIT_FIELDS,
			initialFields
		});

		return Promise.resolve(initialFields);
	}, []);

	const initValidationRules = useCallback((elems) => {
		const fields = elems.filter((e) => isFunction(e.type));

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

	const initFormName = useCallback((name) => {
		dispatch({
			type: INIT_FORM_NAME,
			name
		});
	}, []);

	const changeField = useCallback(obj => {
		dispatch({
			type: CHANGE_FILED,
			obj
		});
	}, []);

	const setIsFormValid = useCallback(valid => {
		dispatch({
			type: SET_FORM_VALID,
			valid
		});
	}, []);

	const validateForm = (fields = state.fields) => {
		const validationResult = fields.map(f => {
			const { validationRules, value, name } = f;

			if (isUndefined(validationRules)) return true;

			const intermediateResult = validationRules.map(r => {
				return r(value);
			});

			changeField({
				name,
				value,
				validationRules,
				isValid: !intermediateResult.includes(false)
			});

			return intermediateResult;
		});

		const hasError = validationResult.flat().includes(false);

		return new Promise((resolve, reject) => {
			setIsFormValid(!hasError);

			return hasError ? reject(new Error('Validation errors')) : resolve(hasError);
		});
	};

	const initForm = useCallback(({ children, name }) => {
		initValidationRules(children);
		initFormName(name);

		return Promise.resolve(initFields(children));
	}, [initValidationRules, initFields, initFormName]);

	return (
		<ContextForm.Provider value={{
			...state,
			initForm,
			changeField,
			setIsFormValid, //try not to use
		}}
		>
			{props.children}
		</ContextForm.Provider>
	);
}

export { ContextForm, FormContextProvider };
