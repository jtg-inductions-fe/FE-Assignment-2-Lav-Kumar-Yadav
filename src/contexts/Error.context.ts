import { createContext, useContext } from 'react';

import type { Dispatch } from 'react';

export const ErrorContext = createContext<
    | { isError: boolean; setIsError: Dispatch<React.SetStateAction<boolean>> }
    | undefined
>(undefined);

export const useError = () => {
    const context = useContext(ErrorContext);

    if (!context) {
        throw new Error('useError should call inside ErrorContext Provider');
    }

    return context;
};
