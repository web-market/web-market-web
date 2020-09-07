type form = {
    [name: string]: {
        addFormValues: (values: {} | []) => void,
        submitForm: () => void,
        values: {} | []
    }
};

export type FormsGlobalContextTypes = {
    forms: form,
    addFormToGlobalContext: (form) => void,
    addFormValuesToGlobalContext: (values: {}) => void,
    removeFormFromGlobalContext: (formName: string) => void,
};
