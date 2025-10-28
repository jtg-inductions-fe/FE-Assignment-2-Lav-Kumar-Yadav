import { AppBar, Box, styled } from '@mui/material';

import { COLORS } from '@constant';

export const StyledAppBar = styled(AppBar)(
    ({ theme: { palette, spacing, breakpoints } }) => ({
        backgroundColor: palette.background.paper,
        color: palette.secondary.dark,
        padding: spacing(4),
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: palette.secondary.contrastText,
        boxShadow: 'none',

        [breakpoints.up('md')]: {
            padding: `${spacing(3)} ${spacing(5)}`,
        },
    }),
);

export const StyledNotificationWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: '50%',
    transition: 'box-shadow 0.3s',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
        boxShadow: `0 4px 4px ${COLORS.GREY.ALPHA_50}`,
    },
}));
