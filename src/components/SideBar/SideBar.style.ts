import { Drawer, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    zIndex: 0,
    '& .MuiDrawer-paper': {
        width: 300,
        height: '91vh',
        color: 'black',
        top: theme.spacing(20.6),
    },
}));
