import { useState } from 'react';

import { useLocation } from 'react-router';

import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
    Box,
    Chip,
    Collapse,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Link } from '@components';

import { StyledDrawer } from './SideBar.style';
import type { SidebarConfigType, SideBarProps } from './SideBar.types';

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
const RenderItem = ({ item }: { item: SidebarConfigType[number] }) => {
    const [open, setOpen] = useState<boolean>(false);
    const { pathname } = useLocation();
    const theme = useTheme();

    switch (item.type) {
        case 'divider':
            return <Divider aria-hidden />;
        case 'listItem':
            const Icon = item.icon;
            const isSelected =
                pathname.endsWith(item?.path || ' ') ||
                pathname.startsWith(`/${item.title.toLowerCase()}`);

            return (
                <>
                    <ListItem disableGutters aria-label={item.title}>
                        <ListItemButton
                            selected={isSelected}
                            {...(item.path
                                ? { component: Link, to: item.path }
                                : { onClick: () => setOpen((prev) => !prev) })}
                            sx={{
                                color: isSelected
                                    ? theme.palette.primary.main
                                    : theme.palette.text.primary,
                            }}
                        >
                            {Icon && (
                                <ListItemIcon>
                                    <Icon
                                        sx={{
                                            color: isSelected
                                                ? theme.palette.primary.main
                                                : theme.palette.text.primary,
                                        }}
                                    />
                                </ListItemIcon>
                            )}
                            <ListItemText
                                inset={!Icon}
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
                                item.subMenu.length > 0 &&
                                (open ? <ExpandLess /> : <ExpandMore />)}
                            {item.badge && <Chip label="1" color="error" />}
                        </ListItemButton>
                    </ListItem>
                    {item.subMenu && item.subMenu.length > 0 && (
                        <Collapse in={open}>
                            {item.subMenu.map((subItem) => (
                                <RenderItem key={subItem.id} item={subItem} />
                            ))}
                        </Collapse>
                    )}
                </>
            );
    }
};

/**
 * Sidebar component that renders a navigational drawer with configurable
 * items and optional bottom icon actions.
 *
 * @component
 * @param props - The sidebar configuration and additional drawer props.
 * @param sidebarBottomIcon -
 * Array of bottom icon actions displayed at the bottom of the sidebar. Each icon should have a unique path and optional label for accessibility.
 * @param sideBarConfig -
 *   Array defining the structure and items of the sidebar (list items, dividers, and submenus).
 * @returns  The rendered sidebar drawer element.
 *
 * @example
 *  <SideBar
 *     sideBarConfig={sideBarConfig}
 *     sidebarBottomIcon={sidebarBottomIcon}
 *     open
 *     onClose={() => console.log('Sidebar closed')}
 *  />
 */
export const SideBar = ({
    sidebarBottomIcon,
    sideBarConfig,
    ...props
}: SideBarProps) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <StyledDrawer variant={isMdUp ? 'permanent' : 'temporary'} {...props}>
            <List dense aria-label="Sidebar Options">
                {sideBarConfig.map((item) => (
                    <RenderItem key={item.id} item={item} />
                ))}
            </List>
            <Box
                marginTop="auto"
                marginBottom={4}
                display="flex"
                justifyContent="center"
                alignItems="flex-end"
                gap={5.5}
                paddingTop={25}
            >
                {sidebarBottomIcon.map((Item) => (
                    <IconButton
                        key={Item.path}
                        sx={{ color: theme.palette.text.primary }}
                        component={Link}
                        to={Item.path}
                        aria-label={Item.label}
                    >
                        <Item.icon />
                    </IconButton>
                ))}
            </Box>
        </StyledDrawer>
    );
};
