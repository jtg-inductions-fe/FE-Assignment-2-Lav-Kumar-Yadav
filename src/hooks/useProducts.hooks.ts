import { useEffect, useState } from 'react';

import { ENDPOINTS } from '@constant';
import { apiClient } from '@lib';
import type { Product } from '@types';

type UseProductsResult = {
    data: Product[];
    isLoading: boolean;
    error?: string;
};

/**
 * custom react hook for fetching and managing a list of products
 * @function useProducts
 * @returns  products, isLoading and error as Hook result
 *
 */
export const useProducts = (): UseProductsResult => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        let isMounted = true;
        async function fetchProducts() {
            try {
                const data = await apiClient<Product[]>(ENDPOINTS.PRODUCTS_URI);
                if (!data) {
                    throw new Error(
                        'No Products returned from api or there is some error',
                    );
                }
                if (isMounted) {
                    setProducts(data);
                }
            } catch (e) {
                if (isMounted) {
                    setError(e instanceof Error ? e.message : String(e));
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        }

        void fetchProducts();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        data: products,
        isLoading,
        error,
    };
};
