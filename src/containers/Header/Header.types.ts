import type { Dispatch } from 'react';

export type HeaderProps = {
    /** Callback to toggle sidebar visibility */
    setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
};
