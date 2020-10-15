type form = {
    [name: string]: {
        addFormValues: (values: {} | []) => void,
        submitForm: () => void,
        values: {} | [],
        setFieldValidationResult: (
            validationResult: {
                isValid: boolean;
                errorMessages: string[];
            },
            fieldName: string) => void;
    }
};

export type FormsGlobalContextTypes = {
    forms: form,
    addFormToGlobalContext: (form) => void,
    addFormValuesToGlobalContext: (values: {}) => void,
    removeFormFromGlobalContext: (formName: string) => void,
};
