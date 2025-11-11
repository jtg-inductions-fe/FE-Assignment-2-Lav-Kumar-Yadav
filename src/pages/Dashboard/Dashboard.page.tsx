import { Box, Stack } from '@mui/material';

import { ErrorBoundary, SectionErrorFallback } from '@components';
import { Customers, Hero, Products, Sales, Transactions } from '@containers';

/**
 *
 * @returns An Admin Dashboard
 */
export const Dashboard = () => (
    <Stack gap={4} marginBottom={4}>
        <ErrorBoundary fallback={<SectionErrorFallback height={523} />}>
            <Hero />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionErrorFallback height={524} />}>
            <Sales />
        </ErrorBoundary>
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
                <ErrorBoundary fallback={<SectionErrorFallback height={519} />}>
                    <Customers />
                </ErrorBoundary>
            </Box>
            <Box width="100%">
                <ErrorBoundary fallback={<SectionErrorFallback height={519} />}>
                    <Products />
                </ErrorBoundary>
            </Box>
        </Stack>
        <ErrorBoundary fallback={<SectionErrorFallback height={548} />}>
            <Transactions />
        </ErrorBoundary>
    </Stack>
);
