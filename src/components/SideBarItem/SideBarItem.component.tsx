import { useState } from 'react';

import { useLocation } from 'react-router';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Chip,
    Collapse,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
} from '@mui/material';

import { Link } from '@components';

import type { SideBarItemProps } from './SideBarItem.types';

/**
 * Renders a single sidebar item, which may be:
 * - a divider,
 * - a simple list item (link),
 * - or a list item with a collapsible submenu.
 * Handles submenu expansion and active route highlighting based on the current URL path.
 * @component
 * @param  props - Component props.
 * @returns  The rendered sidebar item element.
 * @example
 * <RenderItem item = {item} />
 */
export const SideBarItem = ({ item, isChild, ...props }: SideBarItemProps) => {
    const { pathname } = useLocation();
    const isSubMenuItemActive =
        item.type === 'listItem' &&
        item.subMenu?.some(
            (subItem) => subItem.path && pathname.startsWith(subItem.path),
        );

    const [isItemOpen, setIsItemOpen] = useState<boolean>(
        Boolean(isSubMenuItemActive),
    );
    const theme = useTheme();

    switch (item.type) {
        case 'divider': {
            return <Divider aria-hidden />;
        }
        case 'listItem': {
            const Icon = item.icon;
            const isSelected =
                pathname.endsWith(item?.path || ' ') ||
                pathname.startsWith(`/${item.title.toLowerCase()}`);

            return (
                <>
                    <ListItem disableGutters aria-label={item.title} {...props}>
                        <ListItemButton
                            selected={isSelected}
                            {...(item.path
                                ? { component: Link, to: item.path }
                                : {
                                      onClick: () =>
                                          setIsItemOpen((prev) => !prev),
                                  })}
                            sx={{
                                ...(isSelected && {
                                    color: 'primary.main',
                                }),
                            }}
                        >
                            {Icon && (
                                <ListItemIcon
                                    sx={{
                                        color: 'inherit',
                                    }}
                                >
                                    <Icon />
                                </ListItemIcon>
                            )}
                            <ListItemText
                                inset={isChild}
                                primary={item.title}
                                slotProps={{
                                    primary: {
                                        variant: 'h4',
                                    },
                                }}
                                sx={{
                                    ...theme.mixins.lineClamp(1),
                                }}
                            />
                            {item.subMenu &&
                                item.subMenu?.length > 0 &&
                                (isItemOpen ? <ExpandLess /> : <ExpandMore />)}
                            {item.badge && (
                                <Chip label={item.badge} color="error" />
                            )}
                        </ListItemButton>
                    </ListItem>
                    {item.subMenu && item.subMenu.length > 0 && (
                        <Collapse in={isItemOpen}>
                            <List aria-label={`submenu of ${item.title}`}>
                                {item.subMenu.map((subItem) => (
                                    <SideBarItem
                                        key={subItem.id}
                                        item={subItem}
                                        isChild
                                    />
                                ))}
                            </List>
                        </Collapse>
                    )}
                </>
            );
        }
    }
};
