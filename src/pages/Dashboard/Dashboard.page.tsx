import { Stack } from '@mui/material';

import { Hero, Sales } from '@containers';

export const Dashboard = () => (
    <Stack gap={4}>
        <Hero />
        <Sales />
    </Stack>
);
