import { Chip, Drawer, List, styled } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    zIndex: 0,
    width: 300,
    '& .MuiDrawer-paper': {
        zIndex: 0,
        width: 'inherit',
        height: 'calc(100vh - 80px)',
        color: 'black',
        top: theme.spacing(19),
        '&::-webkit-scrollbar': {
            width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.success.contrastText,
            borderRadius: 4,
            cursor: 'pointer',
        },
        [theme.breakpoints.up('xxl')]: {
            position: 'absolute',
        },
    },
}));

export const StyledList = styled(List)({
    backgroundColor: 'inherit',
    position: 'sticky',
    bottom: 0,
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 22,
});

export const StyledChip = styled(Chip)({
    borderRadius: '50%',
    width: 24,
    height: 24,
    '.MuiChip-label': {
        padding: 0,
    },
});
