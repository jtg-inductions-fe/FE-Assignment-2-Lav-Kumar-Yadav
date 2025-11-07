import { useEffect, useState } from 'react';

import { ENDPOINTS } from '@constant';
import { apiClient } from '@lib';
import type { Transaction } from '@types';

/**
 * custom react hook for fetching and managing a list of transactions data
 * @function useTransactions
 * @returns  transactions, isLoading and error as Hook result
 *
 */
export const useTransactions = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        let isMounted = true;
        async function fetchTransactions() {
            try {
                const data = await apiClient<Transaction[]>(
                    ENDPOINTS.TRANSACTIONS,
                );
                if (data === null) {
                    throw new Error(
                        'No transactions data returned or failed to load transactions data',
                    );
                }
                if (isMounted) {
                    setTransactions(data);
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

        void fetchTransactions();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        data: transactions,
        isLoading,
        error,
    };
};
