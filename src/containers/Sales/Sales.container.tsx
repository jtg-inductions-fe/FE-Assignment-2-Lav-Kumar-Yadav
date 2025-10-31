import { format, parseISO } from 'date-fns';

import { LineChart } from '@components';
import { useSales } from '@hooks';

/**
 * Sales Component
 *
 * A wrapper component that renders a `LineChart` displaying sales data over time.
 * It retrieves sales data using the `useSales` hook and formats both axis labels
 * and tooltip content for improved readability.
 */
export const Sales = () => {
    const { data: sales } = useSales();

    return (
        <LineChart
            data={sales}
            heading="Sales"
            chartInfo=" This is the sales Section here. There is a statistical representation of the sales throughout this month"
            xKey="date"
            yKey="sales"
            xTickFormatter={(val) => format(parseISO(String(val)), 'dd MMM')}
            yTickFormatter={(val) => `${Number(val) / 1000}k`}
            toolTipLabelFormatter={(val) =>
                format(parseISO(String(val)), 'd MMM, yyyy')
            }
            toolTipValueFormatter={(value) => `$${Number(value) / 1000}k`}
        />
    );
};
