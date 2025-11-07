import { styled, TableRow } from '@mui/material';

export const StyledTableRow = styled(TableRow)({
    '& td:last-of-type': {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    '& td:first-of-type': {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    '& td': {
        border: 0,
    },
});
