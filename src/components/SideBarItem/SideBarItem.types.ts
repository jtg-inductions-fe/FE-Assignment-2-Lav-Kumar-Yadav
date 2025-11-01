import type { SidebarConfigType } from 'components/SideBar/SideBar.types';

import type { ListItemProps } from '@mui/material';

export type SideBarItemProps = {
    item: SidebarConfigType[number];
    isChild?: boolean;
} & ListItemProps;
