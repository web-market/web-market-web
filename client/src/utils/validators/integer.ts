import { isNullOrUndefined } from '../isNullOrUndefined';
import { prepareValidationResult } from './helpers';

export const integer = (value) => {
    if (isNullOrUndefined(value)) {
        return {
            isValid: true,
            errorMessage: ''
        };
    }

    const validationTemplate = {
        integer: true
    };

    validationTemplate.integer = !/[^\d]+/g.test(value);

    const validationResult = prepareValidationResult(validationTemplate);
    const errorMessage = '!!Только целое число';

    return {
        isValid: validationResult.isValid,
        errorMessage
    };
};
