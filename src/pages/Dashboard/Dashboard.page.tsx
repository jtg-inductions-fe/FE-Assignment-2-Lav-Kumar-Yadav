import { Box, Stack } from '@mui/material';

import { Customers, Hero, Products, Sales, Transactions } from '@containers';

export const Dashboard = () => (
    <Stack gap={4}>
        <Hero />
        <Sales />
        <Stack
            direction={{
                xs: 'column',
                lg: 'row',
            }}
            gap={4}
        >
            <Box
                width={{
                    xs: '100%',
                    lg: '50%',
                }}
            >
                <Customers />
            </Box>
            <Box width="100%">
                <Products />
            </Box>
        </Stack>
    </Stack>
);
