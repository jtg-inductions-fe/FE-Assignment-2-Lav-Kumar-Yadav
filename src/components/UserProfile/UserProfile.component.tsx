import { useState } from 'react';

import {
    Avatar,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';

import type { UserProfileProps } from './UserProfile.types';

/**
 * A user profile component that displays the user's avatar and a dropdown menu on clicks.
 * @param  {User} user - the user data containing name and profile picture information
 * @param {MenuItemType []} menus - the list of menu items to display inside the profile dropdown
 * @returns {JSX.Element} A clickable user avatar that opens a profile menu
 */
export const UserProfile = ({ user, menus }: UserProfileProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const theme = useTheme();

    return (
        <>
            <IconButton
                onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                }}
                aria-label="profile"
            >
                <Avatar
                    alt={user?.name.first}
                    src={user?.picture.thumbnail}
                    sx={{
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                    }}
                />
            </IconButton>
            {user && (
                <Menu
                    aria-label="profile-menu"
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    sx={{
                        '& .MuiPaper-root': {
                            borderRadius: theme.spacing(4),
                        },
                    }}
                >
                    <Stack alignItems="center" padding={4}>
                        <Avatar
                            alt={user?.name.first}
                            src={user?.picture.medium}
                            sx={{
                                height: theme.spacing(20),
                                width: theme.spacing(20),
                            }}
                        />
                        <Typography variant="h2">
                            Hello, {user?.name.first}
                        </Typography>
                        <Typography>{user?.email}</Typography>
                    </Stack>
                    <Divider />

                    {menus.map((menu, index) => (
                        <MenuItem key={index}>
                            {menu.icon}
                            {menu.option}
                        </MenuItem>
                    ))}
                </Menu>
            )}
        </>
    );
};
