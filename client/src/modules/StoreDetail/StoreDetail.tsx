import React from 'react';
import { useParams } from 'react-router-dom';

const StoreDetail = () => {
    const { storeId } = useParams();

    console.log(storeId);

    return (
        <div>###NEW COMPONENT StoreDetail</div>
    );
};

export { StoreDetail };
