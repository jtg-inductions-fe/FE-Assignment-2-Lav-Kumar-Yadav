import { Autocomplete, styled } from '@mui/material';

import { COLORS } from '@constant';

export const StyledAutoComplete = styled(Autocomplete)(({ theme }) => ({
    width: '100%',
    maxWidth: 402,
    borderWidth: 0,
    '& .MuiOutlinedInput-root': {
        borderRadius: 16,
        backgroundColor: theme.palette.background.default,
        height: 45,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.secondary.contrastText,
            boxShadow: `0 4px 4px ${COLORS.GREY.ALPHA_50}`,
        },
    },
})) as typeof Autocomplete;
