import { useState } from 'react';

import { Divider, IconButton, Menu as MuiMenu, MenuItem } from '@mui/material';

import type { MenuConfigItem, MenuProps } from './Menu.types';
/**
 * This is the Component which can render the menuItems by their type, A utility component for Menu below
 * @param config - this is the object which carries `type` property on the basis of which it renders the component
 * @returns  A React Component rendering the config
 */
const RenderMenuItem = ({ config }: { config: MenuConfigItem }) => {
    switch (config.type) {
        case 'custom': {
            return config.node;
        }

        case 'divider': {
            return <Divider />;
        }

        case 'menuItem': {
            const IconComponent = config.Icon;

            return (
                <MenuItem>
                    <IconComponent sx={{ fontSize: 20 }} />
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
export const Menu = ({ children, config }: MenuProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    return (
        <>
            <IconButton
                onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                }}
                aria-label="profile"
            >
                {children}
            </IconButton>
            <MuiMenu
                aria-label="profile-menu"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                sx={{
                    '& .MuiPaper-root': {
                        borderRadius: 4,
                    },
                }}
            >
                {config?.map((item, index) => (
                    <RenderMenuItem key={index} config={item} />
                ))}
            </MuiMenu>
        </>
    );
};
