import type { ElementType, ReactNode } from 'react';

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
};

export type MenuConfigItem = CustomItem | DividerItem | MenuItem;

export type MenuProps = {
    children: ReactNode;
    config: MenuConfigItem[] | undefined;
};
