import NotFoundIllustration from '@assets/illustrations/not-found.svg';
import { Link, StatusFallback } from '@components';

/**
 * A fallback component for when a page is not found by the React Router
 * @returns A Fallback Component
 */
export const NotFoundFallback = () => (
    <StatusFallback
        content="Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us."
        illustration={NotFoundIllustration}
        title="Page not found"
        actionButtons={[
            {
                children: 'Go Back Home',
                LinkComponent: Link,
                to: '/',
                variant: 'contained',
            },
        ]}
    />
);
