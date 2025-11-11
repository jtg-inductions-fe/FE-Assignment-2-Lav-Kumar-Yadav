import { useEffect } from 'react';

import ErrorIllustration from '@assets/illustrations/error.svg';
import { Link, StatusFallback } from '@components';
import { useError, useErrorBoundaryContext } from '@contexts';

/**
 * The Fallback component for route Error
 * @param handleRerender - callback which will be call on click of retry
 * @param setIsSidebarVisible - callback which will be used for show and hide sidebar
 * @returns The fallback component when an Error comes in any route
 */
export const RouteErrorFallback = () => {
    const { resetErrorBoundary } = useErrorBoundaryContext();
    const { setIsError } = useError();

    useEffect(() => {
        setIsError(true);

        return () => {
            setIsError(false);
        };
    }, [setIsError]);

    return (
        <StatusFallback
            content="It’s always time for a coffee break We should be back by the time you finish your coffee."
            illustration={ErrorIllustration}
            title="Something has gone seriously wrong"
            actionButtons={[
                {
                    children: 'Go Back Home',
                    LinkComponent: Link,
                    to: '/',
                    variant: 'contained',
                },
                {
                    children: 'Retry',
                    variant: 'contained',
                    onClick: () => resetErrorBoundary(),
                },
            ]}
        />
    );
};
