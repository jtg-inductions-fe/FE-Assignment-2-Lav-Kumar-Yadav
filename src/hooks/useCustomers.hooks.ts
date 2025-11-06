import { useEffect, useState } from 'react';

import { ENDPOINTS } from '@constant';
import { apiClient } from '@lib';
import type { Customer, User } from '@types';

type CustomersApiResponse = {
    results: User[];
};

/**
 * custom react hook for fetching and managing Customer data
 * @function useCustomers
 * @returns customers, isLoading and error as  Hook result
 *
 */
export const useCustomers = () => {
    const [customers, setCustomers] = useState<Customer[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        let isMounted = true;
        async function fetchCustomers() {
            try {
                const data = await apiClient<CustomersApiResponse>(
                    ENDPOINTS.CUSTOMERS,
                );
                if (!data.results || data.results.length === 0) {
                    throw new Error('No customer data returned from API');
                }
                if (isMounted) {
                    const salesData: number[] = [
                        367, 67, 3467, 2367, 367, 1367,
                    ];
                    const modifiedData: Customer[] = data.results.map(
                        (user, index) => ({
                            ...user,
                            sale: salesData[index],
                        }),
                    );
                    setCustomers(modifiedData);
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

        void fetchCustomers();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        data: customers,
        isLoading,
        error,
    };
};
