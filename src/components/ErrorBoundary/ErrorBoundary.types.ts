import type { ReactNode } from 'react';

export type ErrorBoundaryProps = {
    /** component to show in the place of content  when error occurred*/
    fallback: ReactNode;

    /** The Component which can cause Error */
    children: ReactNode;
};

export type ErrorBoundaryState = {
    /** the state if children has error or not */
    hasError: boolean;
};
