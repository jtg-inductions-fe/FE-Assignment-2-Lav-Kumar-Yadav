import { useEffect, useState } from 'react';

import { PRODUCTS_URI } from '@constant';
import { apiClient } from '@lib';
import type { Product } from '@types';

/**
 * custom react hook for fetching and managing a list of products
 * @function useProducts
 * @returns {{data,isLoading}} Hook result
 *
 */
export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const data = await apiClient<Product[]>(PRODUCTS_URI);
                setProducts(data);
            } catch (e) {
                setError(JSON.stringify(e));
            } finally {
                setIsLoading(false);
            }
        }

        void fetchMyAPI();
    }, []);

    return {
        data: products,
        isLoading,
        error,
    };
};
