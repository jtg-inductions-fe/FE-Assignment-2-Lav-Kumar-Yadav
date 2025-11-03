import { Drawer, List, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    zIndex: 0,
    width: 300,
    '& .MuiDrawer-paper': {
        zIndex: 0,
        width: 'inherit',
        height: 'calc(100vh - 60px)',
        color: 'black',
        top: theme.spacing(19),
    },
}));

export const StyledList = styled(List)({
    marginTop: 'auto',
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 22,
    paddingTop: 100,
});
