import type { ElementType } from 'react';

import type { ListItemProps } from '@mui/material';
import type { DrawerProps } from '@mui/material';

export type SideBarProps = {
    /**
     * configuration of bottom Icons in sidebar
     */
    sidebarBottomIcon: SidebarBottomIconType;

    /**
     * configuration for sidebar options
     */
    sideBarConfig: SidebarConfigType;
} & DrawerProps;

type SideBarItemConfig = {
    /**
     * id for each listItem to uniquely identify
     */
    id: string;
    /**
     * type for identifying it's listItem
     */
    type: 'listItem';
    /**
     * title of the lisItem
     */
    title: string;
    /**
     * icon Reference of the list icon
     */
    icon?: ElementType;
    /**
     * route path for link
     */
    path?: string;
    /**
     * badge for message or notification count if there
     */
    badge?: number;
    /**
     * Submenu if there is nested
     */
    subMenu?: SideBarItemConfig[];
};

type SideBarDividerType = {
    /**
     * for the horizontal divider
     */
    type: 'divider';
    /**
     * for uniqueness
     */
    id: string;
};

export type SidebarConfigType = (SideBarItemConfig | SideBarDividerType)[];

export type SidebarBottomIconType = {
    /**
     * Icon reference
     */
    icon: ElementType;
    /**
     * path link
     */
    path: string;
    /**
     * label for accessability
     */
    label: string;
}[];

export type SideBarItemProps = {
    item: SidebarConfigType[number];
    isChild?: boolean;
} & ListItemProps;
