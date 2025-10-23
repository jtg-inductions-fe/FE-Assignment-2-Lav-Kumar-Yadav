import { Autocomplete, styled } from '@mui/material';

export const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
    width: theme.spacing(100.5),
    borderWidth: 0,
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(4),
        backgroundColor: 'background.default',
        height: theme.spacing(11.25),
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'secondary.contrastText',
            boxShadow: `0 ${theme.spacing(1)} ${theme.spacing(1)} ${theme.palette.info.dark}`,
        },
    },
})) as typeof Autocomplete;
