import { useEffect, useState } from 'react';

import { apiClient } from '@lib';

const productsURL = '/data/products.json';

export type Product = {
    name: string;
    sales: number;
    framework: string;
    route: string;
};

/**
 * custom react hook for fething and managing a list of products
 * @function useProducts
 * @returns {{data,isLoading}} Hook result
 *
 */
export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchMyAPI() {
            setIsLoading(true);
            const data = await apiClient<Product[]>(productsURL);
            setProducts(data);
            setIsLoading(false);
        }

        void fetchMyAPI();
    }, []);

    return {
        data: products,
        isLoading,
    };
};
