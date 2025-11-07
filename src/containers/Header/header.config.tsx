import { Logout, Person, Settings } from '@mui/icons-material';
import { Avatar, Stack, Typography } from '@mui/material';

import type { MenuConfigItem } from '@components';
import type { User } from '@types';
/**
 *
 * @param user - It takes user which will be used to show a user profile picture , his name and email
 * @returns  a configuration to build the user profile menu
 */
export const buildProfileMenuConfig = (
    user: User | undefined,
): MenuConfigItem[] | null => {
    if (!user) return null;

    return [
        {
            type: 'custom',
            node: (
                <Stack alignItems="center" p={4}>
                    <Avatar
                        alt={user.name.first}
                        src={user.picture.medium}
                        sx={{
                            height: 80,
                            width: 80,
                        }}
                    />
                    <Typography variant="h2">
                        Hello, {user.name.first}
                    </Typography>
                    <Typography>{user.email}</Typography>
                </Stack>
            ),
        },
        {
            type: 'divider',
        },
        {
            type: 'menuItem',
            option: 'Account',
            Icon: Person,
        },
        {
            type: 'menuItem',
            option: 'Settings',
            Icon: Settings,
        },
        {
            type: 'menuItem',
            option: 'Logout',
            Icon: Logout,
        },
    ];
};
