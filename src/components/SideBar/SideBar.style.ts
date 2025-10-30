import { Drawer, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        zIndex: 0,
        width: 300,
        height: 'calc(100vh - 60px)',
        color: 'black',
        top: theme.spacing(19),
    },
}));
