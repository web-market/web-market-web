import React from 'react';
import { SupplyAddContent } from './components/SupplyAddContent/SupplyAddContent';
import { SupplyAddHeader } from './components/SupplyAddHeader/SupplyAddHeader';
import { SupplyAddFooter } from './components/SupplyAddFooter/SupplyAddFooter';

const SupplyAdd = () => {
    return (
        <>
            <SupplyAddHeader />
            <SupplyAddContent />
            <SupplyAddFooter />
        </>
    );
};

export { SupplyAdd };
