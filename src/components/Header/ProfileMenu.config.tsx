import { Logout, Person, Settings } from '@mui/icons-material';

import { theme } from '@theme';
import type { ProfileMenu } from '@types';

export const profileMenuConfig: ProfileMenu = [
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
        option: 'Setting',
        icon: (
            <Settings
                sx={{
                    fontSize: theme.spacing(5),
                }}
            />
        ),
    },
    {
        option: 'LogOut',
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
