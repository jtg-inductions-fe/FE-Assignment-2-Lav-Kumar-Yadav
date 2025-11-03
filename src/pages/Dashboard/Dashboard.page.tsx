import { Products } from 'containers/Products/Products.container';

import { Grid2 as Grid, Stack } from '@mui/material';

import { Customers, Hero, Sales } from '@containers';

export const Dashboard = () => (
    <Stack gap={4}>
        <Hero />
        <Sales />
        <Grid container spacing={4}>
            <Grid
                size={{
                    xs: 12,
                    xl: 4,
                }}
            >
                <Products />
            </Grid>
            <Grid
                size={{
                    xs: 12,
                    xl: 8,
                }}
            >
                <Customers />
            </Grid>
        </Grid>
    </Stack>
);
