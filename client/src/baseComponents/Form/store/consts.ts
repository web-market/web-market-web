import { createContext } from 'react';
import { FormContextPropsType } from '../types';

const INIT_FIELDS = 'INIT_FIELDS';
const INIT_FORM_NAME = 'INIT_FORM_NAME';
const SET_FORM_VALID = 'SET_FORM_VALID';
const SET_FIELD_VALUE = 'SET_FIELD_VALUE';
const SET_FIELD_VALIDATION_RESULT = 'SET_FIELD_VALIDATION_RESULT';
const RESET_FORM_VALUES = 'RESET_FORM_VALUES';

const FormContextInitialValues = {
    fields: {},
    initForm: () => {},
    formValues: {},
    validateForm: () => Promise.resolve,
    setFormValues: () => {},
    resetFormValues: () => {},
    setFieldValue: () => {},
    registerField: () => {},
    setFieldValidationResult: () => {}
};

// @ts-ignore
const ContextForm = createContext<FormContextPropsType>(FormContextInitialValues);

export {
	INIT_FIELDS,
	INIT_FORM_NAME,
	SET_FORM_VALID,
	SET_FIELD_VALUE,
	SET_FIELD_VALIDATION_RESULT,
	RESET_FORM_VALUES,
    FormContextInitialValues,
    ContextForm
};