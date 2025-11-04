import { Grid2 as Grid, Stack } from '@mui/material';

import { Customers, Hero, Products, Sales } from '@containers';

export const Dashboard = () => (
    <Stack gap={4}>
        <Hero />
        <Sales />
        <Grid container spacing={4}>
            <Grid
                size={{
                    xs: 12,
                    lg: 6,
                    xl: 4,
                }}
            >
                <Customers />
            </Grid>
            <Grid
                size={{
                    xs: 12,
                    lg: 6,
                    xl: 8,
                }}
            >
                <Products />
            </Grid>
        </Grid>
    </Stack>
);
