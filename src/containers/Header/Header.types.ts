import type { Dispatch } from 'react';

export type HeaderProps = {
    /** To control sidebar open close */
    setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
};
