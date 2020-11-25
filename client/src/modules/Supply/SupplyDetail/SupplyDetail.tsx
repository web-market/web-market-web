import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SupplyDetailHeader } from './components/SupplyDetailHeader';
import { Supply } from './types';
import { supplyInitial } from './const';
import { getSupply } from './api';

const SupplyDetail = () => {
    const [supplyData, setSupplyDate] = useState<Supply>(supplyInitial);
    const { supplyId } = useParams();

    useEffect(() => {
        getSupply(supplyId)
            .then(({ data }) => setSupplyDate(data));
    }, [supplyId]);

    console.log(supplyData);

    return (
        <>
            <SupplyDetailHeader
                identificationNumber={supplyData.identificationNumber}
            />
        </>
    );
};

export { SupplyDetail };
