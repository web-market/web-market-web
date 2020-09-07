import React from 'react';
import { StoreHeader } from './components/StoreHeader/StoreHeader';
import { StoreContent } from './components/StoreContent/StoreContent';
import { StoreContextProvider } from './store/StoreContext';
import { StoreModalsContextProvider } from './components/StoreModalsContextProvider/StoreModalsContextProvider';

const Stores = () => {
    return (
        <StoreContextProvider>
            <StoreModalsContextProvider>
                <StoreHeader />
                <StoreContent />
            </StoreModalsContextProvider>
        </StoreContextProvider>
    );
};


export { Stores };
