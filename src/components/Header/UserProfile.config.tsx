import { Delete, Person, Settings } from '@mui/icons-material';

import { theme } from '@theme';

type Menu = {
    icon: React.ReactNode;
    option: string;
}[];
export const useProfileConfig: Menu = [
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
            <Delete
                sx={{
                    color: theme.palette.error.contrastText,
                    fontSize: theme.spacing(5),
                }}
            />
        ),
    },
];
