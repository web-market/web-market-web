import React from 'react';
import { SupplyContextProvider } from './store/SupplyContext';
import { SupplyHeader } from './components/SupplyHeader/SupplyHeader';
import { SupplyModalsProvider } from './components/SupplyModalsProvider/SupplyModalsProvider';
import { SupplyContent } from './components/SupplyContent/SupplyContent';

const Supply = () => {
    return (
        <SupplyContextProvider>
            <SupplyModalsProvider>
                <SupplyHeader />
                <SupplyContent />
            </SupplyModalsProvider>
        </SupplyContextProvider>
    );
};

export { Supply };
