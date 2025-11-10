import { useEffect } from 'react';

import { StatusFallback } from '@components';
import { useError, useErrorBoundaryContext } from '@contexts';

/**
 * Fallback component for Section When an Error happens
 * @param handleRerender - callback will be call when Retry button will be clicked
 * @returns The Fallback when an Error happens in section
 */
export const SectionErrorFallback = () => {
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
            content="It’s always time for a coffee break. We should be back by the time you finish your coffee."
            title="Something has gone seriously wrong"
            actionButtons={[
                {
                    children: 'Retry',
                    variant: 'contained',
                    onClick: () => resetErrorBoundary(),
                },
            ]}
        />
    );
};
