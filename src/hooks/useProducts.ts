import { useEffect, useState } from 'react';

import { PRODUCTS_URI } from '@constant';
import { apiClient } from '@lib';
import type { Product } from '@types';

/**
 * custom react hook for fething and managing a list of products
 * @function useProducts
 * @returns {{data,isLoading}} Hook result
 *
 */
export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const data = await apiClient<Product[]>(PRODUCTS_URI);
                setProducts(data);
            } catch (error) {
                throw new Error(JSON.stringify(error));
            } finally {
                setIsLoading(false);
            }
        }

        void fetchMyAPI();
    }, []);

    return {
        data: products,
        isLoading,
    };
};
