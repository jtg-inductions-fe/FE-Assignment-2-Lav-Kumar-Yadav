import { createContext, useContext } from 'react';

export const ErrorBoundaryContext = createContext<
    { resetErrorBoundary: () => void } | undefined
>(undefined);

export const useErrorBoundaryContext = () => {
    const context = useContext(ErrorBoundaryContext);
    if (!context) {
        throw new Error(
            'useErrorBoundaryContext should be used inside errorBoundaryContext Provider',
        );
    }

    return context;
};
