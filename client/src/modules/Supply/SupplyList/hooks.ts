import { useContext, useEffect } from 'react';
import { SupplyContext } from './store/const';

export const useGetSupplies = () => {
    const { getSupplies } = useContext(SupplyContext);

    useEffect(() => {
        getSupplies();
    }, [getSupplies]);
};
