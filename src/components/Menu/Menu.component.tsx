import { useState } from 'react';

import type { MenuItemProps } from '@mui/material';
import { Divider, IconButton, Menu as MuiMenu, MenuItem } from '@mui/material';

import type { MenuConfigItem, MenuProps } from './Menu.types';
/**
 * This is the Component which can render the menuItems by their type, A utility component for Menu below
 * @param config - this is the object which carries `type` property on the basis of which it renders the component
 * @returns  A React Component rendering the config
 */
const RenderMenuItem = ({
    config,
    onClose,
    ...props
}: {
    config: MenuConfigItem;
    onClose?: () => void;
} & MenuItemProps) => {
    switch (config.type) {
        case 'custom': {
            return <MenuItem {...props}>{config.node}</MenuItem>;
        }

        case 'divider': {
            return <Divider />;
        }

        case 'menuItem': {
            const IconComponent = config.Icon;

            return (
                <MenuItem
                    onClick={(event) => {
                        config?.onClick?.(event);
                        onClose?.();
                    }}
                    {...props}
                >
                    <IconComponent sx={{ fontSize: 20, marginRight: 4 }} />
                    {config.option}
                </MenuItem>
            );
        }
    }
};

/**
 * A  Menu component that displays the Menu  and a dropdown menu on clicks.
 * @param children - this is the trigger by click on which the menu opens
 * @param config - this is the configuration which builds profile menu
 * @returns  A clickable user menu that opens a profile menu
 */
export const Menu = ({
    children,
    config,
    iconAriaLabel,
    menuAriaLabel,
    ...props
}: MenuProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const onCLose = () => setAnchorEl(null);

    return (
        <>
            <IconButton
                onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                }}
                aria-label={iconAriaLabel}
            >
                {children}
            </IconButton>
            <MuiMenu
                aria-label={menuAriaLabel}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={onCLose}
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: 4,
                    },
                }}
                {...props}
            >
                {config?.map((item, index) => (
                    <RenderMenuItem
                        key={index}
                        config={item}
                        onClose={onCLose}
                    />
                ))}
            </MuiMenu>
        </>
    );
};
