import { createContext } from 'react';
import { ModalsContextPropsType } from '../../../../generalTypes';
import { modalsContextInitialValues } from '../../../../generalConst';

export const MODALS = {
    UPLOAD_FILE_MODAL: 'UPLOAD_FILE_MODAL',
    DELETE_MEDIA_CATEGORY_MODAL: 'DELETE_MEDIA_CATEGORY_MODAL',
    MEDIA_CATEGORY_MODAL: 'MEDIA_CATEGORY_MODAL'
};

export const MediaProductModalsContext = createContext<ModalsContextPropsType>(modalsContextInitialValues);
