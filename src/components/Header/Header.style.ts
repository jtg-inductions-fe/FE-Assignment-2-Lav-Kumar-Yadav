import { AppBar, Box, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.secondary.dark,
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        padding: `${theme.spacing(3)} ${theme.spacing(5)}`,
    },
    borderBottom: `${theme.spacing(0.5)} solid ${theme.palette.secondary.contrastText}`,
    boxShadow: 'none',
}));

export const NotificationContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '50%',
    transition: 'box-shadow 0.3s',
    '&:hover': {
        boxShadow: `0 ${theme.spacing(1)} ${theme.spacing(1)} ${theme.palette.info.contrastText}`,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));
