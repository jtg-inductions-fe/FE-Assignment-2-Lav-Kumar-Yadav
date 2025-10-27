import { useEffect, useState } from 'react';

import { USER_URI } from '@constant';
import { apiClient } from '@lib';
import type { User } from '@types';

type UserApiResponse = {
    results: User[];
    info: {
        seed: string;
        results: number;
        page: number;
        version: string;
    };
};

/**
 * custom react hook for fetching and managing User data
 * @function useUser
 * @returns {{data,isLoading}} Hook result
 *
 */
export const useUser = () => {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const data = await apiClient<UserApiResponse>(USER_URI);
                setUser(data.results[0]);
            } catch (e) {
                setError(JSON.stringify(e));
            } finally {
                setIsLoading(false);
            }
        }

        void fetchMyAPI();
    }, []);

    return {
        data: user,
        isLoading,
        error,
    };
};
