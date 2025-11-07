import type { ElementType, ReactNode } from 'react';

export type ErrorBoundaryProps = {
    /** component to show in the place of content  when error occurred*/
    fallback: ElementType;

    /** The Component which can cause Error */
    children: ReactNode;

    /** Props which will further pass to Fallback */
    fallbackProps?: object;
};

export type ErrorBoundaryState = {
    /** the state if children has error or not */
    hasError: boolean;
};
