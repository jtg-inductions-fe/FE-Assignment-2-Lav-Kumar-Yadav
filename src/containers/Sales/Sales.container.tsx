import { format, parseISO } from 'date-fns';

import { InfoOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { LineChart, LineChartSkeleton, Section } from '@components';
import { useSales } from '@hooks';

/**
 * Sales Container
 *
 * A wrapper component that renders a `LineChart` displaying sales data over time.
 * It retrieves sales data using the `useSales` hook and formats both axis labels
 * and tooltip content for improved readability.
 */
export const Sales = () => {
    const { data: sales, isLoading, error } = useSales();

    if (error) {
        throw new Error(error);
    }

    return (
        <Section heading="Sales" icon={<InfoOutlined />}>
            {isLoading ? (
                <Box aria-live="polite" aria-busy="true">
                    <LineChartSkeleton />
                </Box>
            ) : !!sales?.length ? (
                <LineChart
                    data={sales}
                    heading="Sales"
                    xKey="date"
                    yKey="sales"
                    xTickFormatter={(val) => {
                        try {
                            return format(parseISO(String(val)), 'dd MMM');
                        } catch {
                            return String(val);
                        }
                    }}
                    yTickFormatter={(value) => {
                        const num = Number(value);

                        return !isNaN(num) ? `$${num / 1000}k` : '$0k';
                    }}
                    toolTipLabelFormatter={(val) => {
                        try {
                            return format(parseISO(String(val)), 'd MMM, yyyy');
                        } catch {
                            return String(val);
                        }
                    }}
                    toolTipValueFormatter={(value) => {
                        const num = Number(value);

                        return !isNaN(num) ? `$${num / 1000}k` : '$0k';
                    }}
                />
            ) : (
                <Typography variant="body2" textAlign="center" padding={4}>
                    No Sales data available
                </Typography>
            )}
        </Section>
    );
};
