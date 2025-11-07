import { Box, Stack } from '@mui/material';

import { ErrorBoundary } from '@components';
import {
    Customers,
    Footer,
    Hero,
    Products,
    Sales,
    Transactions,
} from '@containers';
import { SectionErrorFallback } from '@containers';

/**
 *
 * @returns An Admin Dashboard
 */
export const Dashboard = () => (
    <Stack gap={4} marginBottom={4}>
        <ErrorBoundary fallback={SectionErrorFallback}>
            <Hero />
        </ErrorBoundary>
        <ErrorBoundary fallback={SectionErrorFallback}>
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
                <ErrorBoundary fallback={SectionErrorFallback}>
                    <Customers />
                </ErrorBoundary>
            </Box>
            <Box width="100%">
                <ErrorBoundary fallback={SectionErrorFallback}>
                    <Products />
                </ErrorBoundary>
            </Box>
        </Stack>
        <ErrorBoundary fallback={SectionErrorFallback}>
            <Transactions />
        </ErrorBoundary>
        <Footer />
    </Stack>
);
