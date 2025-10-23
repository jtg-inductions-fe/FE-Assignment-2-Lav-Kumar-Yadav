import { useEffect, useState } from 'react';

import { apiClient } from '@lib';

const userURL = 'https://randomuser.me/api';

export type User = {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: string | number;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    email: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string | null;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
};

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
 * custom react hook for fething and managing User data
 * @function useUser
 * @returns {{data,isLoading}} Hook result
 *
 */
export const useUser = () => {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchMyAPI() {
            setIsLoading(true);
            const data = await apiClient<UserApiResponse>(userURL);
            setUser(data.results[0]);
            setIsLoading(false);
        }

        void fetchMyAPI();
    }, []);

    return {
        data: user,
        isLoading,
    };
};
