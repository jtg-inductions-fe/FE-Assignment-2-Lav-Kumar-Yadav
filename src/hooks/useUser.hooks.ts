import { useEffect, useState } from 'react';

import { ENDPOINTS } from '@constant';
import { apiClient } from '@lib';
import type { User } from '@types';

type UserApiResponse = {
    results: User[];
};

/**
 * custom react hook for fetching and managing User data
 * @function useUser
 * @returns user, isLoading and error as  Hook result
 *
 */
export const useUser = () => {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        let isMounted = true;
        async function fetchUser() {
            try {
                const data = await apiClient<UserApiResponse>(
                    ENDPOINTS.USER_URI,
                );
                if (!data.results || data.results.length === 0) {
                    throw new Error('No user data returned from API');
                }
                if (isMounted) {
                    setUser(data.results[0]);
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

        void fetchUser();

        return () => {
            isMounted = false;
        };
    }, []);

    return {
        data: user,
        isLoading,
        error,
    };
};
