import type { Dispatch } from 'react';

export type HeaderProps = {
    setIsSidebarOpen: Dispatch<React.SetStateAction<boolean>>;
};
