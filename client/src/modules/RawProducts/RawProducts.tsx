import React, { useContext } from 'react';
import { RawProductsHeader } from './components/RawProductsHeader/RawProductsHeader';
import { GridLayout, GridLayoutRow } from '../../baseComponents/GridLayout';
import { RawProductsList } from './components/RawProductsList/RawProductsList';
import { RawProductsAdd } from './components/RawProductsAdd/RawProductsAdd';
import { RawProductContext } from './store/const';
import { RawProductContextProvider } from './store/RawProductContext';
import { RawProductsModalsContextProvider } from './components/RawProductsModalsContextProvider/RawProductsModalsContextProvider';

const RawProducts = () => {
    const { pending } = useContext(RawProductContext);

    return (
        <>
            <RawProductsHeader />
            <GridLayout
                isPending={pending}
            >
                <GridLayoutRow
                    grid="7-5"
                >
                    <RawProductsList />
                    <RawProductsAdd />
                </GridLayoutRow>
            </GridLayout>
        </>
    );
};

const RawProductsWithContext = () => {
    return (
        <RawProductContextProvider>
            <RawProductsModalsContextProvider>
                <RawProducts />
            </RawProductsModalsContextProvider>
        </RawProductContextProvider>
    );
};

export { RawProductsWithContext };
