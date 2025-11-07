import { useEffect } from 'react';

import { useMediaQuery } from '@mui/material';

import ErrorIllustration from '@assets/illustrations/error.svg';
import { Link, StatusFallback } from '@components';

type ErrorProps = {
    handleRerender?: () => void;
    setIsSidebarVisible?: (val: boolean) => void;
};

/**
 * The Fallback component for route Error
 * @param handleRerender - callback which will be call on click of retry
 * @param setIsSidebarVisible - callback which will be used for show and hide sidebar
 * @returns The fallback component when an Error comes in any route
 */
export const RouteErrorFallback = ({
    handleRerender,
    setIsSidebarVisible,
}: ErrorProps) => {
    const isDesktop = useMediaQuery(({ breakpoints }) => breakpoints.up('md'));

    useEffect(() => {
        if (isDesktop) setIsSidebarVisible?.(false);

        return () => {
            setIsSidebarVisible?.(true);
        };
    }, [isDesktop, setIsSidebarVisible]);

    return (
        <StatusFallback
            body="It’s always time for a coffee break We should be back by the time you finish your coffee."
            image={ErrorIllustration}
            title="Something has gone seriously wrong"
            buttons={[
                {
                    children: 'Go Back Home',
                    LinkComponent: Link,
                    to: '/',
                    variant: 'contained',
                },
                {
                    children: 'Retry',
                    variant: 'contained',
                    onClick: () => handleRerender?.(),
                },
            ]}
        />
    );
};
