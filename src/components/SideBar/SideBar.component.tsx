import {
    IconButton,
    List,
    ListItem,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { Link, SideBarItem } from '@components';

import { StyledDrawer, StyledList } from './SideBar.style';
import type { SideBarProps } from './SideBar.types';

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
    const isDesktop = useMediaQuery((th) => th.breakpoints.up('md'));

    return (
        <StyledDrawer
            variant={isDesktop ? 'permanent' : 'temporary'}
            component={'nav'}
            {...props}
        >
            <List dense aria-label="Sidebar Options">
                {sideBarConfig.map((item) => (
                    <SideBarItem key={item.id} item={item} dense />
                ))}
            </List>
            <StyledList disablePadding aria-label="Bottom Sidebar Options">
                {sidebarBottomIcon.map((Item) => (
                    <ListItem
                        key={Item.path}
                        disableGutters
                        disablePadding
                        sx={{ width: 30 }}
                        aria-label={Item.label}
                    >
                        <IconButton component={Link} to={Item.path}>
                            <Item.icon
                                sx={{ color: theme.palette.text.primary }}
                            />
                        </IconButton>
                    </ListItem>
                ))}
            </StyledList>
        </StyledDrawer>
    );
};
