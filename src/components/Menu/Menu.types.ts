import type { ElementType, ReactNode } from 'react';

import type { MenuItemProps, MenuProps as MuiMenuProps } from '@mui/material';

type CustomItem = {
    type: 'custom';
    node: ReactNode;
};

type DividerItem = {
    type: 'divider';
};

type MenuItem = {
    type: 'menuItem';
    option: string;
    Icon: ElementType;
    onClick?: MenuItemProps['onClick'];
};

export type MenuConfigItem = CustomItem | DividerItem | MenuItem;

export type MenuProps = {
    config: MenuConfigItem[] | null;
    iconAriaLabel: string;
    menuAriaLabel: string;
} & Omit<MuiMenuProps, 'open'>;
