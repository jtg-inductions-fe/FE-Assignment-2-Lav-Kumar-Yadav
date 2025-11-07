import { useEffect } from 'react';

import { useOutletContext } from 'react-router';

import { useMediaQuery } from '@mui/material';

import NotFoundIllustration from '@assets/illustrations/not-found.svg';
import { Link, StatusFallback } from '@components';

/**
 *A Fallback when an  Page not Found by browser router of react router
 * @returns A Fallback Component
 */
export const NotFoundFallback = () => {
    const setIsSidebarVisible =
        useOutletContext<React.Dispatch<React.SetStateAction<boolean>>>();

    const isDesktop = useMediaQuery(({ breakpoints }) => breakpoints.up('md'));

    useEffect(() => {
        if (isDesktop) setIsSidebarVisible(false);

        return () => {
            setIsSidebarVisible(true);
        };
    }, [setIsSidebarVisible, isDesktop]);

    return (
        <StatusFallback
            body="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
            image={NotFoundIllustration}
            title="Page not found"
            buttons={[
                {
                    children: 'Go Back Home',
                    LinkComponent: Link,
                    to: '/',
                    variant: 'contained',
                },
            ]}
        />
    );
};
