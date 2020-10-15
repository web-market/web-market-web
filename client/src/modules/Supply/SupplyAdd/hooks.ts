import { useEffect, useState } from 'react';
import { getAllRawProducts } from './api';

export const useGetRawProducts = () => {
    const [rawProducts, setRawProducts] = useState();

    useEffect(() => {
        getAllRawProducts()
            .then(({ data }) => setRawProducts(data));
    }, []);

    return rawProducts;
};
