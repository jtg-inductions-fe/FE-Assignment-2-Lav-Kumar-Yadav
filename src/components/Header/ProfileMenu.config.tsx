import { Logout, Person, Settings } from '@mui/icons-material';
import type { Theme } from '@mui/material/styles';

import type { ProfileMenu } from '@types';

export const buildProfileMenuConfig = (theme: Theme): ProfileMenu => [
    {
        option: 'Account',
        icon: (
            <Person
                sx={{
                    fontSize: theme.spacing(5),
                }}
            />
        ),
    },
    {
        option: 'Settings',
        icon: (
            <Settings
                sx={{
                    fontSize: theme.spacing(5),
                }}
            />
        ),
    },
    {
        option: 'Logout',
        icon: (
            <Logout
                sx={{
                    color: theme.palette.error.contrastText,
                    fontSize: theme.spacing(5),
                }}
            />
        ),
    },
];
