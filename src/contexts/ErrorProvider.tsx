import { useState } from 'react';

import type { ReactNode } from 'react';

import { ErrorContext } from './Error.context';

export const ErrorProvider = ({ children }: { children: ReactNode }) => {
    const [isError, setIsError] = useState<boolean>(false);

    return (
        <ErrorContext.Provider
            value={{
                isError,
                setIsError,
            }}
        >
            {children}
        </ErrorContext.Provider>
    );
};
