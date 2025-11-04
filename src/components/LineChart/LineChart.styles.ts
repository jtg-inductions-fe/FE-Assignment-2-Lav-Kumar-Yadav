import { LineChart } from 'recharts';

import { styled } from '@mui/material';

export const StyledLineChart = styled(LineChart)(({ theme }) => ({
    width: '100%',
    margin: 'auto',
    cursor: 'pointer',
    height: 420,
    color: 'text.disabled',
    fontSize: theme.typography.pxToRem(14),
}));
