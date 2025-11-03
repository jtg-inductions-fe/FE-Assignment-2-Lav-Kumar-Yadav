import { useEffect, useState } from 'react';

import { ENDPOINTS } from '@constant';
import { apiClient } from '@lib';
import type { Gallery } from '@types';

type UseGalleryResult = {
    data: Gallery[];
    isLoading: boolean;
    error?: string;
};

/**
 * custom react hook for fetching and managing a hero Image Data
 * @function useGallery
 * @returns  hero gallery data, isLoading and error as Hook result
 *
 */
export const useGallery = (): UseGalleryResult => {
    const [data, setData] = useState<Gallery[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        let isMounted = true;
        async function fetchHeroGallery() {
            try {
                const responseData = await apiClient<Gallery[]>(
                    ENDPOINTS.HERO_GALLERY,
                );
                if (responseData === null) {
                    throw new Error(
                        'No Data returned from api or there is some error',
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
        void fetchHeroGallery();

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
