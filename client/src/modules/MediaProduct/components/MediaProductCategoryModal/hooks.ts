import { useMemo } from 'react';
import { isNullOrUndefined } from '../../../../utils';

export const useGetEditFormData = (initialValues) => {
    const fieldsMetadata = useMemo(() => {
        if (isNullOrUndefined(initialValues) || isNullOrUndefined(initialValues.parentFolder)) {
            return {
                parentFolderId: {
                    displayValue: ''
                }
            };
        }

        const {
            parentFolder
        } = initialValues;

        return {
            parentFolderId: {
                displayValue: parentFolder.name
            }
        };
    }, [initialValues]);

    const fieldsInitialValues = useMemo(() => {
        if (isNullOrUndefined(initialValues)) return {};

        const {
            name,
            parentFolder
        } = initialValues;

        const parentFolderId = isNullOrUndefined(parentFolder) ? null : parentFolder.id;

        return {
            name,
            parentFolderId
        };
    }, [initialValues]);

    return {
        fieldsInitialValues,
        fieldsMetadata
    };
};
