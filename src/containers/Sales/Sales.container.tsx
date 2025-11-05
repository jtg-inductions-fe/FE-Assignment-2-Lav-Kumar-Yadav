import { format, parseISO } from 'date-fns';

import { InfoOutlined } from '@mui/icons-material';

import { LineChart, Section } from '@components';
import { useSales } from '@hooks';

/**
 * Sales Container
 *
 * A wrapper component that renders a `LineChart` displaying sales data over time.
 * It retrieves sales data using the `useSales` hook and formats both axis labels
 * and tooltip content for improved readability.
 */
export const Sales = () => {
    const { data: sales } = useSales();

    return (
        <Section heading="Sales" icon={<InfoOutlined />}>
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
        </Section>
    );
};
