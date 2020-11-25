export type Supply = {
    id: number,
    identificationNumber: string,
    arrivalDate: string,
    provider: {
        id: number,
        name: string
    },
    store: {
        id: number,
        name: string
    },
    comment: string
};
