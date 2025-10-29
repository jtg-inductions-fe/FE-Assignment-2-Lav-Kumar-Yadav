import type { ElementType, ReactNode } from 'react';

import type { MenuItemProps, MenuProps as MuiMenuProps } from '@mui/material';

type CustomItem = {
    /**
     * custom  - for render any react component
     */
    type: 'custom';
    /**
     * The react component to render
     */
    node: ReactNode;
};

type DividerItem = {
    /**
     * divider - for adding a horizontal line
     */
    type: 'divider';
};

type MenuItem = {
    /**
     * menuItem - for options
     */
    type: 'menuItem';
    /**
     * the option to show
     */
    option: string;
    /**
     * Icon to show with the options
     */
    Icon: ElementType;
    /**
     * click handler for options
     */
    onClick?: MenuItemProps['onClick'];
};

export type MenuConfigItem = CustomItem | DividerItem | MenuItem;

export type MenuProps = {
    /**
     * The configuration for menu
     */
    config: MenuConfigItem[] | null;
    /**
     * aria-label to show on the trigger
     */
    iconAriaLabel: string;
    /**
     *  aria-label to show on the Menu
     */
    menuAriaLabel: string;
} & Omit<MuiMenuProps, 'open'>;
