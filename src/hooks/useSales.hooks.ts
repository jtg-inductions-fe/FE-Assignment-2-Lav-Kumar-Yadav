import { useEffect, useState } from 'react';

import { ENDPOINTS } from '@constant';
import { apiClient } from '@lib';
import type { Sales } from '@types';

type UseSalesResult = {
    data: Sales[];
    isLoading: boolean;
    error?: string;
};

/**
 * custom react hook for fetching and managing a list of sales data
 * @function useSales
 * @returns  sales data, isLoading and error as Hook result
 *
 */
export const useSales = (): UseSalesResult => {
    const [data, setData] = useState<Sales[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        let isMounted = true;
        async function fetchSalesData() {
            try {
                const responseData = await apiClient<Sales[]>(ENDPOINTS.SALES);
                if (!responseData) {
                    throw new Error(
                        'No Sales data returned or failed to load sales data',
                    );
                }
                if (isMounted) {
                    setData(responseData);
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
        void fetchSalesData();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        data,
        isLoading,
        error,
    };
};
