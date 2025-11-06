import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)(
    ({ theme: { spacing, breakpoints } }) => ({
        padding: `${spacing(12)} ${spacing(8)}`,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing(8),
        justifyContent: 'space-between',
        alignItems: 'flex-start',

        [breakpoints.up('lg')]: {
            flexDirection: 'row',
            alignItems: 'center',
        },
    }),
) as typeof Paper;
