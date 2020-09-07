export type FormPropsType = {
    name: string;
    children?: {};
    onSubmit: (values: {}, formData?: {}) => void;
    initialValues?: {};
    formData?: {};
    resetFormValues?: boolean;
    noValuesOnInitInContext?: boolean;
};

export type FormContextPropsType = {
    fields?: {};
    initForm?: (params: {}) => void;
    formValues?: {};
    validateForm?: (fields: {}, values: {}) => Promise<any>;
    setFormValues?: (params: {}) => void;
    resetFormValues?: () => void;
    setFieldValue?: (param: {}) => void;
    registerField?: (param: {}) => void;
    setFieldValidationResult?: (validationResult: {}, name: string) => void;
};
