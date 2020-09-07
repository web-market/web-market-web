export type ModalsContextPropsType = {
    openModal: (modalName: string, modalData?: string | {} | number) => void,
    closeModal: (modalName: string) => void,
};
